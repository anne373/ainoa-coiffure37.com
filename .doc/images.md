# Gestion des images

---

## Dossiers

```
public/
└── images/
    ├── hero/
    │   └── main.jpg          ← Photo bandeau principal
    ├── spa/
    │   └── main.jpg          ← Photo section Head Spa
    └── portfolio/
        ├── 1.jpg             ← Grande photo gauche (coupe)
        ├── 2.jpg             ← Photo haut droite (coloration)
        └── 3.jpg             ← Photo bas droite large (outils/autre)
```

---

## Comment remplacer une image

1. Déposer votre photo dans le bon dossier `public/images/...`
2. Nommer le fichier exactement comme indiqué (`main.jpg`, `1.jpg`, etc.)
3. Dans le composant correspondant, remplacer la constante :

```tsx
// AVANT (image temporaire Google)
const HERO_IMAGE = 'https://lh3.googleusercontent.com/...'

// APRÈS (votre photo locale)
const HERO_IMAGE = '/images/hero/main.jpg'
```

### Fichiers à modifier par section

| Section | Constante | Fichier composant |
|---|---|---|
| Hero | `HERO_IMAGE` | `components/sections/HeroSection.tsx` |
| Head Spa | `SPA_IMAGE` | `components/sections/HairSpaSection.tsx` |
| Portfolio 1 | `IMG_BOB` | `components/sections/PortfolioSection.tsx` |
| Portfolio 2 | `IMG_COLORING` | `components/sections/PortfolioSection.tsx` |
| Portfolio 3 | `IMG_TOOLS` | `components/sections/PortfolioSection.tsx` |

---

## Recommandations techniques

| Paramètre | Recommandation |
|---|---|
| Format | `.jpg` ou `.webp` (meilleure compression) |
| Largeur | Minimum 1400px pour les images plein écran |
| Poids | < 500 Ko après compression |
| Ratio hero | Paysage (16:9 ou 3:2) |
| Ratio spa | Portrait ou carré (1:1 ou 2:3) |
| Ratio portfolio 1 | Portrait (2:3) — grande case |
| Ratio portfolio 2 | Carré (1:1) |
| Ratio portfolio 3 | Paysage (2:1) — case large |

### Outil de compression recommandé
[squoosh.app](https://squoosh.app) — gratuit, en ligne, sans installation.

---

## Images temporaires

Tant que vous n'avez pas vos photos, le site utilise des images hébergées sur Google (`lh3.googleusercontent.com`).  
Ces URLs sont autorisées dans `next.config.ts` :

```ts
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '/aida-public/**' }
  ]
}
```

Une fois vos photos locales en place, vous pouvez supprimer ce bloc `remotePatterns`.
