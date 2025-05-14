import Image from "next/image";

export const metadata = {
  title: "À propos | Mon Site",
  description: "En savoir plus sur Mon Site et notre équipe",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        À propos de nous
      </h1>

      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Bienvenue sur Mon Site, une plateforme moderne construite avec les dernières technologies web pour offrir une expérience exceptionnelle.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Notre mission est de fournir une base solide pour le développement web en utilisant Next.js, Tailwind CSS et en déployant sur Vercel. 
          Nous croyons en la simplicité, la performance et l'accessibilité.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Que vous soyez un développeur débutant ou expérimenté, notre site vous offre les outils nécessaires pour créer des applications web modernes et efficaces.
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Nos technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Image 
                src="/next.svg" 
                alt="Next.js Logo" 
                width={80} 
                height={80}
                className="dark:invert" 
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Next.js
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Un framework React puissant pour construire des applications web modernes avec rendu côté serveur.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4 p-2">
              <svg viewBox="0 0 248 31" className="w-auto h-6 text-slate-900 dark:text-white">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                  fill="#38bdf8"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Tailwind CSS
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Un framework CSS utilitaire pour créer rapidement des designs personnalisés sans quitter votre HTML.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Image 
                src="/vercel.svg" 
                alt="Vercel Logo" 
                width={80} 
                height={80}
                className="dark:invert" 
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Vercel
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              La plateforme de déploiement idéale pour les applications Next.js, avec des performances optimales.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
          Notre équipe
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Nous sommes une équipe passionnée de développeurs et designers qui s'efforcent de créer les meilleures expériences web possibles.
        </p>
      </div>
    </div>
  );
} 