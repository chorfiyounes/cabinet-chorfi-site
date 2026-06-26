# Graph Report - .  (2026-06-26)

## Corpus Check
- Large corpus: 114 files · ~551,325 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 42 nodes · 62 edges · 9 communities (6 shown, 3 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Page Accueil et Services|Page Accueil et Services]]
- [[_COMMUNITY_JavaScript Interactif|JavaScript Interactif]]
- [[_COMMUNITY_Contact et Projets Phares|Contact et Projets Phares]]
- [[_COMMUNITY_Identite Cabinet et Equipe|Identite Cabinet et Equipe]]
- [[_COMMUNITY_Prix et Distinctions|Prix et Distinctions]]
- [[_COMMUNITY_References par Secteur|References par Secteur]]
- [[_COMMUNITY_Sante et Cliniques|Sante et Cliniques]]
- [[_COMMUNITY_Immeubles Grande Hauteur|Immeubles Grande Hauteur]]
- [[_COMMUNITY_SEO et Verification Web|SEO et Verification Web]]

## God Nodes (most connected - your core abstractions)
1. `Accueil — Cabinet CHORFI (CA.E.M.C SARL)` - 14 edges
2. `Références — Cabinet CHORFI` - 9 edges
3. `Services — Cabinet CHORFI` - 8 edges
4. `Projets Phares — CA.E.M.C SARL` - 8 edges
5. `Prix & Médias — Cabinet CHORFI` - 7 edges
6. `À propos — Cabinet CHORFI` - 5 edges
7. `Contact — Cabinet CHORFI CAEMC` - 5 edges
8. `Cabinet d'Études et Métrés Chorfi — CA.E.M.C SARL` - 4 edges
9. `Saïd Chorfi — Gérant fondateur` - 3 edges
10. `Younes Chorfi — Co-gérant` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Projets Phares — CA.E.M.C SARL` --references--> `Clinique AKDITAL Anfa Prime Hospital — Casablanca 2024`  [EXTRACTED]
  projets-phares.html → projects.html
- `Projets Phares — CA.E.M.C SARL` --references--> `Tour Entente Abidjan — 22 Étages 2020`  [EXTRACTED]
  projets-phares.html → projects.html
- `Accueil — Cabinet CHORFI (CA.E.M.C SARL)` --references--> `À propos — Cabinet CHORFI`  [EXTRACTED]
  index.html → about.html
- `Accueil — Cabinet CHORFI (CA.E.M.C SARL)` --references--> `Global 100 Winner 2024 — EMG Publishing`  [EXTRACTED]
  index.html → awards.html
- `Accueil — Cabinet CHORFI (CA.E.M.C SARL)` --references--> `Prix & Médias — Cabinet CHORFI`  [EXTRACTED]
  index.html → awards.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **CA.E.M.C Core Identity — Firm, Founders, and Awards** — cabinet_chorfi_caemc, said_chorfi, younes_chorfi, award_global100_2024, award_african_excellence_2022 [INFERRED 0.85]
- **Full Construction Economics Service Suite** — service_bq, service_estimation, service_cctp, service_suivi, service_amo [EXTRACTED 1.00]
- **Flagship Projects Showcase — Luxury & International** — project_four_seasons, project_hyatt, project_tour_entente, project_palais_niger [EXTRACTED 0.95]

## Communities (9 total, 3 thin omitted)

### Community 0 - "Page Accueil et Services"
Cohesion: 0.39
Nodes (9): Accueil — Cabinet CHORFI (CA.E.M.C SARL), Logiciel ATTIC+ — Outil métrés CAEMC, robots.txt — CA.E.M.C Site, Assistance à la Maîtrise d'Ouvrage (AMO), Bordereaux de Prix & Métrés Quantitatifs, Descriptifs Techniques & CCTP, Estimations & Études de Faisabilité, Suivi Économique des Travaux (+1 more)

### Community 1 - "JavaScript Interactif"
Cohesion: 0.25
Nodes (6): burger, filterTabs, navbar, observer, observerOptions, sectorSections

### Community 2 - "Contact et Projets Phares"
Cohesion: 0.40
Nodes (6): Contact — Cabinet CHORFI CAEMC, Hôtel Four Seasons Ksar Al Bahr — Rabat 2019, Hôtel HYATT PARK Al Maâden — Marrakech 2019, Palais Présidentiel — République du Niger 2015, Projets Phares — CA.E.M.C SARL, Secteur Hôtellerie — Références CAEMC

### Community 3 - "Identite Cabinet et Equipe"
Cohesion: 0.70
Nodes (5): À propos — Cabinet CHORFI, Cabinet d'Études et Métrés Chorfi — CA.E.M.C SARL, Certification Arbitrage Commercial International — CORECMAR 2023, Saïd Chorfi — Gérant fondateur, Younes Chorfi — Co-gérant

### Community 4 - "Prix et Distinctions"
Cohesion: 0.50
Nodes (5): African Excellence Awards 2022 — Best QS Morocco, Aigle de Platine 2011 — Prestige & Qualité Europe, Global 100 Winner 2024 — EMG Publishing, Golden Eagle Award 2010 — Prestige & Qualité Europe, Prix & Médias — Cabinet CHORFI

### Community 5 - "References par Secteur"
Cohesion: 0.50
Nodes (4): Références — Cabinet CHORFI, Secteur Banques & Institutions — Références CAEMC, Secteur Éducation — Références CAEMC, Secteur Industrie — Références CAEMC

## Knowledge Gaps
- **15 isolated node(s):** `navbar`, `burger`, `filterTabs`, `sectorSections`, `observerOptions` (+10 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Accueil — Cabinet CHORFI (CA.E.M.C SARL)` connect `Page Accueil et Services` to `Contact et Projets Phares`, `Identite Cabinet et Equipe`, `Prix et Distinctions`, `References par Secteur`?**
  _High betweenness centrality (0.361) - this node is a cross-community bridge._
- **Why does `Références — Cabinet CHORFI` connect `References par Secteur` to `Page Accueil et Services`, `Contact et Projets Phares`, `Sante et Cliniques`, `Immeubles Grande Hauteur`?**
  _High betweenness centrality (0.196) - this node is a cross-community bridge._
- **Why does `Projets Phares — CA.E.M.C SARL` connect `Contact et Projets Phares` to `Page Accueil et Services`, `References par Secteur`, `Sante et Cliniques`, `Immeubles Grande Hauteur`?**
  _High betweenness centrality (0.159) - this node is a cross-community bridge._
- **What connects `navbar`, `burger`, `filterTabs` to the rest of the system?**
  _15 weakly-connected nodes found - possible documentation gaps or missing edges._