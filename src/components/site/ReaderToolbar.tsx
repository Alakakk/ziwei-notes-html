type ReaderToolbarProps = {
  title: string;
  category: string;
  backHref: string;
};

export function ReaderToolbar({
  title,
  category,
  backHref,
}: ReaderToolbarProps) {
  return (
    <div className="reader-toolbar">
      <a href={backHref}>← 返回十四主星</a>
      <span>{category}｜{title}</span>
      <div className="reader-actions" aria-label="导出工具">
        <button type="button" disabled>
          导出 PNG
        </button>
        <button type="button" disabled>
          导出 PDF
        </button>
        <button type="button" disabled>
          视频分镜
        </button>
      </div>
    </div>
  );
}
