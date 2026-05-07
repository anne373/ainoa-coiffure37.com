# Gestion des images

---

## Fichiers actuels

```
public/images/
├── logo-ainoa.png              # Logo header + footer (mix-blend-multiply)
├── hero/
│   ├── hero-ainoa.png          # Slide 1 carousel accueil
│   ├── image2.png              # Slide 2
│   ├── image3.png              # Slide 3
│   ├── image4.png              # Slide 4
│   ├── image5.png              # Slide 5
│   └── image7.png              # Slide 6
├── spa/
│   ├── image6.png              # Slide 1 carousel Head Spa + hero page /head-spa
│   └── head spa.png            # Slide 2 carousel Head Spa
└── portfolio/
    ├── coupe-1.jpg             # Grande case gauche (balayage cheveux longs)
    ├── coupe-2.jpg             # Haut droite (bob bouclé)
    ├── coupe-3.jpg             # Centre droite (coupe courte blonde)
    └── coupe-4.jpg             # Bas large (dégradé homme)
```

---

## Comment remplacer une image

Déposer la nouvelle photo dans le bon dossier avec le **même nom de fichier** — le composant se met à jour automatiquement.

### Sections et leurs images

| Section | Fichier(s) | Composant |
|---|---|---|
| Hero carousel | `hero/hero-ainoa.png`, `image2–7.png` | `HeroSection.tsx` |
| Teaser spa (accueil) | `spa/image6.png`, `spa/head spa.png` | `HairSpaSection.tsx` |
| Hero page /head-spa | `spa/image6.png` | `app/head-spa/page.tsx` |
| Portfolio grande case | `portfolio/coupe-1.jpg` | `PortfolioSection.tsx` |
| Portfolio haut droite | `portfolio/coupe-2.jpg` | `PortfolioSection.tsx` |
| Portfolio centre droite | `portfolio/coupe-3.jpg` | `PortfolioSection.tsx` |
| Portfolio bas large | `portfolio/coupe-4.jpg` | `PortfolioSection.tsx` |

---

## Cadrage des photos portfolio

Chaque image portfolio a un `object-position` ajusté pour bien montrer la coupe :

| Image | Position | Raison |
|---|---|---|
| `coupe-1.jpg` | `object-[center_15%]` | Cheveux longs depuis le haut |
| `coupe-2.jpg` | `object-[center_20%]` | Tête en haut, corps en bas |
| `coupe-3.jpg` | `object-[center_15%]` | Cheveux très en haut de l'image |
| `coupe-4.jpg` | `object-[center_20%]` | Vue de dos, dégradé au milieu |

Si vous changez une photo, ajuster la valeur dans `PortfolioSection.tsx`.

---

## Recommandations techniques

| Paramètre | Recommandation |
|---|---|
| Format | `.jpg` ou `.webp` (meilleure compression) |
| Largeur | Minimum 1400px pour les images plein écran |
| Poids | < 500 Ko après compression |
| Ratio hero/spa | Paysage (16:9 ou 3:2) |
| Ratio portfolio grande case | Portrait (2:3) |
| Ratio portfolio autres | Carré (1:1) ou paysage (3:2) |

### Outil de compression recommandé
[squoosh.app](https://squoosh.app) — gratuit, en ligne, sans installation.
