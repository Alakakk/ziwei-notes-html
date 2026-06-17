type FooterNoteProps = {
  source: string;
  disclaimer: string;
};

export function FooterNote({ source, disclaimer }: FooterNoteProps) {
  return (
    <footer className="footer-note">
      <p>{source}</p>
      <p>{disclaimer}</p>
    </footer>
  );
}
