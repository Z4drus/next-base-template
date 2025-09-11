export function HomeFeatures() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Architecture de base</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Next.js App Router, TypeScript, Tailwind CSS, et une structure de composants déjà prêtes.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Shadcn + Shadcnblocks</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Les blocs Shadcn sont installés. Nous encourageons l&apos;utilisation de Shadcnblocks pour accélérer la composition d&apos;interfaces.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Accès API premium</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Pour une clé API premium Shadcnblocks, merci de demander au superviseur Bleeze qui vous la fournira.
          </p>
        </div>
      </div>
    </section>
  );
}


