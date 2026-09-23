import Link from "next/link";

type NavbarProps = {
  homeAnchors?: boolean;
};

export default function Navbar({ homeAnchors = false }: NavbarProps) {
  const workHref = homeAnchors ? "#work" : "/#work";
  const aboutHref = homeAnchors ? "#about" : "/#about";
  const contactHref = homeAnchors ? "#contact" : "/#contact";

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link href="/" className="logo">
          Kallio Labs
        </Link>
        <div className="nav-links">
          <Link href={workHref}>Work</Link>
          <Link href={aboutHref}>About</Link>
          <Link href={contactHref}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
