const PAGE_WIDTH = 794;
const PAGE_HEIGHT = 1123;

type ExportKind = "png" | "pdf";

function safeFilename(filename: string, extension: ExportKind) {
  const normalized = filename
    .replace(/[\\/:*?"<>|]/g, "-")
    .replace(/\s+/g, "")
    .replace(/-+/g, "-");

  return `${normalized || "ziwei-note"}.${extension}`;
}

function downloadFile(dataUrl: string, filename: string) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
}

async function waitForFonts() {
  if ("fonts" in document) {
    await document.fonts.ready;
  }
}

function createExportClone(source: HTMLElement) {
  const clone = source.cloneNode(true) as HTMLElement;
  clone.classList.add("export-mode");
  clone.style.borderColor = "transparent";
  clone.style.boxShadow = "none";
  clone.style.height = `${PAGE_HEIGHT}px`;
  clone.style.transform = "none";
  clone.style.width = `${PAGE_WIDTH}px`;

  const host = document.createElement("div");
  host.setAttribute("aria-hidden", "true");
  host.style.background = "#fffefd";
  host.style.height = `${PAGE_HEIGHT}px`;
  host.style.left = "-10000px";
  host.style.overflow = "hidden";
  host.style.position = "fixed";
  host.style.top = "0";
  host.style.width = `${PAGE_WIDTH}px`;
  host.appendChild(clone);
  document.body.appendChild(host);

  return { clone, host };
}

async function renderNotePng(source: HTMLElement) {
  await waitForFonts();
  const { clone, host } = createExportClone(source);

  try {
    const { toPng } = await import("html-to-image");

    return await toPng(clone, {
      backgroundColor: "#fffefd",
      cacheBust: true,
      height: PAGE_HEIGHT,
      pixelRatio: 2,
      width: PAGE_WIDTH,
    });
  } finally {
    host.remove();
  }
}

function getNotePage() {
  const notePage = document.querySelector<HTMLElement>(".note-page");

  if (!notePage) {
    throw new Error("没有找到可导出的 .note-page。");
  }

  return notePage;
}

export async function exportCurrentNote(kind: ExportKind, filenameBase: string) {
  const notePage = getNotePage();
  const png = await renderNotePng(notePage);

  if (kind === "png") {
    downloadFile(png, safeFilename(filenameBase, "png"));
    return;
  }

  const { jsPDF } = await import("jspdf");
  const pdf = new jsPDF({
    compress: true,
    format: [PAGE_WIDTH, PAGE_HEIGHT],
    orientation: "portrait",
    unit: "px",
  });

  pdf.addImage(png, "PNG", 0, 0, PAGE_WIDTH, PAGE_HEIGHT);
  pdf.save(safeFilename(filenameBase, "pdf"));
}
