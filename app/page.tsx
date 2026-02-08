const sections = [
  {
    id: "work",
    title: "Work",
    blurb: "Focused highlights from recent client and team collaborations.",
  },
  {
    id: "goals",
    title: "Goals",
    blurb: "A short list of priorities guiding the next quarter.",
  },
  {
    id: "blog",
    title: "Blog",
    blurb: "Thoughts on craft, process, and continuous improvement.",
  },
  {
    id: "about",
    title: "About",
    blurb: "A snapshot of the values and experience behind the work.",
  },
  {
    id: "projects",
    title: "Projects",
    blurb: "Selected builds showcasing versatility and depth.",
  },
  {
    id: "contact",
    title: "Contact",
    blurb: "Ways to connect and start a conversation.",
  },
];

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <nav className="nav">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="section">
            <h2>{section.title}</h2>
            <p>{section.blurb}</p>
          </section>
        ))}
      </main>
    </div>
  );
}
