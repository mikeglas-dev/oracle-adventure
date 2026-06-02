[CmdletBinding()]
param(
  [string]$OutDir = (Join-Path $PSScriptRoot "..\certs"),
  [int]$ValidDays = 365,
  [string[]]$DnsName = @("localhost"),
  [string[]]$IpAddress = @("127.0.0.1", "::1")
)

$resolvedOutDir = [System.IO.Path]::GetFullPath($OutDir)
New-Item -ItemType Directory -Path $resolvedOutDir -Force | Out-Null

$rsa = [System.Security.Cryptography.RSA]::Create(2048)
$subject = [System.Security.Cryptography.X509Certificates.X500DistinguishedName]::new("CN=localhost")
$request = [System.Security.Cryptography.X509Certificates.CertificateRequest]::new(
  $subject,
  $rsa,
  [System.Security.Cryptography.HashAlgorithmName]::SHA256,
  [System.Security.Cryptography.RSASignaturePadding]::Pkcs1
)

$request.CertificateExtensions.Add(
  [System.Security.Cryptography.X509Certificates.X509BasicConstraintsExtension]::new($false, $false, 0, $false)
)
$request.CertificateExtensions.Add(
  [System.Security.Cryptography.X509Certificates.X509KeyUsageExtension]::new(
    [System.Security.Cryptography.X509Certificates.X509KeyUsageFlags]::DigitalSignature -bor
    [System.Security.Cryptography.X509Certificates.X509KeyUsageFlags]::KeyEncipherment,
    $false
  )
)

$sanBuilder = [System.Security.Cryptography.X509Certificates.SubjectAlternativeNameBuilder]::new()
foreach ($name in $DnsName) {
  if (-not [string]::IsNullOrWhiteSpace($name)) {
    $sanBuilder.AddDnsName($name)
  }
}
foreach ($address in $IpAddress) {
  if (-not [string]::IsNullOrWhiteSpace($address)) {
    $sanBuilder.AddIpAddress([System.Net.IPAddress]::Parse($address))
  }
}
$request.CertificateExtensions.Add($sanBuilder.Build())

$notBefore = [System.DateTimeOffset]::UtcNow.AddMinutes(-5)
$notAfter = $notBefore.AddDays($ValidDays)
$certificate = $request.CreateSelfSigned($notBefore, $notAfter)

$certPath = Join-Path $resolvedOutDir "localhost-cert.pem"
$keyPath = Join-Path $resolvedOutDir "localhost-key.pem"
$utf8NoBom = [System.Text.UTF8Encoding]::new($false)

[System.IO.File]::WriteAllText($certPath, $certificate.ExportCertificatePem(), $utf8NoBom)
[System.IO.File]::WriteAllText($keyPath, $rsa.ExportPkcs8PrivateKeyPem(), $utf8NoBom)

Write-Host "Created local HTTPS certificate:"
Write-Host "  Certificate: $certPath"
Write-Host "  Private key: $keyPath"
Write-Host ""
Write-Host "Start the game with:"
Write-Host '  $env:HTTPS="true"; node serve-game.js'
