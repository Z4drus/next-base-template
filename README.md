## Template Next.js Bleeze

Template de démarrage officielle pour les projets web Bleeze. Elle fournit une base préconfigurée et standardisée afin que chaque nouveau site ou application démarre avec la même stack, les mêmes conventions et une bibliothèque de composants UI complète — prête à coder sans configuration supplémentaire.

### Pourquoi cette template ?

Chaque projet Bleeze partage un socle technique commun. Plutôt que de recréer la configuration à chaque fois, cette template centralise :
- Une **stack moderne** : Next.js 16 (App Router, Turbopack), React 19, TypeScript strict et Tailwind CSS 4
- Une **bibliothèque UI complète** : 45+ composants Shadcn/Radix pré-installés (boutons, modales, formulaires, graphiques, etc.)
- Des **règles de qualité** : ESLint strict avec tri automatique des imports et interdiction des variables inutilisées
- Des **utilitaires courants** : animations (Motion), graphiques (Recharts), emails (Resend), thème clair/sombre (next-themes)

### Démarrage rapide

```bash
npm install
npm run dev
```

Le serveur de développement se lance avec Turbopack sur `http://localhost:3000`.

### Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement (Turbopack) |
| `npm run build` | Build de production |
| `npm run start` | Démarre le serveur en production |
| `npm run lint` | Vérifie les règles ESLint |
| `npm run lint:fix` | Corrige automatiquement les problèmes détectés |

### Structure du projet

```
src/
├── app/            # Routes, layouts et pages (App Router)
├── components/
│   └── ui/         # 45+ composants Shadcn pré-installés
├── hooks/          # Hooks réutilisables (ex : use-mobile)
└── lib/            # Utilitaires (cn(), helpers)
```

### Shadcn / Shadcnblocks

- Les composants Shadcn sont déjà ajoutés sous `src/components/ui` — il suffit de les importer.
- Pour utiliser **Shadcnblocks** (blocs prêts à l'emploi plus avancés) avec une clé API premium, veuillez la demander au superviseur Bleeze.

### Linting (mode strict)

- **Vérifier** : `npm run lint`
- **Auto-corriger** : `npm run lint:fix`
- Règles clés : `simple-import-sort` (ordre des imports) et `@typescript-eslint/no-unused-vars` (aucun import/variable inutile)

### Conventions

- Respecter les conventions ESLint et privilégier les composants Shadcn pour la cohérence UI
- Utiliser les Server Components par défaut ; marquer un composant Client uniquement si nécessaire
- Organiser le code par domaine/feature dans `src/`
