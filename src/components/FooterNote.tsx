type FooterNoteProps = {
  disclaimer: string;
};

export function FooterNote({ disclaimer }: FooterNoteProps) {
  return (
    <footer className="footer-note">
      <p className="footer-disclaimer">{disclaimer}</p>
    </footer>
  );
}
