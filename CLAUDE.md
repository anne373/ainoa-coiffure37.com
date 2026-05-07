# CLAUDE.md — Ainoa Coiffure

Instructions pour Claude Code sur ce projet.

---

## Contexte

Site vitrine d'un salon de coiffure (Ainoa Coiffure, Saint-Cyr-sur-Loire).  
Next.js 15 App Router · TypeScript · Tailwind CSS 3 · Déployé sur Vercel.  
Documentation complète dans `.doc/`.

---

## Commandes essentielles

```bash
npm run dev     # Dev local sur localhost:3000
npm run build   # Vérifier avant de pousser
```

**Push toujours sur les deux remotes :**
```bash
git push origin main && git push ainoa main
```
- `origin` → github.com/batoucode/ainoaV2
- `ainoa` → github.com/anne373/ainoa-coiffure37.com (Vercel connecté ici)

---

## Architecture en un coup d'œil

```
app/
  layout.tsx          Polices (Space Grotesk + Inter + Material Symbols) + metadata
  page.tsx            Accueil — assemble 6 sections
  globals.css         Tailwind + animations card-aura-soft/mid/strong
  head-spa/page.tsx   Page formules tarifaires (Server Component)

components/
  Header.tsx          "use client" — nav fixe, 2 lignes mobile, IntersectionObserver
  Footer.tsx
  sections/
    HeroSection.tsx       carousel 6 slides auto 5s
    ConceptSection.tsx    savoir-faire
    HairSpaSection.tsx    teaser spa, carousel 2 slides auto 4s
    PortfolioSection.tsx  bento grid 4 photos, object-position ajusté par image
    ContactSection.tsx    réseaux + adresse + horaires
    LocationSection.tsx   Google Maps iframe couleur
```

---

## Règles à respecter

- **Server Components par défaut** — `"use client"` uniquement si state/effet nécessaire.
- **Couleur primaire** : `#F54927` (orange-rouge). Fond : `#FFF7F2` (ivoire).
- **Polices** : `font-space-grotesk` (titres), `font-inter` (corps).
- **Border radius** : coins très arrondis — `rounded-[40px]` cartes, `rounded-[48px]` sections, `rounded-full` boutons.
- **Responsive** : mobile-first. Menu hamburger sous `lg` (1024px).
- **Images** : `next/image` avec `fill` + `object-cover`. Ajuster `object-position` si le cadrage est mauvais.
- **Animations** : CSS pur dans `globals.css`. Pas de librairie externe.
- **Sécurité** : toute ressource externe ajoutée doit être déclarée dans le CSP de `next.config.ts`.

---

## Fichiers clés à connaître

| Fichier | Ce qu'il contient |
|---|---|
| `tailwind.config.ts` | Palette, typographie, border-radius, fonts |
| `next.config.ts` | Headers sécurité (CSP, X-Frame, etc.) + remote images |
| `app/globals.css` | Animations aura + Material Symbols config |
| `components/Header.tsx` | Nav + PLANITY_URL + détection section scroll |
| `app/head-spa/page.tsx` | Formules tarifaires Head Spa (données dans tableau `services`) |

---

## Intégrations externes

| Service | Usage | Où |
|---|---|---|
| Planity | Lien réservation | `PLANITY_URL` dans Header.tsx et head-spa/page.tsx |
| Google Fonts | Space Grotesk, Inter, Material Symbols | app/layout.tsx + next/font |
| FontAwesome 6.5 | Icônes réseaux sociaux | app/layout.tsx (CDN cdnjs) |
| Google Maps | Iframe embed couleur | LocationSection.tsx |
