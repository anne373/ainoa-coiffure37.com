# Ainoa Coiffure — Site Vitrine

Site one-page pour **Ainoa Coiffure**, salon de coiffure à Saint-Cyr-sur-Loire.

**Stack** : Next.js 15 · TypeScript · Tailwind CSS · Vercel

---

## Démarrage rapide

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # vérification production
```

## Déploiement

Le projet est connecté à Vercel via GitHub.  
Chaque push sur `main` redéploie automatiquement.

```bash
git add .
git commit -m "votre message"
git push
```

## Personnalisation rapide

| Ce que vous voulez changer | Où |
|---|---|
| URL Planity (prise de RDV) | `components/Header.tsx` → `PLANITY_URL` |
| Photo principale | `public/images/hero/main.jpg` |
| Photo Head Spa | `public/images/spa/main.jpg` |
| Photos créations | `public/images/portfolio/1.jpg` … `3.jpg` |
| Adresse / horaires | `components/sections/ContactSection.tsx` |
| Réseaux sociaux (liens) | `components/sections/ContactSection.tsx` |
| Couleur principale (orange) | `tailwind.config.ts` → `primary` |
| Couleur de fond | `tailwind.config.ts` → `background` + `surface` |

## Structure du projet

```
ainoa-coiffure/
├── .doc/              # Documentation détaillée (vous êtes ici)
├── app/               # Entrée Next.js (layout, page, CSS global)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── sections/      # Une section = un composant
├── public/images/     # Vos photos à déposer ici
├── tailwind.config.ts # Design system complet
└── next.config.ts     # Config Next.js (images externes autorisées)
```

## Documentation complète

Voir le dossier [.doc/](.doc/) :

- [Architecture](.doc/architecture.md)
- [Design System](.doc/design-system.md)
- [Sections](.doc/sections.md)
- [Images](.doc/images.md)
- [Déploiement](.doc/deployment.md)
