export function HomeFeatures() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-card-foreground mb-2">Architecture de base</h3>
          <p className="text-muted-foreground">
            Next.js App Router, TypeScript, Tailwind CSS, et une structure de composants déjà prêtes.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-card-foreground mb-2">Shadcn + Shadcnblocks</h3>
          <p className="text-muted-foreground">
            Les blocs Shadcn sont installés. Nous encourageons l&apos;utilisation de Shadcnblocks pour accélérer la composition d&apos;interfaces.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-card-foreground mb-2">Accès API premium</h3>
          <p className="text-muted-foreground">
            Pour une clé API premium Shadcnblocks, merci de demander au superviseur Bleeze qui vous la fournira.
          </p>
        </div>
      </div>
    </section>
  );
}


