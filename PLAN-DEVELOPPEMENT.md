# Plan de développement — Site web institutionnel de l'agence digitale

**Basé sur :** Cahier des charges v1.0 (11 août 2026)
**Approche :** développement itératif, MVP d'abord, orienté conversion
**Stack retenue :** Next.js 14+ (App Router) · TypeScript · Tailwind CSS · Framer Motion · MySQL · Resend · Hostinger

---

## 1. Principes directeurs

- **MVP en premier** : on livre un site complet mais volontairement resserré (§49 du cahier des charges), puis on itère.
- **Un seul repo Next.js**, contenu géré en dur (fichiers TS/JSON typés) pour le MVP — pas de CMS tant que le volume de contenu ne le justifie pas (§38-39).
- **Design system avant les pages** : composants réutilisables construits une fois, consommés partout.
- **Rien n'est inventé** : pas de faux témoignages, pas de faux KPI (§13, §41) — les sections concernées restent vides ou masquées tant que les données réelles ne sont pas fournies.
- **Chaque phase se termine par une vérification** (build, Lighthouse, responsive, a11y) avant de passer à la suivante.

---

## 2. Stack technique définitive

| Couche | Choix | Justification |
|---|---|---|
| Framework | Next.js 14+ (App Router, RSC) | SEO natif, SSG/ISR, image optimization |
| Langage | TypeScript strict | sécurité de typage sur contenu + formulaire |
| Style | Tailwind CSS + design tokens custom | rapidité, cohérence avec la palette §5 |
| Animations | Framer Motion (+ `prefers-reduced-motion`) | §27 |
| Formulaires | React Hook Form + Zod | validation client + serveur avec le même schéma |
| Backend léger | Next.js Route Handlers (API interne) | pas besoin d'un backend séparé pour le MVP |
| Base de données | MySQL (Hostinger) | stockage des leads via `mysql2` |
| Email transactionnel | Resend | confirmation prospect + notification agence (§21) |
| Anti-spam | hCaptcha ou Cloudflare Turnstile + honeypot + rate limiting | §32 |
| Analytics | GA4 + Google Search Console | §33 |
| Hébergement | Hostinger | build webpack (voir contraintes ci-dessous) |
| Tests | Playwright (E2E) + Vitest (unitaire) | formulaires, navigation, composants critiques |

---

## 3. Architecture du projet

```text
zahdigit-site/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                     # Accueil
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── sites-web/page.tsx
│   │   │   ├── applications-web/page.tsx
│   │   │   ├── applications-mobiles/page.tsx
│   │   │   ├── ui-ux-design/page.tsx
│   │   │   └── solutions-sur-mesure/page.tsx
│   │   ├── realisations/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── methode/page.tsx
│   │   ├── a-propos/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── mentions-legales/page.tsx
│   │   └── politique-confidentialite/page.tsx
│   ├── api/
│   │   ├── contact/route.ts             # réception + validation + anti-spam + email
│   │   └── revalidate/route.ts          # (Phase 2, si CMS)
│   ├── sitemap.ts
│   ├── robots.ts
│   └── layout.tsx
├── components/
│   ├── ui/                              # Button, Input, Select, Textarea, Modal, Badge, Accordion...
│   ├── layout/                          # Header, Footer, Container, Section
│   ├── sections/                        # Hero, ServicesGrid, WhyUs, ProjectsGrid, MethodSteps, CTA
│   └── cards/                           # ServiceCard, ProjectCard, TestimonialCard
├── content/
│   ├── services.ts
│   ├── realisations.ts
│   ├── methode.ts
│   ├── faq.ts
│   └── seo.ts                           # metadata par page
├── lib/
│   ├── validations/contact.schema.ts    # Zod, partagé client/serveur
│   ├── email/                           # templates Resend
│   ├── analytics/                       # helpers d'événements GA4
│   └── utils.ts
├── styles/
│   └── globals.css                      # tokens Tailwind (couleurs §5, typo §29)
├── public/
│   ├── images/
│   └── favicon...
├── tests/
│   ├── e2e/
│   └── unit/
└── tailwind.config.ts
```

---

## 4. Design system (Sprint 0)

À construire **avant** les pages, pour éviter les incohérences.

1. **Tokens Tailwind** : couleurs (`#1f2e42`, `#e67334`, `#e8e8e8`, `#91969c`, `#ffffff`), typographie (Inter/Manrope/Plus Jakarta Sans/Geist — à trancher avec le client), échelle d'espacement, breakpoints.
2. **Composants de base** : Button (primary/secondary selon §28), Input, Select, Textarea, Badge, Modal, Accordion, Container, Section, Breadcrumb.
3. **Composants métier** : ServiceCard, ProjectCard, TestimonialCard.
4. **Règles d'animation** : durée 300-500 ms, variants Framer Motion réutilisables (fade-in, fade-up, scale léger), respect de `prefers-reduced-motion`.
5. **Livrable** : une page `/design-system` (interne, non indexée) qui affiche tous les composants — sert de référence visuelle et de test de non-régression.

---

## 5. Phasage détaillé

### Sprint 0 — Setup & fondations (2-3 jours)
- Init Next.js + TypeScript + Tailwind + ESLint/Prettier + Husky (pre-commit lint).
- Configuration Hostinger (build, variables d'environnement).
- Design tokens + composants UI de base (§4 ci-dessus).
- Layout global : Header sticky avec `backdrop-blur` (§7.2), Footer, structure mobile drawer (§7.3).
- Mise en place SEO technique de base : `sitemap.ts`, `robots.ts`, layout metadata, Schema.org Organization.

### Sprint 1 — Page d'accueil (4-5 jours)
Ordre de construction = ordre de priorité business :
1. Hero (headline, sous-titre, double CTA, mockup desktop+mobile) — §9
2. Section Services (4 cartes) — §10
3. Section Pourquoi nous choisir (4 avantages) — §11
4. Section Réalisations (grille, données statiques au départ) — §12
5. Section Méthode (6 étapes) — §14
6. Section Différenciation (fond `#1f2e42`, 3 piliers) — §15
7. CTA finale (fond `#e67334`) — §16
8. Footer complet (liens, mentions légales, réseaux)

### Sprint 2 — Pages Services + Réalisations (4-5 jours)
- Page listing Services (§17) : Hero → Présentation → Services → Approche → Technologies → Réalisations associées → FAQ → CTA.
- 5 pages détail service (structure commune, contenu spécifique par service).
- Page listing Réalisations (grille filtrable par catégorie).
- Template page détail projet (§13) : Hero projet → Présentation → Problématique → Objectifs → Solution → Fonctionnalités → UX/UI → Technologies → Résultats (KPI réels uniquement) → Galerie → CTA.
- Contenu réel à collecter auprès du client (projets, captures, technologies) — **point de blocage potentiel à lever tôt**.

### Sprint 3 — Méthode, À propos, pages légales (2-3 jours)
- Page Méthode (déclinaison enrichie de la section accueil).
- Page À propos (§18) : mission, vision, valeurs, équipe — positionnement "partenaire technologique".
- Mentions légales + Politique de confidentialité (§37) — contenu juridique à faire valider par le client/un juriste.

### Sprint 4 — Contact & formulaire (3-4 jours)
- Formulaire complet (§19) avec React Hook Form + Zod : nom, entreprise, email pro, téléphone, type de projet, budget, délai, description, consentement RGPD.
- Route API `app/api/contact/route.ts` :
  - validation serveur (même schéma Zod que le client),
  - anti-spam (honeypot + Turnstile/hCaptcha + rate limiting par IP),
  - écriture en base (MySQL),
  - email de confirmation au prospect (Resend),
  - notification interne à l'agence (Resend).
- Qualification des leads (§20) : champs structurés en base pour permettre un scoring futur (type de projet, budget, urgence).
- Gestion des paramètres UTM à la soumission (§36) : capture `utm_source/medium/campaign/content/term` depuis l'URL et transmission avec le lead.

### Sprint 5 — SEO, Analytics, Performance (3-4 jours)
- Metadata par page (Title/Description uniques), Open Graph, canonical.
- Données structurées Schema.org (Organization, BreadcrumbList, éventuellement Service/CreativeWork sur les pages projets).
- GA4 + Search Console + configuration des événements (§33) : `page_view`, `cta_click`, `service_view`, `project_view`, `contact_form_start`, `contact_form_submit`, `phone_click`, `email_click`, `whatsapp_click`.
- Passe de performance : `next/image` partout, lazy loading, code splitting natif App Router, audit bundle.
- SEO local (§23) si confirmé par le client : ciblage "agence digitale Abidjan" etc. dans les metadata et le contenu.

### Sprint 6 — Accessibilité, responsive, QA (3-4 jours)
- Audit WCAG : contraste, navigation clavier, focus visible, labels de formulaire, alt texts.
- Tests responsive sur les breakpoints définis (mobile/tablette/laptop/desktop/grand écran).
- Suite Playwright : parcours critiques (navigation, soumission formulaire, CTA, liens de page projet).
- Checklist §46-47 passée intégralement (fonctionnel, technique, SEO, performance, analytics).

### Sprint 7 — Déploiement (1-2 jours)
- Domaine + DNS + SSL.
- Déploiement production Hostinger, variables d'environnement de prod.
- Vérification post-déploiement : Core Web Vitals réels (LCP < 2,5s, INP < 200ms, CLS < 0,1), sitemap soumis à Search Console, monitoring d'erreurs basique.

**Durée totale MVP estimée : ~5 à 6 semaines** (cohérent avec les fourchettes indicatives du §48, en séquentiel avec une seule équipe front).

---

## 6. Modèle de données (MySQL — Hostinger)

Schéma exécuté tel quel dans [sql/schema.sql](sql/schema.sql) sur la base `u523667971_zahdigit_db`.

```sql
-- Leads issus du formulaire de contact
CREATE TABLE leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  full_name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  project_type VARCHAR(100) NOT NULL,   -- site web / app web / app mobile / saas / refonte / ui-ux / sur-mesure / autre
  budget_range VARCHAR(100) NOT NULL,
  timeline VARCHAR(100),
  description TEXT NOT NULL,
  consent_rgpd BOOLEAN NOT NULL,
  utm_source VARCHAR(255),
  utm_medium VARCHAR(255),
  utm_campaign VARCHAR(255),
  utm_content VARCHAR(255),
  utm_term VARCHAR(255),
  status VARCHAR(50) NOT NULL DEFAULT 'new'  -- new / contacted / qualified / quoted / won / lost
);
```

Réalisations : gérées en dur dans `content/realisations.ts` pour le MVP (pas de table dédiée). Une bascule vers une table `projects` en base pourra être envisagée en Phase 2 si un back-office est ajouté.

---

## 7. MVP vs Phase 2 (rappel opérationnel)

**Dans le MVP (Sprints 0-7 ci-dessus) :**
Accueil, Services (+5 sous-pages), Réalisations (+détail), Méthode, À propos, Contact, Mentions légales, Politique de confidentialité, formulaire fonctionnel, SEO technique, GA4, animations, responsive, performance.

**Hors MVP — backlog Phase 2 (§49, §52) :**
- Blog + CMS headless (Sanity recommandé si autonomie éditoriale souhaitée).
- FAQ commerciale dédiée (peut être avancée au MVP si le contenu est prêt — faible effort).
- Témoignages clients (dès que des retours authentiques existent).
- Intégration CRM (statuts de lead, pipeline commercial).
- Espace client, suivi de projet, devis en ligne, chatbot, prise de RDV, automatisation WhatsApp.
- Tests A/B sur les CTA (§51), pilotés par données réelles une fois le trafic suffisant.

---

## 8. Risques et points de blocage à lever tôt

1. **Contenu réel manquant** : textes définitifs, cas clients avec KPI vérifiés, photos d'équipe, logo/charte finalisée. À collecter dès le Sprint 0-1 pour ne pas bloquer les Sprints 2-3.
2. **Choix de la police** (§29) et validation finale de la palette avec le client avant de figer les tokens Tailwind.
3. **Décision anti-spam** (Turnstile vs hCaptcha) et **fournisseur email** (clé Resend) à obtenir avant le Sprint 4.
4. **Textes juridiques** (mentions légales, confidentialité) à faire rédiger/valider par le client, pas par l'agence elle-même.
5. **Confirmation du ciblage géographique** (Abidjan/CI vs international) avant d'écrire la stratégie SEO locale du §23.

---

## 9. Prochaine étape immédiate

1. Valider ce plan et la stack avec le client (ou en interne si l'agence est le client final).
2. Lancer le Sprint 0 : `npx create-next-app` + configuration du design system.
3. Ouvrir une liste de contenu à fournir (textes, visuels, projets réels) en parallèle du développement, pour ne pas bloquer les sprints suivants.
