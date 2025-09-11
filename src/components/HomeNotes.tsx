export function HomeNotes() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Notes rapides</h2>
      <ul className="list-disc text-left max-w-3xl mx-auto pl-6 text-gray-700 dark:text-gray-300 space-y-2">
        <li>Cette page d&apos;accueil est volontairement écrite pour expliquer la template au premier lancement.</li>
        <li>
          Adoptez les composants UI de <span className="font-semibold">Shadcn</span> pour la cohérence visuelle.
        </li>
        <li>
          Vérifiez le <code>README.md</code> pour la configuration, scripts et bonnes pratiques.
        </li>
      </ul>
    </section>
  );
}


