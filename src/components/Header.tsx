import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-background shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-primary">
          Mon Site
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="text-muted-foreground hover:text-primary">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 