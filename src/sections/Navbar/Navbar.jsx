import "./Navbar.css";

const navLinks = [
  { label: "Inicio",        href: "#" },
  { label: "Sobre mí",      href: "#about" },
  { label: "Trayectoria",   href: "#trayectoria" },
  { label: "Conocimientos", href: "#conocimientos" },
  { label: "Contacto",      href: "/contacto", newTab: true },
];

function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar-inner">
        <div className="navbar-logo">Lucero Becerra</div>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(link.newTab && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;