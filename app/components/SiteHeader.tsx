import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/goals", label: "Goals" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="header">
      <Link className="logo" href="/">
        Night Atlas
      </Link>
      <nav className="nav">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
