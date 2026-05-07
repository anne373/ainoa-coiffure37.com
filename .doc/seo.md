# SEO local — Ainoa Coiffure

Implémentation complète du référencement local pour un salon de coiffure.  
Aucun impact visuel — tout est injecté dans le `<head>` ou via des routes techniques.

---

## Source de vérité : `lib/business.ts`

Toutes les informations de l'entreprise sont centralisées dans un seul fichier.  
**Ne jamais dupliquer ces données ailleurs** — toujours importer depuis `@/lib/business`.

```ts
import { business } from '@/lib/business'
```

Champs disponibles :

| Champ | Contenu |
|---|---|
| `business.name` | Ainoa Coiffure |
| `business.type` | HairSalon (type Schema.org) |
| `business.url` | https://ainoa-coiffure37.com |
| `business.telephone` | +33247498729 (format E.164) |
| `business.telephoneDisplay` | 02 47 49 87 29 (format affichage) |
| `business.address` | street, city, postalCode, region, country |
| `business.geo` | lat / lng (coordonnées GPS) |
| `business.hours` | Tableau jours + horaires |
| `business.priceRange` | €€ |
| `business.areaServed` | Villes couvertes |
| `business.social` | facebook, instagram, planity, googleBusiness |
| `business.services` | Liste des prestations |
| `business.description` | Description SEO de l'entreprise |

> Pour modifier une info (téléphone, horaires, etc.), ne modifier **que** `lib/business.ts`.  
> Le changement se propage automatiquement aux metadata, au JSON-LD et au sitemap.

---

## Composants Schema.org

### `components/LocalBusinessSchema.tsx`

Injecté une seule fois dans `app/layout.tsx`, présent sur toutes les pages.

Génère un JSON-LD de type `HairSalon` avec :
- Identité : nom, URL, téléphone
- Adresse complète (`PostalAddress`)
- Coordonnées GPS (`GeoCoordinates`)
- Horaires (`OpeningHoursSpecification`)
- Zone de chalandise (`areaServed`)
- Réseaux sociaux + GBP (`sameAs`)
- Catalogue de services (`hasOfferCatalog`)

### `components/BreadcrumbSchema.tsx`

Injecté dans chaque `page.tsx`. Accepte un tableau d'items `{ name, url }`.

```tsx
// Accueil
<BreadcrumbSchema items={[{ name: 'Accueil', url: '/' }]} />

// Head Spa
<BreadcrumbSchema items={[
  { name: 'Accueil', url: '/' },
  { name: 'Head Spa', url: '/head-spa' },
]} />
```

---

## Metadata par page

### `app/layout.tsx` — metadata globale

Définit les valeurs par défaut pour tout le site :
- `title.template` : `%s | Ainoa Coiffure`
- `metadataBase` : `https://ainoa-coiffure37.com`
- OpenGraph et Twitter Card
- robots : index + follow

### `app/page.tsx` — page d'accueil

```
title: "Ainoa Coiffure | Salon de coiffure Saint-Cyr-sur-Loire"
canonical: /
```

### `app/head-spa/page.tsx` — page Head Spa

```
title: "Head Spa Saint-Cyr-sur-Loire | Ainoa Coiffure"
canonical: /head-spa
keywords: head spa, soin capillaire, massage crânien, Tours...
```

---

## Routes techniques

### `/sitemap.xml` — `app/sitemap.ts`

Généré dynamiquement par Next.js. Contient toutes les URLs avec :
- `lastModified` : date de build
- `changeFrequency` : monthly
- `priority` : 1.0 (accueil), 0.8 (head-spa)

### `/robots.txt` — `app/robots.ts`

```
User-agent: *
Allow: /
Disallow: /api/, /admin/, /_next/
Sitemap: https://ainoa-coiffure37.com/sitemap.xml
```

---

## Images Open Graph

| Route | Fichier | Dimensions |
|---|---|---|
| `/` | `app/opengraph-image.tsx` | 1200 × 630 px |
| `/head-spa` | `app/head-spa/opengraph-image.tsx` | 1200 × 630 px |

Générées dynamiquement via `ImageResponse` (edge runtime).  
Style : fond ivoire `#FFF7F2`, titre orange `#F54927`, texte `#1a1c1c`.

---

## Vérifications post-déploiement

- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) — vérifier HairSalon + Breadcrumb
- [ ] `https://ainoa-coiffure37.com/sitemap.xml` — accessible et valide
- [ ] `https://ainoa-coiffure37.com/robots.txt` — accessible
- [ ] Soumettre le sitemap dans Google Search Console
- [ ] Vérifier l'OG image sur [opengraph.xyz](https://www.opengraph.xyz)
- [ ] Mettre à jour les coordonnées GPS dans `lib/business.ts` si elles diffèrent de la réalité (actuellement approximatives)

---

## Ajouter une nouvelle page

1. Créer `app/[slug]/page.tsx`
2. Ajouter `export const metadata` avec `title`, `description`, `alternates.canonical`
3. Injecter `<BreadcrumbSchema />` avec le bon fil d'Ariane
4. Ajouter l'URL dans `app/sitemap.ts`
5. Créer `app/[slug]/opengraph-image.tsx` si besoin

---

## Modifier les informations de l'entreprise

Éditer uniquement `lib/business.ts` — aucun autre fichier à toucher.

Exemples :
- Nouveau numéro de téléphone → mettre à jour `telephone` et `telephoneDisplay`
- Nouveaux horaires → modifier le tableau `hours`
- Nouveau réseau social → ajouter dans `social` + mettre à jour `sameAs` dans `LocalBusinessSchema.tsx`
