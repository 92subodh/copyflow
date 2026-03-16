import './PolicyPages.css';

export default function PageShell({ eyebrow, title, lead, updatedOn, children }) {
  return (
    <main className="policy-page">
      <div className="container">
        <div className="policy-page__hero">
          <span className="section-eyebrow">{eyebrow}</span>
          <h1 className="two-tone-heading policy-page__title">{title}</h1>
          <p className="policy-page__lead">{lead}</p>
          <p className="policy-page__meta">Last updated: {updatedOn}</p>
        </div>

        <section className="policy-page__card policy-page__sections">
          {children}
        </section>
      </div>
    </main>
  );
}
