# Architecture du projet — Ainoa Coiffure

## Vue d'ensemble

Site vitrine **Next.js 15 App Router**, rendu statique (SSG).  
Deux pages : accueil SPA (`/`) + page dédiée Head Spa (`/head-spa`).  
Zéro dépendance UI externe — Tailwind CSS seul pour les styles.

---

## Stack technique

| Outil | Version | Rôle |
|---|---|---|
| Next.js | 15.3.1 | Framework React, App Router, SSG |
| React | 19.0.0 | UI |
| TypeScript | 5 | Typage |
| Tailwind CSS | 3.4.17 | Styles utilitaires |
| PostCSS + Autoprefixer | 8 / 10 | Traitement CSS |

---

## Arborescence complète

```
ainoa-coiffure/
│
├── app/
│   ├── layout.tsx              # Racine HTML : polices, metadata, globals.css
│   ├── page.tsx                # Accueil — assemblage des sections
│   ├── globals.css             # Tailwind + animations aura (card-aura-*)
│   └── head-spa/
│       └── page.tsx            # Page dédiée Head Spa + 3 formules tarifaires
│
├── components/
│   ├── Header.tsx              # Navigation fixe (Client Component)
│   ├── Footer.tsx              # Pied de page
│   └── sections/
│       ├── HeroSection.tsx     # Carousel 6 images + accroche (#accueil)
│       ├── ConceptSection.tsx  # Présentation salon (#concept)
│       ├── HairSpaSection.tsx  # Teaser Head Spa, lien /head-spa (#spa)
│       ├── PortfolioSection.tsx # Bento grid 4 photos (#creations)
│       ├── ContactSection.tsx  # Réseaux, adresse, horaires (#contact)
│       └── LocationSection.tsx # Google Maps iframe couleur
│
├── public/
│   └── images/
│       ├── logo-ainoa.png
│       ├── hero/               # hero-ainoa.png, image2.png … image7.png
│       ├── spa/                # image6.png, head spa.png
│       └── portfolio/          # coupe-1.jpg … coupe-4.jpg
│
├── .doc/                       # Documentation (ce dossier)
├── CLAUDE.md                   # Instructions pour Claude Code
├── next.config.ts              # Headers sécurité (CSP, etc.) + remote images
├── tailwind.config.ts          # Design system complet
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Flux de la page d'accueil

```
app/layout.tsx  (polices Space Grotesk + Inter + Material Symbols)
  └── app/page.tsx
        ├── <Header />            fixe z-50, 2 lignes sur mobile
        ├── <HeroSection />       id="accueil"  — carousel auto 5s, 6 images
        ├── <ConceptSection />    id="concept"
        ├── <HairSpaSection />    id="spa"      — carousel auto 4s, 2 images
        ├── <PortfolioSection />  id="creations" — bento grid 4 photos
        ├── <ContactSection />    id="contact"
        ├── <LocationSection />   Google Maps iframe (couleur)
        └── <Footer />
```

## Flux de la page /head-spa

```
app/layout.tsx
  └── app/head-spa/page.tsx   (Server Component)
        ├── <Header />
        ├── Hero plein écran (image6.png)
        ├── Section intro texte
        ├── 3 cartes de soins  ← Essentiel / Profond / Signature
        │     chacune avec : tag badge, titre, description, 2 prix cliquables Planity
        │     animation aura CSS : card-aura-soft / card-aura-mid / card-aura-strong
        ├── CTA réservation (fond zinc-900)
        └── <Footer />
```

---

## Règles d'architecture

- **Un composant = une section** — chaque section est isolée dans son fichier.
- **Server Components par défaut** — seul `Header.tsx` est `"use client"`.
- **Pas de state global** — site purement statique, aucun appel API à l'exécution.
- **Images** — `next/image` avec `fill` + `object-cover`. Position ajustée par image (`object-[center_X%]`) pour cadrer sur la coupe de cheveux.
- **Animations** — CSS pur dans `globals.css` (pas de Framer Motion ni GSAP).
- **Sécurité** — 5 headers HTTP configurés dans `next.config.ts` (voir `.doc/security.md`).
- **Responsive** — mobile-first, breakpoints Tailwind : `sm:640px md:768px lg:1024px`.
- **Menu hamburger** — affiché sous `lg` (1024px) pour éviter l'encombrement sur tablette.

---

## Dépôts GitHub

| Remote | URL | Usage |
|---|---|---|
| `origin` | github.com/batoucode/ainoaV2 | Dépôt de travail principal |
| `ainoa` | github.com/anne373/ainoa-coiffure37.com | Dépôt client — Vercel connecté ici |

Pousser systématiquement sur les deux :
```bash
git push origin main && git push ainoa main
```
