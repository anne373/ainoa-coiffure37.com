# Déploiement

---

## Dépôts GitHub

| Remote | URL | Rôle |
|---|---|---|
| `origin` | github.com/batoucode/ainoaV2 | Dépôt de travail (batoucode) |
| `ainoa` | github.com/anne373/ainoa-coiffure37.com | Dépôt client — Vercel connecté ici |

**Toujours pousser sur les deux :**
```bash
git add .
git commit -m "description du changement"
git push origin main && git push ainoa main
```

Vercel surveille le dépôt `anne373/ainoa-coiffure37.com` et redéploie automatiquement à chaque push sur `main` (~2 minutes).

---

## Workflow de développement local

```bash
npm run dev       # Démarre sur http://localhost:3000 (hot reload)
npm run build     # Vérifie que le build prod est valide (TypeScript + Next.js)
npm run start     # Lance le build prod en local (après build)
```

> Toujours faire `npm run build` avant de pousser pour éviter les erreurs sur Vercel.

---

## Variables d'environnement

Ce projet n'utilise **aucune variable d'environnement**.  
Si vous ajoutez des services (formulaire de contact, analytics…), créer un fichier `.env.local` à la racine :

```
# .env.local (jamais committé — déjà dans .gitignore)
NOM_VARIABLE=valeur
```

Et déclarer les mêmes variables dans le dashboard Vercel :  
**Project Settings → Environment Variables**

---

## Domaine personnalisé sur Vercel

1. Dashboard Vercel → projet `ainoa-coiffure37` → **Domains**
2. Ajouter le domaine (ex : `ainoa-coiffure37.com`)
3. Suivre les instructions DNS chez votre registrar
4. Vercel gère le HTTPS automatiquement (Let's Encrypt)
5. Le header `Strict-Transport-Security` est automatiquement actif sur les domaines custom Vercel

> Aucune modification du code n'est nécessaire lors du changement de domaine — les headers de sécurité s'appliquent sur toutes les routes.

---

## Checklist avant mise en production

- [x] Headers de sécurité configurés (score A/A+ sur securityheaders.com)
- [x] Carte Google Maps en couleur
- [x] Menu hamburger responsive (hamburger sous 1024px)
- [ ] Remplacer les images par les vraies photos
- [ ] Vérifier le lien `PLANITY_URL` dans `Header.tsx` et `app/head-spa/page.tsx`
- [ ] Vérifier les liens Facebook et Instagram dans `ContactSection.tsx`
- [ ] `npm run build` sans erreur
- [ ] Tester sur mobile réel
- [ ] Configurer le domaine personnalisé sur Vercel
