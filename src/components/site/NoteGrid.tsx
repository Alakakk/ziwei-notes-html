import { NoteCard } from "./NoteCard";

export type NoteGridItem = {
  number: string;
  title: string;
  tags: string;
  summary: string;
  status: "已完成" | "待整理";
  href: string;
};

type NoteGridProps = {
  notes: NoteGridItem[];
};

export function NoteGrid({ notes }: NoteGridProps) {
  return (
    <div className="note-grid">
      {notes.map((note) => (
        <NoteCard key={note.number} {...note} />
      ))}
    </div>
  );
}
