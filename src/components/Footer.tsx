import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Mon Site</h3>
            <p className="text-muted-foreground">
              Un site moderne créé avec Next.js, Tailwind CSS et déployé sur Vercel.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Liens</h3>
            <ul className="space-y-2">
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
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <p className="text-muted-foreground">
              Email: contact@monsite.fr<br />
              Téléphone: 01 23 45 67 89
            </p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mon Site. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 