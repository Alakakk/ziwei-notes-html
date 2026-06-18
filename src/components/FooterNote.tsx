type FooterNoteProps = {
  source: string;
  disclaimer: string;
};

export function FooterNote({ source, disclaimer }: FooterNoteProps) {
  return (
    <footer className="footer-note">
      <div className="footer-rule" aria-label={source}>
        <span className="footer-line" aria-hidden="true" />
        <span className="footer-dot" aria-hidden="true" />
        <p>{source}</p>
        <span className="footer-dot" aria-hidden="true" />
        <span className="footer-line" aria-hidden="true" />
      </div>
      <p className="footer-disclaimer">{disclaimer}</p>
    </footer>
  );
}
