# Ainoa Coiffure — Site Vitrine

Site officiel du salon **Ainoa Coiffure**, Saint-Cyr-sur-Loire.  
Conçu et développé par **[DESCODES.com](https://descodes.com)**.

---

## Stack technique

| Outil | Version | Rôle |
|---|---|---|
| Next.js | 15.3.1 | Framework, App Router, SSG |
| React | 19.0.0 | UI |
| TypeScript | 5 | Typage |
| Tailwind CSS | 3.4.17 | Styles |
| Vercel | — | Hébergement + déploiement continu |

---

## Architecture

### Pages

| Route | Fichier | Type | Description |
|---|---|---|---|
| `/` | `app/page.tsx` | Server Component | Page d'accueil — assemblage des sections |
| `/head-spa` | `app/head-spa/page.tsx` | Server Component | Page dédiée aux formules Head Spa |

### Composants

```
components/
├── Header.tsx              Navigation fixe (Client Component)
│                           → 2 lignes sur mobile/tablette
│                           → Détection de section active via IntersectionObserver
│                           → Menu hamburger sous 1024px
│
├── Footer.tsx              Pied de page
├── LocalBusinessSchema.tsx JSON-LD HairSalon (Schema.org) — injecté dans layout
├── BreadcrumbSchema.tsx    JSON-LD BreadcrumbList — injecté dans chaque page
│
└── sections/
    ├── HeroSection.tsx       Carousel automatique (6 images, 5s)
    ├── ConceptSection.tsx    Présentation du métier / savoir-faire
    ├── HairSpaSection.tsx    Teaser service Head Spa (carousel 2 images, 4s)
    ├── PortfolioSection.tsx  Galerie bento grid (4 photos, grille 4 colonnes)
    ├── ContactSection.tsx    Réseaux sociaux, adresse, téléphone, horaires
    └── LocationSection.tsx   Carte Google Maps intégrée (iframe couleur)
```

### SEO & données métier

```
lib/
└── business.ts   Source de vérité unique — nom, adresse, téléphone,
                  horaires, réseaux sociaux, coordonnées GPS, zone de chalandise
```

Modifier `lib/business.ts` pour mettre à jour n'importe quelle info de l'entreprise :  
les metadata, le JSON-LD et le sitemap se mettent à jour automatiquement.

### Ordre des sections (page d'accueil)

```
Header (fixe)
└── HeroSection        #accueil
└── ConceptSection     #concept
└── HairSpaSection     #spa       → lien vers /head-spa
└── PortfolioSection   #creations
└── ContactSection     #contact
└── LocationSection
Footer
```

### Structure page /head-spa

```
Header (fixe)
└── Hero image plein écran
└── Introduction texte
└── 3 cartes de formules tarifaires
      Essentiel  / Profond  / Signature (premium)
      chacune : tag · titre · description · 2 options de prix cliquables
└── Section CTA réservation
Footer
```

---

## Fichiers de configuration

| Fichier | Contenu |
|---|---|
| `next.config.ts` | Headers de sécurité HTTP (CSP, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy) + images distantes autorisées |
| `tailwind.config.ts` | Design system : palette de couleurs, typographie, border-radius, espacements |
| `app/globals.css` | Directives Tailwind + animations CSS personnalisées (effets de lueur respirants sur les cartes) |
| `app/layout.tsx` | Racine HTML : chargement des polices, balises meta SEO, langue, LocalBusinessSchema |
| `app/sitemap.ts` | Génère `/sitemap.xml` dynamiquement |
| `app/robots.ts` | Génère `/robots.txt` dynamiquement |
| `lib/business.ts` | Data layer SEO — source de vérité unique de l'entreprise |

---

## Intégrations externes

| Service | Usage |
|---|---|
| Google Fonts | Polices du site (chargées via `next/font/google`) |
| Material Symbols | Icônes (menu, chevrons, navigation) |
| FontAwesome | Icônes réseaux sociaux |
| Google Maps | Carte de localisation intégrée (iframe) |
| Planity | Plateforme de réservation — lien depuis le bouton RDV et les tarifs |

---

## Sécurité

5 headers HTTP configurés dans `next.config.ts`, appliqués sur toutes les routes :

- `Content-Security-Policy` — whitelist des ressources autorisées
- `X-Frame-Options: SAMEORIGIN` — protection clickjacking
- `X-Content-Type-Options: nosniff` — protection MIME-sniffing
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — désactivation des APIs navigateur non utilisées

Score cible : **A / A+** sur securityheaders.com.

---

## SEO local

Système complet de référencement local, sans impact visuel.

| Élément | Fichier | Description |
|---|---|---|
| Data layer | `lib/business.ts` | Source de vérité unique de l'entreprise |
| Schema.org | `components/LocalBusinessSchema.tsx` | JSON-LD HairSalon injecté sur toutes les pages |
| Breadcrumb | `components/BreadcrumbSchema.tsx` | JSON-LD fil d'Ariane par page |
| Metadata | `app/layout.tsx`, `app/page.tsx`, `app/head-spa/page.tsx` | Titres, descriptions, canonical, OpenGraph |
| Sitemap | `app/sitemap.ts` | `/sitemap.xml` dynamique |
| Robots | `app/robots.ts` | `/robots.txt` |
| OG Image | `app/opengraph-image.tsx` + `app/head-spa/opengraph-image.tsx` | Visuels réseaux sociaux 1200×630 |

> Voir `.doc/seo.md` pour le détail complet.

---

## Déploiement

Le projet est connecté à Vercel via GitHub.  
Chaque push sur `main` déclenche un redéploiement automatique.

```bash
npm run dev      # Développement local — localhost:3000
npm run build    # Vérification build production
```

---

## Images

```
public/images/
├── logo-ainoa.png
├── hero/        → 6 photos pour le carousel d'accueil
├── spa/         → 2 photos pour le teaser Head Spa + hero /head-spa
└── portfolio/   → 4 photos pour la galerie bento grid
```

Toutes les images sont optimisées via `next/image` (compression, lazy loading, formats modernes).

---

## Documentation interne

Voir le dossier `.doc/` :

- `architecture.md` — vue d'ensemble technique
- `design-system.md` — couleurs, typographie, espacements
- `sections.md` — description de chaque composant et comment le modifier
- `images.md` — gestion et remplacement des photos
- `deployment.md` — workflow de déploiement et checklist
- `security.md` — détail des headers de sécurité
- `seo.md` — système SEO local : data layer, JSON-LD, metadata, sitemap

---

*© Ainoa Coiffure — Tous droits réservés.*  
*Site réalisé par [DESCODES.com](https://descodes.com)*
