type NoteCardProps = {
  number: string;
  title: string;
  tags: string;
  summary: string;
  status: "已完成" | "待整理";
  href: string;
};

export function NoteCard({
  number,
  title,
  tags,
  summary,
  status,
  href,
}: NoteCardProps) {
  return (
    <a className="note-card" href={href}>
      <div className="note-card-heading">
        <span className="site-number-badge">{number}</span>
        <h3>{title}</h3>
      </div>
      <p className="note-card-tags">{tags}</p>
      <p className="note-card-summary">{summary}</p>
      <span className={`note-card-status ${status === "已完成" ? "done" : ""}`}>
        {status}
      </span>
    </a>
  );
}
