## Template Next.js Bleeze

Une base Next.js prête à l'emploi pour les collaborateurs Bleeze.

### Aperçu
- **Architecture**: Next.js (App Router) + TypeScript + Tailwind CSS
- **UI**: Shadcn (blocs déjà installés). Recommandé: Shadcnblocks
- **Qualité**: ESLint en mode strict (ordre des imports, imports/vars inutiles interdits)

### Démarrage rapide
```bash
npm install
npm run dev
```

### Linting (mode strict)
- **Vérifier**: `npm run lint`
- **Auto-corriger**: `npm run lint:fix`
- Règles clés: `sort-imports` (ordre des imports) et `@typescript-eslint/no-unused-vars` (aucun import/var inutile)

### Shadcn / Shadcnblocks
- Les composants Shadcn sont déjà ajoutés sous `src/components/ui`.
- Pour utiliser Shadcnblocks avec une **clé API premium**, veuillez la demander au superviseur Bleeze.

### Scripts
- `dev`: lance le serveur de dev Next.js
- `build`: build de production
- `start`: démarre le serveur en production
- `lint`: vérifie les règles ESLint
- `lint:fix`: corrige automatiquement les problèmes simples

### Structure
- `src/app`: routes et layout (App Router)
- `src/components`: composants applicatifs et UI (Shadcn)
- `src/lib`: utilitaires
- `src/hooks`: hooks réutilisables

### Notes
- Cette page d'accueil explique brièvement la template au premier lancement.
- Merci de respecter les conventions ESLint et de privilégier Shadcn pour la cohérence UI.


