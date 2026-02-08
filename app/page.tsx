import Link from "next/link";
import SiteHeader from "./components/SiteHeader";

const landingLinks = [
  {
    href: "/work",
    title: "Work",
    description: "Recent case studies and client partnerships.",
  },
  {
    href: "/goals",
    title: "Goals",
    description: "What I am chasing this quarter and beyond.",
  },
  {
    href: "/blog",
    title: "Blog",
    description: "Thoughts on craft, teams, and momentum.",
  },
  {
    href: "/about",
    title: "About",
    description: "A little context on the person behind the work.",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Experiments and side quests in progress.",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Let us build something brave together.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <h1>Designing with calm focus.</h1>
          <p>
            A minimal, dark interface for mapping ideas, shipping work, and
            nurturing long-term partnerships.
          </p>
        </section>
        <section className="grid">
          {landingLinks.map((link) => (
            <Link className="card" key={link.href} href={link.href}>
              <strong>{link.title}</strong>
              <span>{link.description}</span>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
