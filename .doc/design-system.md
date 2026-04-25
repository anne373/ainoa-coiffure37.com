# Design System

Toutes les valeurs de design sont centralisées dans `tailwind.config.ts`.

---

## Couleurs

| Nom Tailwind | Valeur | Usage |
|---|---|---|
| `primary` | `#F54927` | Orange-rouge — boutons, accents, titres secondaires |
| `background` / `surface` | `#FFF7F2` | Fond général de la page |
| `on-surface` | `#1a1c1c` | Texte principal |
| `on-surface-variant` | `#5c403a` | Texte secondaire chaud |
| `outline` | `#906f69` | Bordures |
| `outline-variant` | `#e5beb6` | Bordures légères |

### Changer la couleur principale

Dans `tailwind.config.ts`, modifier `primary` :
```ts
primary: '#F54927',  // ← changer ici
```

### Changer la couleur de fond

```ts
background: '#FFF7F2',  // ← changer ici
surface: '#FFF7F2',     // ← et ici (même valeur)
'surface-bright': '#FFF7F2',
```

> Penser aussi à mettre à jour `bg-[#FFF7F2]` dans `app/layout.tsx` et `globals.css`.

---

## Typographie

### Polices

| Classe Tailwind | Police | Usage |
|---|---|---|
| `font-space-grotesk` | Space Grotesk | Titres (h1, h2, h3), logo, nav |
| `font-inter` | Inter | Corps de texte, labels, boutons |

Chargées via `next/font/google` dans `app/layout.tsx` — aucune requête externe à l'exécution.

### Tailles de texte custom

| Classe | Taille | Line-height | Usage |
|---|---|---|---|
| `text-h1` | 64px | 1.1 | Titre hero |
| `text-h2` | 48px | 1.1 | Titres de sections |
| `text-h3` | 32px | 1.2 | Sous-titres, stats |
| `text-body-lg` | 18px | 1.6 | Paragraphes principaux |
| `text-body-md` | 16px | 1.5 | Texte courant |
| `text-label-caps` | 12px | 1.0 | Labels en majuscules |

---

## Border Radius

Le projet utilise des coins très arrondis par défaut :

| Classe | Valeur | Usage |
|---|---|---|
| `rounded` (défaut) | 40px | Cartes, tuiles |
| `rounded-[40px]` | 40px | Portfolio items |
| `rounded-[48px]` | 48px | Hero, map, grandes sections |
| `rounded-full` | 9999px | Boutons pilule |
| `rounded-xl` | 40px (override) | Badges réseaux sociaux |

---

## Icônes

Utilisation de **Material Symbols Outlined** (Google Fonts), chargé dans `app/layout.tsx`.

```html
<span class="material-symbols-outlined">spa</span>
<span class="material-symbols-outlined">psychology</span>
<span class="material-symbols-outlined">architecture</span>
<span class="material-symbols-outlined">menu</span>
<span class="material-symbols-outlined">close</span>
```

Style configuré dans `app/globals.css` :
```css
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
```

---

## Espacements récurrents

| Valeur | Usage |
|---|---|
| `py-[120px]` | Padding vertical de chaque section |
| `px-8` | Padding horizontal (mobile et desktop) |
| `max-w-[1280px] mx-auto` | Conteneur centré max 1280px |
| `gap-6` | Grille entre colonnes |
