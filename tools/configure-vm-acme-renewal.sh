#!/usr/bin/env bash
set -euo pipefail

(crontab -l 2>/dev/null | grep -v "\.acme\.sh.*--cron" || true) | crontab -

tmp=$(mktemp)
sudo crontab -l 2>/dev/null | grep -v "oracle-adventure-acme" > "$tmp" || true
echo "17 */8 * * * HOME=/home/opc /home/opc/.acme.sh/acme.sh --cron --home /home/opc/.acme.sh > /var/log/oracle-adventure-acme.log 2>&1 # oracle-adventure-acme" >> "$tmp"
sudo crontab "$tmp"
rm -f "$tmp"

echo "opc crontab:"
crontab -l 2>/dev/null || true
echo "root crontab:"
sudo crontab -l
