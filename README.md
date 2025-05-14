# Mon Site Next.js

Ce projet est un site web moderne construit avec [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com) et préparé pour être déployé sur [Vercel](https://vercel.com).

## Fonctionnalités

- 🚀 **Performance optimale** - Construit avec Next.js pour des performances et un temps de chargement rapides
- 🎨 **Design moderne** - Interface utilisateur élégante et réactive grâce à Tailwind CSS
- 🌙 **Mode sombre** - Support complet du mode clair et sombre
- 📱 **Responsive** - Compatible avec tous les appareils, des téléphones aux ordinateurs de bureau
- 🔄 **Déploiement facile** - Prêt à être déployé sur Vercel en quelques clics

## Démarrage rapide

Pour commencer à travailler sur ce projet, suivez ces étapes :

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

## Structure du projet

```
├── public/             # Fichiers statiques (images, etc.)
├── src/
│   ├── app/            # Pages de l'application
│   ├── components/     # Composants réutilisables
│   └── styles/         # Styles globaux
├── tailwind.config.ts  # Configuration de Tailwind CSS
└── next.config.ts      # Configuration de Next.js
```

## Personnalisation

Vous pouvez commencer à personnaliser votre site en modifiant les fichiers dans le dossier `src/app`. Le projet utilise [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) pour charger et optimiser automatiquement la police [Geist](https://vercel.com/font).

## Déploiement sur Vercel

Le moyen le plus simple de déployer votre application Next.js est d'utiliser la [plateforme Vercel](https://vercel.com/new).

Pour déployer, il vous suffit de :

1. Pousser votre code sur GitHub
2. Importer votre dépôt dans Vercel
3. Vercel détectera automatiquement Next.js et appliquera les paramètres optimaux

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

## Licence

Ce projet est sous licence MIT.
