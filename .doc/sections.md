# Documentation des sections

Chaque section est un composant indépendant dans `components/sections/`.

---

## Header — `components/Header.tsx`

**Type** : Client Component (`"use client"`)  
**Rôle** : Navigation fixe en haut de page, toujours visible.

### Fonctionnalités
- Logo à gauche (`w-[120px]` mobile, `w-[160px]` desktop)
- **Mobile/tablette (< 1024px)** : 2 lignes dans le header
  - Ligne 1 (h-14) : Logo | Bouton RDV | Hamburger
  - Ligne 2 (h-6) : titre de la section courante centré (ex: "CONTACT")
  - Le titre se met à jour via `IntersectionObserver` au scroll
- **Desktop (≥ 1024px)** : nav complète 5 liens + bouton RDV
- Lien actif détecté via `usePathname()` : orange + soulignage
- URL Planity centralisée dans la constante `PLANITY_URL`

### Modifier l'URL de réservation
```tsx
// Ligne 6 de Header.tsx
const PLANITY_URL = 'https://www.planity.com/ainoa-37540-saint-cyr-sur-loire'
```

### Ajouter/renommer un lien
```tsx
const navLinks = [
  { href: '/',           label: 'Accueil',   section: null },
  { href: '/#concept',   label: 'Salon',     section: 'concept' },
  { href: '/head-spa',   label: 'Head SPA',  section: null },
  { href: '/#creations', label: 'Créations', section: 'creations' },
  { href: '/#contact',   label: 'Contact',   section: 'contact' },
]
```
Le champ `section` correspond à l'`id` HTML de la section — il alimente l'IntersectionObserver pour le titre mobile.

---

## HeroSection — `components/sections/HeroSection.tsx`

**Ancre** : `id="accueil"`  
**Type** : Client Component  
**Rôle** : Carousel plein écran avec titre et CTA.

### Images du carousel (6 slides, auto-advance 5s)
```tsx
const HERO_IMAGES = [
  '/images/hero/hero-ainoa.png',
  '/images/hero/image2.png',
  // ...jusqu'à image7.png
]
```

### Modifier le texte
```tsx
<h1>L'art de la coiffure, la passion du soin.</h1>
<p>Bienvenue chez Aïnoa Coiffure…</p>
```

---

## ConceptSection — `components/sections/ConceptSection.tsx`

**Ancre** : `id="concept"`  
**Type** : Server Component  
**Rôle** : Présentation du savoir-faire du salon.

Contenu entièrement en dur dans le JSX. Modifier directement les balises `<p>` et `<h2>`.

---

## HairSpaSection — `components/sections/HairSpaSection.tsx`

**Ancre** : `id="spa"`  
**Type** : Client Component  
**Rôle** : Teaser Head Spa sur la page d'accueil — carousel 2 images (auto 4s) + texte + lien vers `/head-spa`.

### Images
```tsx
const SPA_IMAGES = [
  { src: '/images/spa/image6.png',     alt: 'Soin du cuir chevelu' },
  { src: '/images/spa/head%20spa.png', alt: 'Cabine Head Spa' },
]
```

---

## PortfolioSection — `components/sections/PortfolioSection.tsx`

**Ancre** : `id="creations"`  
**Type** : Server Component  
**Rôle** : Bento grid 4 photos (grille 4 colonnes desktop, empilées mobile).

### Images et positions
```tsx
const images = {
  grande: '/images/portfolio/coupe-1.jpg',  // 2 col × 2 row — object-[center_15%]
  bob:    '/images/portfolio/coupe-2.jpg',  // haut droite    — object-[center_20%]
  courte: '/images/portfolio/coupe-3.jpg',  // centre droite  — object-[center_15%]
  homme:  '/images/portfolio/coupe-4.jpg',  // bas large      — object-[center_20%]
}
```

> `object-[center_X%]` cadre verticalement sur la coupe de cheveux. Ajuster si les photos changent.

### Disposition bento
```
Desktop (md:grid-cols-4, h-[800px]) :
┌────────────────┬──────────┬──────────┐
│                │  coupe-2 │  coupe-3 │
│    coupe-1     ├──────────┴──────────┤
│  (2col×2row)   │       coupe-4       │
│                │     (2 colonnes)    │
└────────────────┴─────────────────────┘
```

---

## ContactSection — `components/sections/ContactSection.tsx`

**Ancre** : `id="contact"`  
**Type** : Server Component  
**Rôle** : 4 colonnes : réseaux sociaux, adresse, téléphone, horaires.

### Modifier les liens réseaux sociaux
Chercher les `href` des boutons Facebook, Instagram, Planity dans le JSX.

### Modifier adresse / horaires
Texte en dur dans le JSX, identifiable par les balises `<p>` ou `<span>`.

---

## LocationSection — `components/sections/LocationSection.tsx`

**Type** : Server Component  
**Rôle** : Carte Google Maps en couleur + carte d'info superposée.

### Carte d'info (fond zinc-900)
Contient : adresse cliquable (lien itinéraire Google Maps), téléphone, horaires.

### Changer l'adresse sur la carte
Remplacer le `src` de l'iframe par une nouvelle URL Google Maps Embed :
```tsx
src="https://www.google.com/maps/embed?pb=..."
```
Générer l'URL via Google Maps → Partager → Intégrer une carte.

### Responsive
- **Mobile** : carte info au-dessus, map en dessous (empilées)
- **Desktop** : map plein cadre avec carte info en overlay (top-12 left-12)

---

## Page Head Spa — `app/head-spa/page.tsx`

**Route** : `/head-spa`  
**Type** : Server Component  
**Rôle** : Page dédiée avec les 3 formules tarifaires.

### Structure des formules
```tsx
const services = [
  {
    tag: 'Essentiel',            // badge tag
    name: 'Soin Relaxant',
    note: null,                  // phrase intro optionnelle en orange
    description: '...',          // liste des étapes
    aura: 'card-aura-soft',      // animation CSS (voir globals.css)
    options: [
      { label: 'Avec Brushing', price: '75€', duration: '70 min' },
      { label: 'Sans Brushing', price: '60€', duration: '45 min' },
    ],
  },
  { tag: 'Profond',   aura: 'card-aura-mid',    ... },
  { tag: 'Signature', aura: 'card-aura-strong',  ... },  // bordure orange + dégradé chaud
]
```

### Ajouter une formule
Dupliquer un objet dans le tableau `services` et ajuster `aura` selon le niveau de mise en avant.

### Animations aura (définis dans `globals.css`)
| Classe | Cycle | Intensité glow | Usage |
|---|---|---|---|
| `card-aura-soft` | 4s | Très subtil | Formule entrée de gamme |
| `card-aura-mid` | 3.5s | Moyen | Formule intermédiaire |
| `card-aura-strong` | 3s | Fort (orange vif) | Formule premium Signature |

---

## Footer — `components/Footer.tsx`

**Type** : Server Component  
**Rôle** : Logo, copyright dynamique, liens rapides, crédit agence.

```tsx
© {new Date().getFullYear()} Ainoa Coiffure.
// L'année se met à jour automatiquement.
```
