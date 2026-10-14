import Link from "next/link";

type NavbarProps = {
  homeAnchors?: boolean;
};

export default function Navbar({ homeAnchors = false }: NavbarProps) {
  const gamesHref = homeAnchors ? "#games" : "/#games";
  const appsHref = homeAnchors ? "#apps" : "/#apps";
  const aboutHref = homeAnchors ? "#about" : "/#about";
  const contactHref = homeAnchors ? "#contact" : "/#contact";

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link href="/" className="logo">
          Kallio Labs
        </Link>
        <div className="nav-links">
          <Link href={gamesHref}>Games</Link>
          <Link href={appsHref}>Apps</Link>
          <Link href={aboutHref}>About</Link>
          <Link href={contactHref}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
