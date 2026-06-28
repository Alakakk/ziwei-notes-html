import type { ReactNode } from "react";

type ReaderShellProps = {
  left: ReactNode;
  note: ReactNode;
  right: ReactNode;
};

export function ReaderShell({ left, note, right }: ReaderShellProps) {
  return (
    <section className="reader-shell">
      <aside className="reader-panel">{left}</aside>
      <div className="reader-note">{note}</div>
      <aside className="reader-panel">{right}</aside>
    </section>
  );
}
