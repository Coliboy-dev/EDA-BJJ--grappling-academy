# EDA BJJ/Grappling Academy — Site Web

> Récapitulatif complet du projet pour reprise dans une nouvelle conversation.

---

## 📋 Vue d'ensemble du projet

**Client** : Enrico Démine — Coach BJJ & Grappling
**Club** : EDA BJJ/Grappling Academy
**Adresse** : Rue de Tamines 1, 6224 Fleurus, Belgique
**Email** : enricodemine5@gmail.com
**Type** : Site vitrine one-page premium
**Style** : Noir profond + or, sobre, élégant, martial (inspiration academy haut de gamme)

---

## 🎨 Identité visuelle

**Palette**
- Noir profond : `#080808`
- Noir anthracite : `#141414`
- Or principal : `#D4AF37`
- Or foncé : `#A98225`
- Ivoire : `#F5F1E8`

**Typographies (Google Fonts)**
- Titres : `Cinzel` (display serif)
- Citations : `Cormorant Garamond` (serif élégant)
- Corps : `Montserrat` (sans-serif moderne)

**Logo** : médaillon circulaire "EDA Academy / Brazilian Jiu-Jitsu" (en JPG, à convertir en PNG transparent via remove.bg)

---

## 🔗 Réseaux sociaux & liens

- Instagram : https://www.instagram.com/eda_teambjj
- Facebook : https://www.facebook.com/share/17ZY5h4fpY/
- YouTube : https://youtube.com/@enricoobjj

---

## 📁 Structure des fichiers (à la racine du dossier `eda-academy-v5/`)

```
eda-academy-v5/
├── index.html              ← page principale
├── style.css               ← styles
├── script.js               ← interactivité (menu, FAQ, lightbox, scroll)
├── robots.txt              ← SEO — autorise tous les bots
├── sitemap.xml             ← SEO — plan du site
├── preview.html            ← aperçu autonome (à ne pas mettre en ligne)
├── README.md               ← ce fichier
└── images/
    ├── logo-medalion.jpg
    ├── coach-portrait.jpg
    ├── coach-salle.jpg
    ├── hero-action.jpg
    ├── hero-grappling.jpg
    ├── palmares-naga.jpg
    ├── palmares-versus.jpg
    ├── palmares-competition.jpg
    ├── acces-passage.jpg
    ├── batiment-ext.jpg
    └── google-maps-info.jpg
```

---

## 🏗️ Structure des sections (one-page)

1. **Header fixe** — logo + nav (Accueil, Le Coach, Cours, Horaires, Tarifs, Galerie, Contact)
2. **Hero** — photo plein écran + titre "Repoussez vos limites" + CTA séance découverte
3. **Pourquoi commencer** — 4 cartes (Confiance, Condition physique, Self-défense, Esprit d'équipe)
4. **Le Coach** — portrait Enrico + badges palmarès + mini-galerie palmarès + lien YouTube
5. **Les Cours** — 3 cartes (BJJ, Grappling No-Gi, Débutants)
6. **Horaires** — Lundi/Mercredi 19h-21h sur fond photo
7. **Tarifs** — 4 cartes (Adulte, Étudiant, Enfant, Séance découverte gratuite mise en avant)
8. **Galerie** — 7 photos en masonry avec lightbox interactive
9. **FAQ** — 8 questions accordéon
10. **Zone desservie** — texte SEO local + tags villes voisines
11. **Contact** — plan d'accès avec photo passage latéral + 3 cartes réseaux sociaux
12. **Footer** — logo + valeurs + nav + adresse + copyright

---

## ✅ Fonctionnalités

- Design 100% responsive (desktop / tablette / mobile)
- Navigation smooth scroll avec lien actif
- Menu burger mobile
- FAQ accordéon accessible
- Galerie lightbox (cliquer pour agrandir, flèches ←/→, Échap)
- Bouton "retour en haut" qui apparaît après scroll
- Barre de progression de scroll en haut
- Animations reveal au scroll en cascade
- Effet parallaxe léger sur le hero (desktop uniquement)
- `prefers-reduced-motion` pour utilisateurs sensibles
- Skip-link accessibilité
- Liens Google Maps (s'ouvrent dans l'app native sur mobile)
- Lien email `mailto:` direct

---

## 🚀 SEO — ce qui a été fait (v5)

**Balises essentielles**
- Title optimisé : "Club de Jiu-Jitsu Brésilien à Fleurus | BJJ & Grappling près de Charleroi"
- Meta description avec mots-clés locaux (Charleroi, Sambreville, Gembloux, Châtelet)
- Keywords pertinents
- H1 unique caché visuellement : "Club de Jiu-Jitsu Brésilien et Grappling à Fleurus"
- Hiérarchie H2/H3 logique et optimisée
- Balises geo (région, position, ICBM)
- Canonical
- Open Graph complet (titre, description, image, locale fr_BE)
- Twitter Card

**Données structurées (JSON-LD)**
- `SportsActivityLocation` complet avec adresse, géo, horaires, palmarès coach
- `FAQPage` pour rich snippets Google (Q/R apparaissent directement dans les résultats)
- Zone desservie (`areaServed`)

**Images**
- Tous les `alt` optimisés avec mots-clés naturels
- `loading="lazy"` partout sauf hero
- `width` / `height` partout (évite les CLS)

**Contenu SEO**
- Section "Zone desservie" mentionne Fleurus, Charleroi, Sambreville, Gembloux, Châtelet, Farciennes, Gilly, Jumet, Gosselies, Lambusart, Heppignies
- FAQ avec questions naturelles recherchées par utilisateurs
- H2 et textes intégrant naturellement "Jiu-Jitsu Brésilien Fleurus", "BJJ près de Charleroi", etc.

**Fichiers techniques**
- `robots.txt` autorise tous les bots
- `sitemap.xml` à la racine

---

## ⚠️ Reste à faire (action manuelle Enrico)

**Critique pour le SEO local**
1. **Google Business Profile** — créer ou compléter la fiche (avis clients, photos, horaires officiels)
2. Une fois le site en ligne, remplacer `https://eda-academy.netlify.app/` par le vrai domaine dans :
   - `index.html` (canonical, OG url, schema.org `@id`)
   - `sitemap.xml`
   - `robots.txt`

**Améliorations futures**
- Convertir le logo médaillon en PNG fond transparent (remove.bg)
- Idéalement convertir les photos en WebP (compression sans perte de qualité)
- Photos manquantes potentielles : photo de la salle/tatami vraiment dédiée, photos de cours en groupe
- Ajouter un téléphone de contact si Enrico souhaite

**Mise en ligne (Netlify gratuit)**
1. Aller sur netlify.com, créer compte
2. Glisser le dossier `eda-academy-v5` entier dans la zone drag&drop
3. Le site est en ligne en 30 secondes à une URL `random-name.netlify.app`
4. Optionnel : changer le sous-domaine en `eda-academy.netlify.app` dans les paramètres
5. Optionnel : acheter `eda-academy.be` sur OVH/Namecheap (~10€/an) et le connecter

---

## 🎯 Stratégie marketing recommandée

**Phase 1 (immédiat)** : Site en ligne + Google Business Profile + Instagram régulier (3-4 posts/semaine)
**Phase 2 (3-12 mois)** : YouTube technique régulier + cours supplémentaire si demande + partenariats kinés/fitness locaux + stages 1-2x/an
**Phase 3 (an 2+)** : Affiliation compétition club + programmes vidéo payants + salle propre

Le BJJ vit du bouche-à-oreille : la qualité sur le tatami prime, le site et les réseaux convertissent les curieux.

---

## 🛠️ Comment modifier le site

**Changer un texte** : ouvrir `index.html` dans un éditeur (VS Code, Notepad++), chercher le texte, remplacer.

**Ajouter une image** : déposer dans `/images/`, ajouter dans HTML avec :
```html
<img src="images/nom-fichier.jpg" alt="Description SEO" loading="lazy" />
```

**Changer une couleur** : ouvrir `style.css`, modifier les variables en haut (`:root`).

**Ajouter une section** : copier une section existante dans `index.html`, l'adapter, ajouter le lien dans la nav.

---

## 📞 Pour reprendre dans une nouvelle conversation Claude

Copiez ce résumé en début de conversation et joignez les 3 fichiers principaux (`index.html`, `style.css`, `script.js`) — Claude pourra reprendre exactement où on s'est arrêté.

**Version actuelle** : v5 (SEO optimisé, design noir & or, ~7900 lignes de code total)
