"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NavbarProps = {
  homeAnchors?: boolean;
};

export default function Navbar({ homeAnchors = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const gamesHref = homeAnchors ? "#games" : "/#games";
  const appsHref = homeAnchors ? "#apps" : "/#apps";
  const aboutHref = homeAnchors ? "#about" : "/#about";
  const contactHref = homeAnchors ? "#contact" : "/#contact";

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Anchor links on the same page don't navigate, so close the menu by hand.
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={menuOpen ? "navbar menu-open" : "navbar"}>
      <div className="nav-content">
        <Link href="/" className="logo" onClick={closeMenu}>
          Kallio Labs
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
        </button>
        <div id="nav-links" className="nav-links">
          <Link href={gamesHref} onClick={closeMenu}>
            Games
          </Link>
          <Link href={appsHref} onClick={closeMenu}>
            Apps
          </Link>
          <Link href={aboutHref} onClick={closeMenu}>
            About
          </Link>
          <Link href={contactHref} onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
