# C3E SharePoint Spider Report

Generated: 2026-05-22  
Start URL: https://oracle.sharepoint.com/teams/NACIOCIProjectAlchemy/SitePages/C3E-Overview.aspx  
Site: Alchemy (`/teams/NACIOCIProjectAlchemy`)  
Connector used: Microsoft SharePoint plugin

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

| Artifact | Phase | Type | Purpose |
|---|---|---|---|
| C3E-SPA-Enablement.pdf | 0 - Enablement | PDF | Framework overview, phase model, SPA mapping, key activities, required outputs. |
| C3E Framework-FAQ.docx | 0 - Enablement | DOCX | FAQ for SPA, pursuits, sales alignment, PR/FAQ, proposals, retrospectives. |
| Technical Account Plan - Template.docx | 1 - Qualify | DOCX | Technical viewpoint of the account; complements the commercial account plan. |
| POV_PR_FAQ Template.docx | 2 - Develop | DOCX | Guides a visionary point of view and mock press release. |
| Current State Analysis-Guide.docx | 3 - Discover | DOCX | Guides customer current-state discovery across context, architecture, inventory, cost, gaps, and resources. |
| Engagement Risk Assessment Guide.docx | 3 - Discover | DOCX | Pre-mortem process for pursuit risks and mitigation actions. |
| Strategic Technical Approach - Template.docx | 3 - Discover | DOCX | Executive summary, current state, risks, influence map, workload evaluation, roadmap, next steps. |
| Workload Evaluation Approach - Guide.docx | 3 - Discover | DOCX | Transition approach, assumptions, risks, economic model, and transition roadmap. |
| Future State Architecture - Guide.docx | 4 - Design | DOCX | How to create OCI future-state architecture diagrams and views. |
| Technical Proposal - Template.docx | 4 - Design | DOCX | Customer-facing future-state proposal, economics, transition plan, governance, risk mitigation. |
| Migration Risk Assessment - Structure + Appendix.docx | 5 - Prove | DOCX | Migration risk identification, risk register, stakeholder, service, and workload checklist. |
| Engagement Retrospective - Template.docx | 6 - Win | DOCX | Captures outcome, competitive landscape, highlights, lowlights, lessons, and re-engagement signals. |
| Technical Roadmap Template.docx | 7 - Deploy | DOCX | Post-win roadmap for Oracle footprint, projects, future vision, and next steps. |
| C3E_ACTIVITIES-DEFINITIONS.xlsx | Alchemy Tooling | XLSX | Activity definitions by phase and account/engagement applicability. |

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
