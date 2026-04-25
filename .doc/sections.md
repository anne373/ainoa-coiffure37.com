# Documentation des sections

Chaque section est un composant indépendant dans `components/sections/`.

---

## Header — `components/Header.tsx`

**Type** : Client Component (`"use client"`)  
**Rôle** : Navigation fixe en haut de page, toujours visible.

### Fonctionnalités
- Logo "AINOA COIFFURE" à gauche
- Liens d'ancre vers chaque section (`#accueil`, `#concept`, `#spa`, `#creations`, `#contact`)
- Bouton "Prendre RDV" → lien externe Planity
- Menu hamburger sur mobile (toggle `menuOpen`)

### Modifier
```tsx
// URL Planity — ligne 4 de Header.tsx
const PLANITY_URL = 'https://www.planity.com'  // ← votre URL ici

// Ajouter/renommer un lien nav — tableau navLinks
const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  // ...
]
```

---

## HeroSection — `components/sections/HeroSection.tsx`

**Ancre** : `#accueil`  
**Rôle** : Bandeau plein écran avec image de fond, titre principal et CTA.

### Image
```tsx
// Remplacer l'URL Google par votre photo locale :
const HERO_IMAGE = '/images/hero/main.jpg'
// Fichier à placer dans : public/images/hero/main.jpg
```

### Modifier le texte
```tsx
<h1>L'art de la coiffure, la passion du soin.</h1>
<p>Bienvenue chez Aïnoa Coiffure...</p>
```

---

## ConceptSection — `components/sections/ConceptSection.tsx`

**Ancre** : `#concept`  
**Rôle** : Présentation du salon, chiffres clés.

### Modifier les stats
```tsx
// Deux stats côte à côte
<span>15 ans</span>  <span>D'expérience</span>
<span>100%</span>    <span>Passion</span>
```

---

## HairSpaSection — `components/sections/HairSpaSection.tsx`

**Ancre** : `#spa`  
**Rôle** : Présentation du service Head Spa avec image et liste de soins.

### Image
```tsx
const SPA_IMAGE = '/images/spa/main.jpg'
// Fichier : public/images/spa/main.jpg
```

### Ajouter un soin
Dupliquer le bloc dans `space-y-6` :
```tsx
<div className="flex items-start gap-4">
  <span className="material-symbols-outlined text-[#F54927]">nom_icone</span>
  <div>
    <h4>NOM DU SOIN</h4>
    <p>Description courte.</p>
  </div>
</div>
```
Icônes disponibles sur [fonts.google.com/icons](https://fonts.google.com/icons).

---

## PortfolioSection — `components/sections/PortfolioSection.tsx`

**Ancre** : `#creations`  
**Rôle** : Grille bento de 3 photos + 1 tuile décorative.

### Images
```tsx
const IMG_BOB      = '/images/portfolio/1.jpg'  // grande photo gauche
const IMG_COLORING = '/images/portfolio/2.jpg'  // haut droite
const IMG_TOOLS    = '/images/portfolio/3.jpg'  // bas droite (large)
// Fichiers : public/images/portfolio/1.jpg, 2.jpg, 3.jpg
```

### Structure de la grille
```
┌─────────────────┬────────┬────────┐
│                 │ Photo  │ Tuile  │
│  Grande photo   │ (2)    │ sombre │
│  (1)            ├────────┴────────┤
│                 │  Photo large    │
│                 │  (3)            │
└─────────────────┴─────────────────┘
```

---

## ContactSection — `components/sections/ContactSection.tsx`

**Ancre** : `#contact`  
**Rôle** : 4 colonnes : réseaux sociaux, adresse, téléphone, horaires.

### Modifier les réseaux sociaux
```tsx
{ label: 'Facebook',  href: 'https://facebook.com/...' },
{ label: 'Instagram', href: 'https://instagram.com/...' },
{ label: 'Planity',   href: 'https://www.planity.com/...' },
```

### Modifier l'adresse / horaires
Texte en dur dans le JSX, facile à localiser par les balises `<p>`.

---

## LocationSection — `components/sections/LocationSection.tsx`

**Rôle** : Carte Google Maps + carte d'informations superposée.

### Changer l'adresse sur la carte
```tsx
src="https://maps.google.com/maps?q=VOTRE+ADRESSE&output=embed"
```

### Carte d'info (coin haut gauche)
Adresse, téléphone et horaires sont en dur dans le JSX — même logique que ContactSection.

---

## Footer — `components/Footer.tsx`

**Rôle** : Bas de page avec logo, copyright dynamique et liens rapides.

L'année du copyright se met à jour automatiquement :
```tsx
© {new Date().getFullYear()} Ainoa Coiffure.
```
