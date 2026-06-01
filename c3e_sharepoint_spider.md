# C3E SharePoint Spider Report

Generated: 2026-05-22  
Live refreshed: 2026-06-01  
Start URL: https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/SitePages/C3E-Overview.aspx  
Site: Alchemy (`/teams/NACIOCIProjectAlchemy`)  
Connector used: Microsoft SharePoint plugin

Refresh note: The Microsoft SharePoint connector was reauthenticated and a live crawl succeeded on 2026-06-01. The live crawl resolved the Alchemy site, the `Documents` library, the C3E overview page, the C3E framework folder tree, and one level of example/supporting asset folders. Links require Oracle SharePoint access.

## Crawl Summary

The SharePoint connector resolved the Alchemy site and browsed the visible `Documents` library. The start page itself (`SitePages/C3E-Overview.aspx`) was accessible as a SharePoint page file, but the connector exposed it as `application/xml` and did not extract rendered page text. Because of that, this report uses:

- Start page metadata from the `.aspx` item.
- The browsable `Documents` library.
- The `C3E-Framework` folder tree.
- Extracted text from key framework guides, templates, PDFs, and the C3E activities spreadsheet.
- Inventories of representative example folders.

The start page item was last modified on 2026-03-04 and is named `C3E-Overview.aspx`.

## Site Map

Root document folders discovered:

| Folder | Child count | Notes |
|---|---:|---|
| Alchemy Tooling | 6 | Tooling docs, how-to guides, training assets, activity definitions spreadsheet. |
| C3E-Framework | 10 | Main framework library, organized by engagement phase. |
| Miscellaneous Templates | 1 | Additional templates. |
| Retrospective Analysis | 1 | Retrospective analysis material. |
| Sizzle Meeting Minutes | 1 | Meeting notes folder. |

`C3E-Framework` phase folders:

| Folder | Child count | Role |
|---|---:|---|
| 0 - C3E Enablement + Office Hours | 4 | Enablement PDF, FAQ, office-hours videos, roadmap presentation. |
| 1 - Qualify | 2 | Technical account plan template and examples. |
| 2 - Develop | 5 | POV / PR FAQ template, Why OCI deck, examples, previous versions. |
| 3 - Discover | 6 | Current state, risk, strategic approach, workload evaluation. |
| 4 - Design | 4 | Future state architecture, technical proposal, governance examples. |
| 5 - Prove | 4 | Migration risk assessment, risk register, POC/ramp artifacts. |
| 6 - Win | 5 | Retrospective templates and examples. |
| 7 - Deploy | 2 | Technical roadmap template and examples. |
| 8+9 - Support & Grow | 1 | Support and grow examples. |

## Framework Overview

C3E stands for Customer Centered Cloud Engagements. The framework is a structured engagement model for OCI Cloud Engineering Infrastructure pursuits. It is meant to improve customer technical outcomes, improve Oracle growth outcomes, increase repeatability in engagements, improve the precision of engineering work products, and make SPA the single source of truth for pursuits and activities.

The model is intentionally iterative. Support and grow activities can reveal new opportunities that loop back into earlier phases.

Core phases:

1. Qualify
2. Develop
3. Discover
4. Design
5. Prove
6. Win
7. Deploy
8. Support
9. Grow

The framework emphasizes long-form written artifacts because they force clearer thinking about the customer, the business outcome, the technical strategy, the risks, and the roadmap.

## Required Outputs By Phase

| Phase | Required / primary outputs |
|---|---|
| Qualify | Draft Technical Account Plan, account strategy, influence map. |
| Develop | POV / Mock Press Release, final Technical Account Plan, Why OCI pitch. |
| Discover | Strategic Technical Approach, Engagement Risk Assessment, Current State Analysis, Workload Evaluation. |
| Design | Technical Proposal, future state architecture, scoped technical BOM, governance model. |
| Prove | POC or Pilot-to-Production, Joint Execution Plan, Migration Risk Assessment, refined proposal. |
| Win | Final consumption ramp, Engagement Retrospective. |
| Deploy | Technical Roadmap, Go-Live Plan, consumption forecast. |
| Support & Grow | Quarterly Technical Reviews, OCI roadmap, health checks, enablement, optimization, FinOps, innovation sessions. |

## Core Artifacts Fetched

| Artifact | Phase | Type | Purpose | SharePoint link |
|---|---|---|---|---|
| C3E-SPA-Enablement.pdf | 0 - Enablement | PDF | Framework overview, phase model, SPA mapping, key activities, required outputs. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/0%20-%20C3E%20Enablement%20%2B%20Office%20Hours/C3E-SPA-Enablement.pdf) |
| C3E Framework-FAQ.docx | 0 - Enablement | DOCX | FAQ for SPA, pursuits, sales alignment, PR/FAQ, proposals, retrospectives. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/0%20-%20C3E%20Enablement%20%2B%20Office%20Hours/C3E%20Framework-FAQ.docx?web=1) |
| Technical Account Plan - Template.docx | 1 - Qualify | DOCX | Technical viewpoint of the account; complements the commercial account plan. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/1%20-%20Qualify/Technical%20Account%20Plan%20-%20Template.docx?d=we015495c580e41b3a82459f1e7a6c51e&csf=1&web=1&e=URkLNZ) |
| POV_PR_FAQ Template.docx | 2 - Develop | DOCX | Guides a visionary point of view and mock press release. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/POV_PR_FAQ%20Template.docx?d=wdff69c310ce34253902c605b8ef9556e&csf=1&web=1&e=52lR6x) |
| Current State Analysis-Guide.docx | 3 - Discover | DOCX | Guides customer current-state discovery across context, architecture, inventory, cost, gaps, and resources. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/3%20-%20Discover/Current%20State%20Analysis-Guide.docx?web=1) |
| Engagement Risk Assessment Template.docx | 3 - Discover | DOCX | Overview-page deliverable link for the engagement risk assessment. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/3%20-%20Discover/Engagement%20Risk%20Assessment%20Template.docx?d=w85ec0666326d42be87123c2255cc6a8f&csf=1&web=1&e=Rc52tH) |
| Engagement Risk Assessment Guide.docx | 3 - Discover | DOCX | Pre-mortem process for pursuit risks and mitigation actions. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/3%20-%20Discover/Engagement%20Risk%20Assessment%20Guide.docx?web=1) |
| Strategic Technical Approach - Template.docx | 3 - Discover | DOCX | Executive summary, current state, risks, influence map, workload evaluation, roadmap, next steps. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/3%20-%20Discover/Strategic%20Technical%20Approach%20-%20Template.docx?d=wb82eb6fdccd942d688c84698c894228a&csf=1&web=1&e=oWCCkM) |
| Workload Evaluation Approach - Guide.docx | 3 - Discover | DOCX | Transition approach, assumptions, risks, economic model, and transition roadmap. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/3%20-%20Discover/Workload%20Evaluation%20Approach%20-%20Guide.docx?web=1) |
| Future State Architecture - Guide.docx | 4 - Design | DOCX | How to create OCI future-state architecture diagrams and views. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/4%20-%20Design/Future%20State%20Architecture%20-%20Guide.docx?web=1) |
| Technical Proposal - Template.docx | 4 - Design | DOCX | Customer-facing future-state proposal, economics, transition plan, governance, risk mitigation. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/4%20-%20Design/Technical%20Proposal%20-%20Template.docx?d=wb1a415629d0446c18523f55d535b57fe&csf=1&web=1&e=RcU6My) |
| Migration Risk Assessment - Structure + Appendix.docx | 5 - Prove | DOCX | Migration risk identification, risk register, stakeholder, service, and workload checklist. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/5%20-%20Prove/Migration%20Risk%20Assessment%20-%20Structure%20+%20Appendix.docx?d=w07cdb10e89684e7bbecd54b094ba3238&csf=1&web=1&e=CufufP) |
| Engagement Retrospective - Template.docx | 6 - Win | DOCX | Captures outcome, competitive landscape, highlights, lowlights, lessons, and re-engagement signals. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/6%20-%20Win/Engagement%20Retrospective%20-%20Template.docx?d=wa4d47b9cca2a4690a3cb2ea63232b97e&csf=1&web=1&e=OgwLWS) |
| Technical Roadmap Template.docx | 7 - Deploy | DOCX | Post-win roadmap for Oracle footprint, projects, future vision, and next steps. | [Open asset](https://oracle.sharepoint.com/:w:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/7%20-%20Deploy/Technical%20Roadmap%20Template.docx?web=1) |
| C3E_ACTIVITIES-DEFINITIONS.xlsx | Alchemy Tooling | XLSX | Activity definitions by phase and account/engagement applicability. | [Open asset](https://oracle.sharepoint.com/:x:/r/teams/NACIOCIProjectAlchemy/Shared%20Documents/Alchemy%20Tooling/C3E_ACTIVITIES-DEFINITIONS.xlsx?web=1) |

## Overview Page Links

These links were found directly in the local saved export of the C3E overview page.

| Target | Purpose | Link |
|---|---|---|
| C3E Overview page | Start page for the SharePoint C3E experience. | [Open page](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/SitePages/C3E-Overview.aspx) |
| C3E Framework Engagement Model | Overview-page anchor for the engagement model section. | [Open section](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/SitePages/C3E-Overview.aspx#c3e-framework-engagement-model) |
| Engagement Framework | Overview-page anchor for the engagement framework section. | [Open section](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/SitePages/C3E-Overview.aspx#engagement-framework) |
| Framework Deliverables | Overview-page anchor for the deliverables section. | [Open section](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/SitePages/C3E-Overview.aspx#framework-deliverables) |
| Overview banner image | Page image asset used by the SharePoint page. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/SiteAssets/Alchemy%20images/Banner_2.png) |

## Live Asset Inventory

This inventory was found by the live SharePoint crawl on 2026-06-01. NPCs should use these rows to provide clickable links when a player asks about a named asset, example, template, guide, deck, spreadsheet, PDF, video, or folder.

| Asset | Phase | Type | Purpose | SharePoint link |
|---|---|---|---|---|
| C3E Overview page | Overview | Page | Primary C3E SharePoint overview page. | [Open page](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/SitePages/C3E-Overview.aspx?web=1) |
| Banner_2.png | Overview | Image | Overview-page banner image. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/SiteAssets/Alchemy%20images/Banner_2.png) |
| C3E Framework model image | Overview | Image | Framework model image embedded on the overview page. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/SiteAssets/SitePages/C3E-Overview/3702539726.png) |
| Alchemy Tooling | Alchemy Tooling | Folder | Tooling documents, how-to guides, training assets, and activity definitions. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/Alchemy%20Tooling?web=1) |
| C3E-Framework | Framework | Folder | Main C3E framework library. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework?web=1) |
| C3E Framework-FAQ.docx | 0 - Enablement | DOCX | FAQ for SPA, pursuits, sales alignment, PR/FAQ, proposals, and retrospectives. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B5A44698E-0B63-4A85-95DE-E7DFE8630CA1%7D&file=C3E%20Framework-FAQ.docx&action=default&mobileredirect=true) |
| C3E-Enablement.mp4 | 0 - Enablement | MP4 | C3E enablement video. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/0%20-%20C3E%20Enablement%20+%20Office%20Hours/C3E-Enablement.mp4) |
| C3E-SPA-Enablement.pdf | 0 - Enablement | PDF | Framework overview, phase model, SPA mapping, key activities, and required outputs. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/0%20-%20C3E%20Enablement%20+%20Office%20Hours/C3E-SPA-Enablement.pdf) |
| Office Hours | 0 - Enablement | Folder | C3E office-hours recordings and presentation material. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/0%20-%20C3E%20Enablement%20+%20Office%20Hours/Office%20Hours) |
| C3EPresentation-techroadmap-doc.pptx | 0 - Enablement | PPTX | Office-hours presentation about the technical roadmap document. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B4E78ADFB-9A03-4F90-997D-054A4E9FCDBB%7D&file=C3EPresentation-techroadmap-doc.pptx&action=edit&mobileredirect=true) |
| C3E-SPA Office Hours_103024.mp4 | 0 - Enablement | MP4 | Office-hours recording from 2024-10-30. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/0%20-%20C3E%20Enablement%20+%20Office%20Hours/Office%20Hours/C3E-SPA%20Office%20Hours_103024.mp4) |
| C3E-SPA Office Hrs_110624.mp4 | 0 - Enablement | MP4 | Office-hours recording from 2024-11-06. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/0%20-%20C3E%20Enablement%20+%20Office%20Hours/Office%20Hours/C3E-SPA%20Office%20Hrs_110624.mp4) |
| C3E-SPA office Hrs_111324.mp4 | 0 - Enablement | MP4 | Office-hours recording from 2024-11-13. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/0%20-%20C3E%20Enablement%20+%20Office%20Hours/Office%20Hours/C3E-SPA%20office%20Hrs_111324.mp4) |
| C3E-SPA Office Hrs_112024.mp4 | 0 - Enablement | MP4 | Office-hours recording from 2024-11-20. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/0%20-%20C3E%20Enablement%20+%20Office%20Hours/Office%20Hours/C3E-SPA%20Office%20Hrs_112024.mp4) |
| Technical Account Plan - Template.docx | 1 - Qualify | DOCX | Qualify template for technical account planning. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BE015495C-580E-41B3-A824-59F1E7A6C51E%7D&file=Technical%20Account%20Plan%20-%20Template.docx&action=default&mobileredirect=true) |
| Technical Account Plan Examples - Internal Only | 1 - Qualify | Folder | Example technical account plans for Qualify. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/1%20-%20Qualify/Technical%20Account%20Plan%20Examples%20-%20Internal%20Only) |
| Anduril - Technical Account Strategy.docx | 1 - Qualify | DOCX | Example technical account strategy. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B8D0B9907-0C4C-4225-AC41-A22029ED0CB0%7D&file=Anduril%20%E2%80%93%20Technical%20Account%20Strategy.docx&action=default&mobileredirect=true) |
| Anduril - Technical Account Strategy.pdf | 1 - Qualify | PDF | PDF example technical account strategy. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/1%20-%20Qualify/Technical%20Account%20Plan%20Examples%20-%20Internal%20Only/Anduril%20%E2%80%93%20Technical%20Account%20Strategy.pdf) |
| POV_PR_FAQ Template.docx | 2 - Develop | DOCX | Develop template for POV / PR FAQ. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BDFF69C31-0CE3-4253-902C-605B8EF9556E%7D&file=POV_PR_FAQ%20Template.docx&action=default&mobileredirect=true) |
| Why OCI Deck.pptx | 2 - Develop | PPTX | Why OCI technical presentation deck. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B7910D00D-8667-448C-ACB5-D8A2110A3DC7%7D&file=Why%20OCI%20Deck.pptx&action=edit&mobileredirect=true) |
| POV Examples | 2 - Develop | Folder | POV example library. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/POV%20Examples) |
| Why OCI Deck Examples + Walkthrough | 2 - Develop | Folder | Why OCI examples and walkthrough material. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/Why%20OCI%20Deck%20Examples%20+%20Walkthrough) |
| AeroVironment - POV.docx | 2 - Develop | DOCX | POV example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B828A2010-AA52-419A-AEBD-0B25D7348E05%7D&file=AeroVironment%20-%20POV.docx&action=default&mobileredirect=true) |
| AeroVironment - POV.pdf | 2 - Develop | PDF | POV example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/POV%20Examples/AeroVironment%20-%20POV.pdf) |
| Fidelity - POV - DRCC Proposal.docx | 2 - Develop | DOCX | POV / DRCC proposal example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B07DE052C-C7EB-4895-8D65-045D420EA204%7D&file=Fidelity%20-%20POV%20-%20DRCC%20Proposal.docx&action=default&mobileredirect=true) |
| Fidelity - POV - DRCC Proposal.pdf | 2 - Develop | PDF | POV / DRCC proposal example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/POV%20Examples/Fidelity%20-%20POV%20-%20DRCC%20Proposal.pdf) |
| SEI - POV.docx | 2 - Develop | DOCX | POV example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B4B278CF7-BD1F-4FD5-9D69-52FD75BC4D61%7D&file=SEI%20-%20POV.docx&action=default&mobileredirect=true) |
| SEI - POV.pdf | 2 - Develop | PDF | POV example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/POV%20Examples/SEI%20-%20POV.pdf) |
| SentinelOne - POV.pdf | 2 - Develop | PDF | POV example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/POV%20Examples/SentinelOne%20-%20POV.pdf) |
| Sephora - POV.docx | 2 - Develop | DOCX | POV example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B370E8CA8-A702-4E16-A70B-628686226A33%7D&file=Sephora%20-%20POV.docx&action=default&mobileredirect=true) |
| Sephora - POV.pdf | 2 - Develop | PDF | POV example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/POV%20Examples/Sephora%20-%20POV.pdf) |
| Shopify - POV.pdf | 2 - Develop | PDF | POV example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/POV%20Examples/Shopify%20-%20POV.pdf) |
| Skyhigh - POV.pdf | 2 - Develop | PDF | POV example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/POV%20Examples/Skyhigh%20-%20POV.pdf) |
| Softbank - POV.pdf | 2 - Develop | PDF | POV example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/POV%20Examples/Softbank%20-%20POV.pdf) |
| Synchrony - POV.docx | 2 - Develop | DOCX | POV example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BC4D683C3-AA1C-4EED-A9D1-4DFD953DC10F%7D&file=Synchrony%20-%20POV.docx&action=default&mobileredirect=true) |
| Synchrony - POV.pdf | 2 - Develop | PDF | POV example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/POV%20Examples/Synchrony%20-%20POV.pdf) |
| Toast - OCI OpenSearch vs AWS.pdf | 2 - Develop | PDF | Why OCI / competitive comparison example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/Why%20OCI%20Deck%20Examples%20+%20Walkthrough/Toast%20%E2%80%93%20OCI%20OpenSearch%20vs%20AWS.pdf) |
| WhyOCI-Walkthrough.mp4 | 2 - Develop | MP4 | Why OCI walkthrough video. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/Why%20OCI%20Deck%20Examples%20+%20Walkthrough/WhyOCI-Walkthrough.mp4) |
| Current State Analysis-Guide.docx | 3 - Discover | DOCX | Current-state discovery guide. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B1C8AFA95-1EA6-4A7F-ACDD-51EFA8F6DE84%7D&file=Current%20State%20Analysis-Guide.docx&action=default&mobileredirect=true) |
| Engagement Risk Assessment Guide.docx | 3 - Discover | DOCX | Risk assessment guide and pre-mortem process. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BB5EE28FC-C163-4EEF-924F-2E590B365F8A%7D&file=Engagement%20Risk%20Assessment%20Guide.docx&action=default&mobileredirect=true) |
| Engagement Risk Assessment Template.docx | 3 - Discover | DOCX | Risk assessment template. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B85EC0666-326D-42BE-8712-3C2255CC6A8F%7D&file=Engagement%20Risk%20Assessment%20Template.docx&action=default&mobileredirect=true) |
| Strategic Technical Approach - Template.docx | 3 - Discover | DOCX | Strategic Technical Approach template. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BB82EB6FD-CCD9-42D6-88C8-4698C894228A%7D&file=Strategic%20Technical%20Approach%20-%20Template.docx&action=default&mobileredirect=true) |
| Technical Strategic Approach - Examples - Internal Only | 3 - Discover | Folder | Internal Strategic Technical Approach examples. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/3%20-%20Discover/Technical%20Strategic%20Approach%20-%20Examples%20-%20Internal%20Only) |
| Workload Evaluation Approach - Guide.docx | 3 - Discover | DOCX | Workload evaluation and transition approach guide. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B24DFD506-A2A0-4567-A9FC-660F494AF619%7D&file=Workload%20Evaluation%20Approach%20-%20Guide.docx&action=default&mobileredirect=true) |
| Design Examples | 4 - Design | Folder | Design-phase example assets. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/4%20-%20Design/Design%20Examples) |
| Future State Architecture - Guide.docx | 4 - Design | DOCX | Future-state architecture guide. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B5E5CF388-5611-4B04-BDF8-1D9A7FE052CE%7D&file=Future%20State%20Architecture%20-%20Guide.docx&action=default&mobileredirect=true) |
| Governance Model Examples.pptx | 4 - Design | PPTX | Governance model examples. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BFFEFE3E1-E9EE-4E0D-BE9F-8F0480D8A127%7D&file=Governance%20Model%20Examples.pptx&action=edit&mobileredirect=true) |
| Technical Proposal - Template.docx | 4 - Design | DOCX | Technical Proposal template. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BB1A41562-9D04-46C1-8523-F55D535B57FE%7D&file=Technical%20Proposal%20-%20Template.docx&action=default&mobileredirect=true) |
| Anduril - JEP.pdf | 4 - Design | PDF | Joint execution plan example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/4%20-%20Design/Design%20Examples/Anduril%20-%20JEP.pdf) |
| Anduril - POC BOM.xlsx | 4 - Design | XLSX | POC bill-of-materials example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BED4B19DC-F469-4310-B4E5-6124F1D7FEDA%7D&file=Anduril%20-%20POC%20BOM.xlsx&action=default&mobileredirect=true) |
| EchoStar - Parking Lot Items - Responses and Answers.pdf | 4 - Design | PDF | Design-response example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/4%20-%20Design/Design%20Examples/EchoStar%20-%20Parking%20Lot%20Items%20-%20Responses%20and%20Answers.pdf) |
| GE HealthCare - JEP.docx | 4 - Design | DOCX | Joint execution plan example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BC0964C1B-7E00-4FAC-A888-0BD497598943%7D&file=GE%20HealthCare%20-%20JEP.docx&action=default&mobileredirect=true) |
| GE HealthCare - JEP.pdf | 4 - Design | PDF | Joint execution plan example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/4%20-%20Design/Design%20Examples/GE%20HealthCare%20-%20JEP.pdf) |
| Shopify - POC - JEP.docx | 4 - Design | DOCX | POC joint execution plan example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BC5038B5D-C72C-4815-9B6A-778DE326D547%7D&file=Shopify%20%E2%80%93%20POC%20%E2%80%93%20JEP.docx&action=default&mobileredirect=true) |
| Shopify - POC - JEP.pdf | 4 - Design | PDF | POC joint execution plan example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/4%20-%20Design/Design%20Examples/Shopify%20%E2%80%93%20POC%20%E2%80%93%20JEP.pdf) |
| ToolsGroup - POC - JEP.pdf | 4 - Design | PDF | POC joint execution plan example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/4%20-%20Design/Design%20Examples/ToolsGroup%20%E2%80%93%20POC%20%E2%80%93%20JEP.pdf) |
| Migration Risk Assessment - Structure + Appendix.docx | 5 - Prove | DOCX | Migration risk assessment structure and appendix. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B07CDB10E-8968-4E7B-BECD-54B094BA3238%7D&file=Migration%20Risk%20Assessment%20-%20Structure%20%2B%20Appendix.docx&action=default&mobileredirect=true) |
| MigrationRiskRegister-Template.xlsx | 5 - Prove | XLSX | Migration risk register template. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B88ED0099-8984-4087-B4E8-930329946358%7D&file=MigrationRiskRegister-Template.xlsx&action=default&mobileredirect=true) |
| Template - AI POC Timeline.xlsx | 5 - Prove | XLSX | AI POC timeline template. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B667B1F20-CD01-43D7-885D-4F517A187D88%7D&file=Template%20-%20AI%20POC%20Timeline.xlsx&action=default&mobileredirect=true) |
| Prove Examples | 5 - Prove | Folder | Prove-phase examples. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/5%20-%20Prove/Prove%20Examples) |
| Benchmark - H200vB200 - 1st-July-Benchmark DeepSeek V3.pdf | 5 - Prove | PDF | Benchmark example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/5%20-%20Prove/Prove%20Examples/Benchmark%20-%20H200vB200%20-%201st-July-Benchmark%20DeepSeek%20V3.pdf) |
| Benchmark - Positron.pdf | 5 - Prove | PDF | Benchmark example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/5%20-%20Prove/Prove%20Examples/Benchmark%20-%20Positron.pdf) |
| Benchmark - Reka Models on OCI for Inference.pdf | 5 - Prove | PDF | Benchmark example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/5%20-%20Prove/Prove%20Examples/Benchmark%20-%20Reka%20Models%20on%20OCI%20for%20Inference.pdf) |
| Benchmark - SeedDream.pdf | 5 - Prove | PDF | Benchmark example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/5%20-%20Prove/Prove%20Examples/Benchmark%20-%20SeedDream.pdf) |
| Freewheel - Meeting Notes - NATGW - 12-16-2025.docx | 5 - Prove | DOCX | Prove meeting-notes example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B4D3402D9-DF6B-4228-8B3F-7792AE9D3809%7D&file=Freewheel%20-%20Meeting%20Notes%20-%20NATGW%20-%2012-16-2025.docx&action=default&mobileredirect=true) |
| Mux - Technical Transition Strategy Proposal.docx | 5 - Prove | DOCX | Technical transition strategy proposal example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B48B46973-A02E-4020-8666-852CBDE8F92A%7D&file=Mux%20%E2%80%93%20Technical%20Transition%20Strategy%20Proposal.docx&action=default&mobileredirect=true) |
| NCCI - Recovery Site Transition to OCI.docx | 5 - Prove | DOCX | Recovery-site transition example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B15BB4458-88A4-4660-B5D5-A8FDD5233FF8%7D&file=NCCI%20-%20Recovery%20Site%20Transition%20to%20OCI.docx&action=default&mobileredirect=true) |
| Thomson Reuters - OCI Service Mappings.xlsx | 5 - Prove | XLSX | OCI service mapping example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B6A0D3F40-9961-4882-B8C8-78F3E1458BBE%7D&file=Thomson%20Reuters%20%E2%80%93%20OCI%20Service%20Mappings.xlsx&action=default&mobileredirect=true) |
| Thomson Reuters - RFP Response - Addendum.xlsx | 5 - Prove | XLSX | RFP response addendum example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B014B8E5C-A80E-4691-B1BB-E7A1AB4248B4%7D&file=Thomson%20Reuters%20-%20RFP%20Response%20-%20Addendum.xlsx&action=default&mobileredirect=true) |
| Thomson Reuters - RFP Response.pdf | 5 - Prove | PDF | RFP response example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/5%20-%20Prove/Prove%20Examples/Thomson%20Reuters%20-%20RFP%20Response.pdf) |
| Vertical Solution Stack - Migrating data off local NVMe using Fpsync.pdf | 5 - Prove | PDF | Migration / data movement example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/5%20-%20Prove/Prove%20Examples/Vertical%20Solution%20Stack%20-%20Migrating%20data%20off%20local%20NVMe%20using%20Fpsync.pdf) |
| Engagement Retrospective - Template.docx | 6 - Win | DOCX | Win retrospective template. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BA4D47B9C-CA2A-4690-A3CB-2EA63232B97E%7D&file=Engagement%20Retrospective%20-%20Template.docx&action=default&mobileredirect=true) |
| Retrospective-PPT-Template.pptx | 6 - Win | PPTX | Retrospective presentation template. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BA4022CF1-8C53-4398-B6BA-D2857FA9DFBE%7D&file=Retrospective-PPT-Template.pptx&action=edit&mobileredirect=true) |
| Completed Retrospectives - Graves Org | 6 - Win | Folder | Completed retrospective examples. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/6%20-%20Win/Completed%20Retrospectives%20-%20Graves%20Org) |
| Win Examples | 6 - Win | Folder | Win-phase examples. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/6%20-%20Win/Win%20Examples) |
| Engagement Retrospective - Carters.docx | 6 - Win | DOCX | Completed retrospective example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B369BE4C5-2C06-4D89-94B9-503680B09A5F%7D&file=Engagement%20Retrospective%20-%20Carters.docx&action=default&mobileredirect=true) |
| Engagement Retrospective - MGM.docx | 6 - Win | DOCX | Completed retrospective example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B6AD765E2-CC21-4B96-983F-CE9EA3EBE236%7D&file=Engagement%20Retrospective%20-%20MGM.docx&action=default&mobileredirect=true) |
| SpinSci - Consumption Ramp.xlsm | 6 - Win | XLSM | Consumption ramp example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BE3F72E31-7E0D-4A79-9577-A32200CE11E4%7D&file=SpinSci%20-%20Consumption%20Ramp.xlsm&action=default&mobileredirect=true) |
| Technical Roadmap Template.docx | 7 - Deploy | DOCX | Deploy technical roadmap template. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BD11DF00D-E633-411E-8509-B92DFFA11D08%7D&file=Technical%20Roadmap%20Template.docx&action=default&mobileredirect=true) |
| Deploy Examples | 7 - Deploy | Folder | Deploy-phase examples. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/7%20-%20Deploy/Deploy%20Examples) |
| Thomson Reuters - OCI Cloud Engineering Services - Migration Approach.docx | 7 - Deploy | DOCX | Migration approach example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B6E074989-4782-4F49-89C0-FD492EB378DE%7D&file=Thomson%20Reuters%20%E2%80%93%20OCI%20Cloud%20Engineering%20Services%20%E2%80%93%20Migration%20Approach.docx&action=default&mobileredirect=true) |
| Thomson Reuters - OCI Cloud Engineering Services - Migration Approach.pdf | 7 - Deploy | PDF | Migration approach example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/7%20-%20Deploy/Deploy%20Examples/Thomson%20Reuters%20%E2%80%93%20OCI%20Cloud%20Engineering%20Services%20%E2%80%93%20Migration%20Approach.pdf) |
| Wynshop - Migration Plan from GCP to OCI.pptx | 7 - Deploy | PPTX | Deploy migration plan example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B0E43FC98-9F87-40FD-AC4C-ED1FAA331A13%7D&file=Wynshop%20-%20Migration%20Plan%20from%20GCP%20to%20OCI.pptx&action=edit&mobileredirect=true) |
| Support & Grow Examples | 8+9 - Support & Grow | Folder | Support and Grow examples. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples) |
| Claritev - 2HFY26 Opportunity Analysis.docx | 8+9 - Support & Grow | DOCX | Opportunity analysis example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BDCC89337-DE56-42F5-8AC0-7C3FA5EBB217%7D&file=Claritev%20-%202HFY26%20Opportunity%20Analysis.docx&action=default&mobileredirect=true) |
| Claritev - Customer Opportunity Assessment.pdf | 8+9 - Support & Grow | PDF | Customer opportunity assessment example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples/Claritev%20%E2%80%93%20Customer%20Opportunity%20Assessment.pdf) |
| Data Science - MLFlow - Toolset for AI_ML workloads.pdf | 8+9 - Support & Grow | PDF | Data science / MLFlow toolset example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples/Data%20Science%20-%20MLFlow%20-%20Toolset%20for%20AI_ML%20workloads.pdf) |
| FreeWheel - Enablement Agenda.docx | 8+9 - Support & Grow | DOCX | Enablement agenda example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B6BF2EEEF-AA5F-4D8D-8B52-0BBF4BBB1E5D%7D&file=FreeWheel%20-%20Enablement%20Agenda.docx&action=default&mobileredirect=true) |
| FreeWheel - Enablement Agenda.pdf | 8+9 - Support & Grow | PDF | Enablement agenda example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples/FreeWheel%20-%20Enablement%20Agenda.pdf) |
| Incident Response - DCGM Monitoring.pdf | 8+9 - Support & Grow | PDF | Incident response / monitoring example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples/Incident%20Response%20-%20DCGM%20Monitoring.pdf) |
| McGraw Hill - Workload Assessment.pdf | 8+9 - Support & Grow | PDF | Workload assessment example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples/McGraw%20Hill%20-%20Workload%20Assessment.pdf) |
| Modeling Operations - OCI Scalable AI Inference Solution.pdf | 8+9 - Support & Grow | PDF | Modeling operations example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples/Modeling%20Operations%20-%20OCI%20Scalable%20AI%20Inference%20Solution.pdf) |
| Palo Alto - 2HFY26 Opportunity Analysis.pdf | 8+9 - Support & Grow | PDF | Opportunity analysis example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples/Palo%20Alto%20-%202HFY26%20Opportunity%20Analysis.pdf) |
| Partner Solution - ArgoCD - Automating ML Pipelines for Medical Images Using Argo Workflows.pdf | 8+9 - Support & Grow | PDF | Partner solution example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples/Partner%20Solution%20-%20ArgoCD%20-%20Automating%20ML%20Pipelines%20for%20Medical%20Images%20Using%20Argo%20Workflows.pdf) |
| Redstone Content Solutions - Health Check Presentation.pdf | 8+9 - Support & Grow | PDF | Health check presentation example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples/Redstone%20Content%20Solutions%20%E2%80%93%20Health%20Check%20Presentation.pdf) |
| Redstone Content Solutions - Health Check Summary.pdf | 8+9 - Support & Grow | PDF | Health check summary example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples/Redstone%20Content%20Solutions%20%E2%80%93%20Health%20Check%20Summary.pdf) |
| Thomson Reuters - Consumption Overview.docx | 8+9 - Support & Grow | DOCX | Consumption overview example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B78D65C17-89C0-47DD-802E-D3CE57B8ECFC%7D&file=Thomson%20Reuters%20%E2%80%93%20Consumption%20Overview.docx&action=default&mobileredirect=true) |
| Thomson Reuters - Consumption Overview.pdf | 8+9 - Support & Grow | PDF | Consumption overview example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples/Thomson%20Reuters%20%E2%80%93%20Consumption%20Overview.pdf) |
| Uber - FY26 Opportunity Analysis.pdf | 8+9 - Support & Grow | PDF | Opportunity analysis example. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/8+9%20-%20Support%20%26%20Grow/Support%20%26%20Grow%20Examples/Uber%20-%20FY26%20Opportunity%20Analysis.pdf) |
| C3E_ACTIVITIES-DEFINITIONS.xlsx | Alchemy Tooling | XLSX | Activity definitions by phase and account/engagement applicability. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B5DF95103-47A1-4E1D-872D-FD907BDCDD1B%7D&file=C3E_ACTIVITIES-DEFINITIONS.xlsx&action=default&mobileredirect=true) |
| How-To-Guides | Alchemy Tooling | Folder | How-to guide folder for Alchemy tooling. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/Alchemy%20Tooling/How-To-Guides) |
| Tool Release Notes | Alchemy Tooling | Folder | Alchemy tooling release notes. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/Alchemy%20Tooling/Tool%20Release%20Notes) |
| Training Assets | Alchemy Tooling | Folder | Training assets for Alchemy tooling. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/Alchemy%20Tooling/Training%20Assets) |
| Why OCI Deck + Walkthrough | 2 - Develop | Folder | Previous-version Why OCI deck and walkthrough assets. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/2%20-%20Develop/Previous%20Versions/Why%20OCI%20Deck%20+%20Walkthrough) |
| DTCC - Strategic Approach.docx | 3 - Discover | DOCX | Strategic approach example for Discover. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BBBD19955-5025-44A4-B081-91893CB6EAEC%7D&file=DTCC%20-%20Strategic%20Approach.docx&action=default&mobileredirect=true) |
| DTCC - Strategic Approach.pdf | 3 - Discover | PDF | Strategic approach example for Discover. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/3%20-%20Discover/Technical%20Strategic%20Approach%20-%20Examples%20-%20Internal%20Only/DTCC%20-%20Strategic%20Approach.pdf) |
| Retrospective Examples - Internal Only | 6 - Win | Folder | Internal retrospective examples in the Win archives. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework/6%20-%20Win/Win%20Archives/Retrospective%20Examples%20-%20Internal%20Only) |
| Alchemy Time Tracking | Alchemy Tooling | Folder | How-to guide folder for Alchemy time tracking. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/Alchemy%20Tooling/How-To-Guides/Alchemy%20Time%20Tracking) |
| Retrospectives | Alchemy Tooling | Folder | How-to guide folder for retrospectives. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/Alchemy%20Tooling/How-To-Guides/Retrospectives) |
| 2025August-Alchemy-Release-Notes.docx | Alchemy Tooling | DOCX | August 2025 Alchemy release notes. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B3EB53656-D97E-44AD-B089-A2D9C7E4D6AD%7D&file=2025August-Alchemy-Release-Notes.docx&action=default&mobileredirect=true) |
| Alchemy-Release1.26.6-ALCMY_AI.docx | Alchemy Tooling | DOCX | Alchemy release notes for release 1.26.6. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BDDFD8208-EA4A-4B19-82F0-4C3934B31CF6%7D&file=Alchemy-Release1.26.6-ALCMY_AI.docx&action=default&mobileredirect=true) |
| Alchemy-Release-Note-Template.docx | Alchemy Tooling | DOCX | Template for Alchemy release notes. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7BDDD80AB1-E838-42DF-B3FF-BA22295C125E%7D&file=Alchemy-Release-Note-Template.docx&action=default&mobileredirect=true) |
| C3E-Enablement.mp4 | Alchemy Tooling | MP4 | Training video asset for C3E enablement. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/Alchemy%20Tooling/Training%20Assets/C3E-Enablement.mp4) |
| Proposal Plug + Play Template - Redacted Version.pptx | Miscellaneous Templates | PPTX | Redacted proposal plug-and-play template. | [Open asset](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/_layouts/15/Doc.aspx?sourcedoc=%7B22CEA5A2-A2AC-42F2-BA3F-CAB2E96C8B5D%7D&file=Proposal%20Plug%20%2B%20Play%20Template%20-%20Redacted%20Version.pptx&action=edit&mobileredirect=true) |
| Retrospective Analysis | Retrospectives | Folder | Retrospective analysis folder. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/Retrospectives/Retrospective%20Analysis) |
| Retrospective Review - FY27 | Retrospectives | Folder | FY27 retrospective review folder. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/Retrospectives/Retrospective%20Review%20-%20FY27) |
| FY26 | Sizzle Meeting Minutes | Folder | FY26 Sizzle meeting minutes. | [Open folder](https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/Sizzle%20Meeting%20Minutes/FY26) |

## Phase Notes

### 0 - Enablement

The enablement material frames C3E as an account-to-roadmap operating model:

- Improve technical outcomes for customers and growth outcomes for Oracle.
- Make customer engagement more predictable and repeatable.
- Use experienced cloud engineering talent to expand team capability.
- Treat SPA as the collaborative platform for pursuits and actions.
- Use templates and written artifacts to support critical thinking.

The FAQ clarifies that C3E is specific to the infrastructure engineering role, meant to be used in partnership with sales rather than as a sales-only process. It also clarifies that pursuits map to opportunities, actions map to C3E phase activities, and updates should be tracked through SPA.

### 1 - Qualify

Primary artifact: Technical Account Plan.

The Technical Account Plan captures the technical view of the account. It should focus on the customer's technical landscape, not just repeat the commercial account plan.

Key areas:

- Oracle and customer team ownership.
- Current engagement status.
- Customer background and account details.
- Industry trends and challenges.
- Business objectives and compelling events.
- Technology, architecture, and cloud footprint.
- Engagement progress and key milestones.
- Technical strategy.
- Org chart, influence map, champion, and key stakeholders.

### 2 - Develop

Primary artifacts: POV / Mock Press Release, Why OCI.

The POV asks: what is the art of the possible with this customer? The PR/FAQ pattern is used to define a future success story in the customer's language.

Key sections:

- Vision / summary.
- Problem.
- Solution.
- Oracle quote.
- Customer quote.
- External customer questions.
- Internal Oracle questions.
- Why Oracle and why now.
- Decision-maker access and customer ability to act.

The guide explicitly treats generative AI as a starting-point helper, not a replacement for customer-specific thinking.

### 3 - Discover

Primary artifacts: Current State Analysis, Strategic Technical Approach, Engagement Risk Assessment, Workload Evaluation.

Current State Analysis evaluates:

- Compelling event and why the customer is talking now.
- Past journey and experience with Oracle, other clouds, vendors, co-location, and on-premises.
- Relationship analysis and affinity for Oracle, OCI, or competitors.
- Architecture, inventory, and cost.
- Technology analysis and migration tolerance.
- Available resources: team, capacity, timeline, budget.
- Technical and non-technical gaps.

Strategic Technical Approach turns discovery into an engagement strategy:

- Executive summary.
- Current state evaluation.
- Technical risks.
- Influence map.
- Oracle strategic alignment.
- Opportunity scope.
- Workload evaluation.
- Transition approach, assumptions, risks, economic model, and roadmap.
- Next steps.

Engagement Risk Assessment is a pre-mortem. It asks the team to imagine the pursuit failed, identify why, prioritize risks, define mitigations, update the pursuit plan, act on mitigations, and compare against the eventual post-mortem.

Risk categories include:

- Competitor actions.
- Customer politics and decision makers.
- Oracle execution issues.
- Customer resource constraints.
- Perceptual issues.
- Unknowns.
- Adoption risks.

### 4 - Design

Primary artifacts: Future State Architecture and Technical Proposal.

The future-state architecture should use OCI standards and may include multiple views, such as logical architecture, identity, network, integration, compartment layout, data flow, and implementation-level detail. The architecture should align with the bill of materials and show best-practice services such as monitoring, logging, vault, landing zone patterns, and availability design.

The Technical Proposal translates current state into OCI future state and covers:

- Context and scope.
- Future-state overview.
- Architecture and design considerations.
- Economics, TCO, ramp, and cost-saving opportunities.
- Transition plan.
- Consumption planning.
- Onboarding and enablement.
- OCI support streams such as CES, CLS, CSS, go-live assurance, or partner support.
- Governance model.
- Workload deployment plan and timeline.
- Gaps, risks, and mitigation.
- 30/60/90 day plan.

### 5 - Prove

Primary artifacts: POC / Pilot-to-Production, Joint Execution Plan, Migration Risk Assessment.

The prove phase validates the solution and reduces migration risk before customer commitment. The migration risk guide organizes the work around:

- Scope.
- Stakeholders.
- Risk identification.
- Risk assessment.
- Migration service selection.
- Risk register.
- Workload assessment.
- Migration preparation.
- Migration execution.

Migration risk categories include data loss, architecture complexity, control and visibility concerns, data breach or compliance issues, regulatory risk, latency, long migration process, skills gap, application migration hurdles, insider threats, interference risk, and cloud platform maturity.

Relevant migration services listed include Database Migration, Oracle Cloud Migrations, Oracle Cloud VMware Solution with HCX, partner migration services, ZConverter ZDM, Database Migration Workbench, and Estate Explorer.

### 6 - Win

Primary artifacts: Final Consumption Ramp and Engagement Retrospective.

The retrospective template captures:

- Account engagement details.
- Opportunity status and amount.
- How the lead was sourced.
- Engagement outcomes and impact.
- Competitive landscape.
- Differentiators, gaps, and blockers.
- Highlights and lowlights.
- Strategic insights.
- Customer feedback.
- Whether a lost opportunity can be re-engaged later.

The framework explicitly expects wins and losses to generate lessons that feed future engagement patterns.

### 7 - Deploy

Primary artifact: Technical Roadmap.

After the win, the roadmap focuses on customer success and consumption. It captures:

- Current Oracle footprint.
- Customer north star.
- Major OCI projects.
- Project owners, milestones, targets, and status.
- Project breakdowns and next steps.
- Future Oracle/customer technical vision.
- Appendix links and supporting artifacts.

The roadmap is intended to evolve as the team executes and identifies future opportunities.

### 8+9 - Support & Grow

The Support & Grow stage turns a won deployment into a long-term technical relationship.

Activities include:

- Monitor consumption and forecast.
- Continued cadence and support.
- Review the customer's technical roadmap.
- Quarterly technical reviews.
- Training and enablement.
- Field CISO / MAP engagement.
- Optimization, health checks, FinOps, innovation sessions, and long-range architecture.

## Activity Inventory

The C3E activities spreadsheet identifies account and engagement activities by stage.

### Qualify

- Co-Develop Account Strategy: account and engagement activity.
- Identify Key Influencers + Build Influence Map: account and engagement activity.

### Develop

- Create POV: account and engagement activity.
- Deliver "Why OCI": engagement activity.

### Discover

- Engagement Risk Assessment.
- Opportunity Analysis.
- EBC.
- Strategic Technical Approach.

### Design

- Technical Proposal.
- Technical BOM Scoped.
- Matilda Service Comparison.
- RFP.

### Prove

- Shared Comms Channel Implemented: account activity.
- POC / Pilot to Production.
- Assess Migration Risk and Define Mitigation Plan.
- Financial and Migration Model Ramp.
- Finalize Technical Proposal.
- Custom Development & Automation.
- Technical Unblocking.

### Win

- Finalize Consumption Ramp.
- Retrospective Completed.

### Support & Grow

- Custom Development & Automation.
- Technical Unblocking.
- Execute Capacity Plan.
- SKU Lifecycle Management Plan.
- Document Critical Escalation Path.
- Conduct Healthchecks.
- Deliver OCI Roadmap.
- Best Practice: HA/DR implementation.
- Best Practice: Workload Optimization.
- Best Practice: Working Effectively with Support.
- Best Practice: FinOps.
- Develop Long-Range Future State Architecture.
- Deliver QBR.
- Create Consumption Forecasting Model.
- Delivery Innovation Sessions.
- Deliver Customized Training.
- Deliver Interactive Lab Environment.
- Develop Customer Talent Succession Plan.
- Develop Certification Achievement Plan.
- Customer Is A Reference.
- Publish Joint Content Assets.
- Secure Cloud World Speaker opportunity.

## Example Material Inventory

The crawl inventoried, but did not fully extract, many example artifacts. These appear useful for pattern matching and reuse.

### Office Hours

- C3EPresentation-techroadmap-doc.pptx.
- C3E-SPA Office Hours videos from 2024-10-30, 2024-11-06, 2024-11-13, and 2024-11-20.

### POV Examples

Examples include:

- AeroVironment - POV.
- Fidelity - POV - DRCC Proposal.
- SEI - POV.
- SentinelOne - POV.
- Sephora - POV.
- Shopify - POV.
- Skyhigh - POV.
- Softbank - POV.
- Synchrony - POV.

### Support & Grow Examples

Examples include:

- Claritev opportunity analysis and customer opportunity assessment.
- Data Science / MLFlow toolset for AI/ML workloads.
- FreeWheel enablement agenda.
- Incident Response / DCGM monitoring.
- McGraw Hill workload assessment.
- OCI scalable AI inference solution.
- Palo Alto opportunity analysis.
- ArgoCD automating ML pipelines.
- Redstone health check material.
- Thomson Reuters consumption overview.
- Uber FY26 opportunity analysis.

## Practical Use

Use this crawl as a compact navigation guide:

- For a new pursuit, start with the Technical Account Plan, then build the POV / PR FAQ.
- Once the customer is engaged, use Current State Analysis and the Engagement Risk Assessment to anchor discovery.
- Convert discovery into the Strategic Technical Approach.
- During design, build the future-state architecture and technical proposal together.
- During prove, make the migration risks, success criteria, and ramp explicit.
- After win, capture the retrospective and build a technical roadmap.
- During support and grow, use QBRs, health checks, FinOps, roadmap reviews, enablement, and innovation sessions to create the next cycle of opportunity.

## Crawl Limitations

- The SharePoint connector could fetch the start `.aspx` page file, but did not extract rendered page text because the item was exposed as `application/xml`.
- The connector listed one browseable site drive: `Documents`.
- Videos were inventoried but not transcribed.
- Large examples were inventoried by folder and filename; the core framework templates and guides were extracted and summarized.
- The report avoids copying full internal documents verbatim and instead summarizes the crawled material.

## Source Links

- Start page: https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/SitePages/C3E-Overview.aspx
- Site root: https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy
- Documents library: https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents
- C3E Framework folder: https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/C3E-Framework
- Alchemy Tooling folder: https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/Shared%20Documents/Alchemy%20Tooling
