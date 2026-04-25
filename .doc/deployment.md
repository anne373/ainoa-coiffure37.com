# Déploiement

---

## Déploiement automatique (Vercel + GitHub)

Le projet est connecté à Vercel via le repo GitHub `batoucode/ainoaV2`.

**Chaque push sur `main` redéploie le site automatiquement.**

```bash
git add .
git commit -m "description du changement"
git push
```

Vercel build et déploie en ~2 minutes.

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

Ce projet n'utilise **aucune variable d'environnement** pour l'instant.  
Si vous ajoutez des services (formulaire de contact, analytics…), créer un fichier `.env.local` à la racine :

```
# .env.local (jamais committé — déjà dans .gitignore)
NOM_VARIABLE=valeur
```

Et déclarer les mêmes variables dans le dashboard Vercel :  
**Project Settings → Environment Variables**

---

## Repo GitHub

- **URL** : https://github.com/batoucode/ainoaV2
- **Branche principale** : `main`
- **Accès** : public

---

## Domaine personnalisé sur Vercel

1. Dashboard Vercel → votre projet → **Domains**
2. Ajouter votre domaine (ex: `ainoa-coiffure.fr`)
3. Suivre les instructions DNS chez votre registrar
4. Vercel gère le HTTPS automatiquement (Let's Encrypt)

---

## Checklist avant mise en production

- [ ] Remplacer les images temporaires par vos vraies photos
- [ ] Mettre à jour `PLANITY_URL` avec votre lien Planity réel
- [ ] Ajouter les liens Facebook et Instagram réels dans `ContactSection.tsx`
- [ ] Mettre à jour l'URL Google Maps si l'adresse diffère
- [ ] Vérifier le rendu mobile (`npm run dev` + DevTools)
- [ ] `npm run build` sans erreur
- [ ] Configurer un domaine personnalisé (optionnel)
