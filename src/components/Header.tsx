import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-primary-600 dark:text-primary-400">
          Mon Site
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 