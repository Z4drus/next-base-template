import { Hero238 } from "@/components/hero238";

export function ShadcnblocksDemo() {
  return (
    <section className="py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Exemple de composants Shadcnblocks</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Installés via <code>npx shadcn add @shadcnblocks/hero238</code>. L&apos;architecture de base (alias, UI, utils)
          est déjà en place dans ce projet pour une intégration rapide.
        </p>
      </div>
      <div className="rounded-2xl overflow-hidden border bg-background">
        <Hero238 />
      </div>
    </section>
  );
}


