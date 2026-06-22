import { useState } from "react";

import { exportCurrentNote } from "../../utils/clientExport";

type ReaderToolbarProps = {
  title: string;
  category: string;
  backHref: string;
  backLabel?: string;
};

export function ReaderToolbar({
  title,
  category,
  backHref,
  backLabel = "← 返回十四主星",
}: ReaderToolbarProps) {
  const [exporting, setExporting] = useState<"png" | "pdf" | null>(null);
  const filenameBase = `紫斗笔记-${category}-${title}`;

  async function handleExport(kind: "png" | "pdf") {
    if (exporting) return;

    try {
      setExporting(kind);
      await exportCurrentNote(kind, filenameBase);
    } catch (error) {
      console.error(error);
      window.alert("导出失败，请稍后再试，或使用命令行导出脚本。");
    } finally {
      setExporting(null);
    }
  }

  return (
    <div className="reader-toolbar">
      <a href={backHref}>{backLabel}</a>
      <span>{category}｜{title}</span>
      <div className="reader-actions" aria-label="导出工具">
        <button
          aria-busy={exporting === "png"}
          disabled={exporting !== null}
          onClick={() => handleExport("png")}
          type="button"
        >
          {exporting === "png" ? "生成中" : "导出 PNG"}
        </button>
        <button
          aria-busy={exporting === "pdf"}
          disabled={exporting !== null}
          onClick={() => handleExport("pdf")}
          type="button"
        >
          {exporting === "pdf" ? "生成中" : "导出 PDF"}
        </button>
        <button type="button" disabled>
          视频分镜
        </button>
      </div>
    </div>
  );
}
