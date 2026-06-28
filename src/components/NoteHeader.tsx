type NoteHeaderProps = {
  kicker: string;
  title: string;
  subtitle: string;
};

export function NoteHeader({ kicker, title, subtitle }: NoteHeaderProps) {
  return (
    <section className="note-header" data-scene="intro">
      <p className="note-kicker">{kicker}</p>
      <h1>{title}</h1>
      <p className="note-subtitle">{subtitle}</p>
    </section>
  );
}
