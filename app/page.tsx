const sections = [
  {
    id: "work",
    title: "Work",
    blurb: "Focused highlights from recent client and team collaborations.",
  },
  {
    id: "app",
    title: "App",
    blurb:
      "The template portfolio experience, packaged as a responsive web app.",
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
        <section className="hero">
          <p className="eyebrow">Template Portfolio</p>
          <h1>Curated highlights for the people who need to see them.</h1>
          <p className="hero-text">
            This template keeps the essentials at the top: a streamlined app
            summary, the work that matters, and a clear path to connect.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#app">
              Explore the app
            </a>
            <a className="secondary" href="#contact">
              Contact me
            </a>
          </div>
        </section>
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="section">
            <div className="section-header">
              <h2>{section.title}</h2>
              <p>{section.blurb}</p>
            </div>
            {section.id === "app" ? (
              <div className="app-card">
                <div>
                  <p className="eyebrow">Template Portfolio App</p>
                  <h3>Showcase-ready with the essentials built in.</h3>
                  <p>
                    The app section now lives alongside the primary portfolio
                    flow, so visitors see the product story before diving into
                    individual projects.
                  </p>
                </div>
                <div className="app-meta">
                  <div>
                    <span className="label">Stack</span>
                    <span>Next.js · TypeScript · CSS Modules</span>
                  </div>
                  <div>
                    <span className="label">Status</span>
                    <span>Live preview + reusable layout</span>
                  </div>
                  <div>
                    <span className="label">Focus</span>
                    <span>Speed, clarity, and conversion-ready storytelling</span>
                  </div>
                </div>
              </div>
            ) : null}
          </section>
        ))}
      </main>
    </div>
  );
}
