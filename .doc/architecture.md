# Architecture du projet

## Vue d'ensemble

Le site est une **single-page application** (SPA) en Next.js 15 App Router.  
Toute la page est rendue statiquement (SSG) — aucun appel serveur à l'exécution.

## Arborescence complète

```
ainoa-coiffure/
│
├── app/                          # App Router Next.js
│   ├── layout.tsx                # Racine HTML : fonts, metadata, globals.css
│   ├── page.tsx                  # Assemblage des sections dans l'ordre
│   └── globals.css               # Tailwind directives + styles globaux
│
├── components/
│   ├── Header.tsx                # Navigation fixe en haut (client component)
│   ├── Footer.tsx                # Pied de page
│   └── sections/                 # Chaque section de la page
│       ├── HeroSection.tsx       # Bandeau principal (#accueil)
│       ├── ConceptSection.tsx    # Notre savoir-faire (#concept)
│       ├── HairSpaSection.tsx    # Head Spa (#spa)
│       ├── PortfolioSection.tsx  # Bento grid créations (#creations)
│       ├── ContactSection.tsx    # Adresse, tél, horaires (#contact)
│       └── LocationSection.tsx   # Google Maps intégré
│
├── public/
│   └── images/
│       ├── hero/                 # Photo bandeau principal
│       ├── spa/                  # Photo section Head Spa
│       └── portfolio/            # Photos des créations (3 slots)
│
├── .doc/                         # Documentation (ce dossier)
├── tailwind.config.ts            # Design system : couleurs, fonts, radius
├── next.config.ts                # Remote images autorisées
├── postcss.config.mjs            # PostCSS pour Tailwind
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dépendances
```

## Flux de la page

```
app/layout.tsx
  └── app/page.tsx
        ├── <Header />            ancres : #accueil #concept #spa #creations #contact
        ├── <HeroSection />       id="accueil"
        ├── <ConceptSection />    id="concept"
        ├── <HairSpaSection />    id="spa"
        ├── <PortfolioSection />  id="creations"
        ├── <ContactSection />    id="contact"
        ├── <LocationSection />   (pas d'ancre)
        └── <Footer />
```

## Règles d'architecture

- **Un composant = une section** : chaque section est isolée dans son fichier.
- **Server Components par défaut** : seul `Header.tsx` est `"use client"` (menu mobile).
- **Pas de state global** : le site est purement statique.
- **Images** : `next/image` avec `fill` + `object-cover`. Les images locales vont dans `public/images/`.
