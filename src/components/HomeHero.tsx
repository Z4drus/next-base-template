import Link from "next/link";

export function HomeHero() {
  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
        Template Next.js Bleeze — Base d&apos;architecture
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
        Cette template est destinée aux collaborateurs Bleeze. Une architecture de base est préconfigurée et les librairies essentielles sont déjà installées pour accélérer vos démarrages.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="https://nextjs.org/" className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all">
          Docs Next.js
        </Link>
        <Link href="https://ui.shadcn.com/" className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
          Shadcn UI
        </Link>
      </div>
    </section>
  );
}


