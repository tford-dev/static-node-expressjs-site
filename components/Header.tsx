import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/recent', label: 'Recent' },
  { href: 'https://www.linkedin.com/in/terrance-ford-661aab226/', label: 'LinkedIn', external: true }
];

export default function Header() {
  return (
    <header className="header">
      <div className="container navbar">
        <Link href="/" className="logo" aria-label="Terrance Ford home">
          <img src="/static/img/favicon.ico" alt="TF logo" width={36} height={36} />
          <span>Terrance Ford</span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} className="nav-link" target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            )
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
