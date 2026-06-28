import type { BasicTag } from "../data/stars";

type NoteTableProps = {
  rows: BasicTag[];
};

export function NoteTable({ rows }: NoteTableProps) {
  return (
    <table className="note-table">
      <thead>
        <tr>
          <th>项目</th>
          <th>性质</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <th scope="row">{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
