# Sécurité — Headers HTTP

Score actuel : **A / A+** sur securityheaders.com  
URL testée : https://ainoa-coiffure37-com.vercel.app/

---

## Headers configurés

Tous les headers sont définis dans `next.config.ts` et s'appliquent sur toutes les routes `(.*)`.

### 1. Content-Security-Policy (CSP)

Politique de sécurité des contenus — bloque XSS et injections.

| Directive | Valeurs autorisées | Raison |
|---|---|---|
| `default-src` | `'self'` | Tout vient du même domaine par défaut |
| `script-src` | `'self' 'unsafe-inline' 'unsafe-eval'` | Next.js App Router génère des scripts inline |
| `style-src` | `'self' 'unsafe-inline' fonts.googleapis.com cdnjs.cloudflare.com` | Tailwind inline + Google Fonts + FontAwesome |
| `font-src` | `'self' fonts.gstatic.com cdnjs.cloudflare.com` | Fichiers de polices |
| `img-src` | `'self' data: blob: lh3.googleusercontent.com` | Images locales + avatars Google |
| `frame-src` | `www.google.com` | Iframe Google Maps |
| `connect-src` | `'self' maps.googleapis.com` | API Google Maps |
| `frame-ancestors` | `'self'` | Empêche l'intégration dans des iframes externes |

> `unsafe-inline` et `unsafe-eval` sur `script-src` sont nécessaires pour Next.js sans nonce.  
> Pour éliminer ces directives, il faudrait configurer un nonce dynamique (middleware complexe).

### 2. X-Frame-Options
```
X-Frame-Options: SAMEORIGIN
```
Empêche le clickjacking — le site ne peut pas être affiché dans une iframe externe.  
Redondant avec `frame-ancestors 'self'` mais maintenu pour la compatibilité avec les vieux navigateurs.

### 3. X-Content-Type-Options
```
X-Content-Type-Options: nosniff
```
Empêche le navigateur de deviner le type MIME d'un fichier.

### 4. Referrer-Policy
```
Referrer-Policy: strict-origin-when-cross-origin
```
Envoie l'origin complète pour les requêtes same-origin, seulement l'origine (sans path) pour les requêtes cross-origin HTTPS.

### 5. Permissions-Policy
```
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), fullscreen=(self)
```
Désactive les APIs navigateur non utilisées. `fullscreen=(self)` permet au site de passer en plein écran si nécessaire.

---

## Header déjà présent (géré par Vercel)

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```
Force HTTPS — Vercel l'ajoute automatiquement sur tous les déploiements.

---

## Vérification

Après chaque modification de `next.config.ts`, retester sur :
**https://securityheaders.com** avec l'URL du site.

---

## Ajouter une nouvelle ressource externe

Si vous intégrez un nouveau service (analytics, chatbot, vidéo…), ajouter son domaine dans la directive CSP correspondante de `next.config.ts` :

```ts
// Exemple : ajouter Hotjar (analytics)
script-src ... https://static.hotjar.com
connect-src ... https://metrics.hotjar.io
```
