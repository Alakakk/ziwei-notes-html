import { spawn, type ChildProcess } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium, type Browser, type Page } from "playwright";

export type ExportKind = "png" | "pdf";

type ExportOptions = {
  kind: ExportKind;
  route: string;
  output?: string;
};

type PreparedPage = {
  browser: Browser;
  page: Page;
};

const PAGE_WIDTH = 794;
const PAGE_HEIGHT = 1123;
const DEFAULT_ROUTE = "/stars/ziwei";
const DEFAULT_BASE_URL = "http://localhost:5173";

function normalizeRoute(route: string | undefined) {
  if (!route) return DEFAULT_ROUTE;
  if (route.startsWith("http://") || route.startsWith("https://")) {
    const url = new URL(route);
    return `${url.pathname}${url.search}`;
  }
  return route.startsWith("/") ? route : `/${route}`;
}

function routeToFilename(route: string, extension: ExportKind) {
  const pathname = route.split("?")[0] || DEFAULT_ROUTE;
  const name = pathname
    .replace(/^\/+/, "")
    .replace(/\/+$/g, "")
    .replace(/[^a-zA-Z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${name || "note"}.${extension}`;
}

export function parseExportArgs(kind: ExportKind): ExportOptions {
  const args = process.argv.slice(2);
  const routeArg = args.find((arg) => !arg.startsWith("--"));
  const outputFlagIndex = args.findIndex((arg) => arg === "--out" || arg === "-o");
  const output = outputFlagIndex >= 0 ? args[outputFlagIndex + 1] : undefined;

  return {
    kind,
    route: normalizeRoute(routeArg),
    output,
  };
}

async function canReach(url: string) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

async function waitForServer(baseUrl: string, timeoutMs = 15000) {
  const started = Date.now();

  while (Date.now() - started < timeoutMs) {
    if (await canReach(baseUrl)) return;
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  throw new Error(`Timed out waiting for Vite server at ${baseUrl}`);
}

async function ensureServer(baseUrl: string) {
  if (await canReach(baseUrl)) return undefined;

  const child = spawn("npm", ["run", "dev", "--", "--host", "127.0.0.1"], {
    cwd: process.cwd(),
    env: process.env,
    stdio: "ignore",
  });

  await waitForServer(baseUrl);
  return child;
}

function stopServer(child: ChildProcess | undefined) {
  if (!child || child.killed) return;
  child.kill("SIGTERM");
}

function withExportParam(baseUrl: string, route: string) {
  const url = new URL(route, baseUrl);
  url.searchParams.set("export", "1");
  return url.toString();
}

async function preparePage(route: string, baseUrl: string): Promise<PreparedPage> {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    deviceScaleFactor: 2,
    viewport: {
      width: PAGE_WIDTH,
      height: PAGE_HEIGHT,
    },
  });

  await page.goto(withExportParam(baseUrl, route), { waitUntil: "networkidle" });
  await page.locator(".note-page").waitFor({ state: "visible" });
  await page.addStyleTag({
    content: `
      @page { size: ${PAGE_WIDTH}px ${PAGE_HEIGHT}px; margin: 0; }
      html, body, #root {
        background: #fffefd !important;
        height: ${PAGE_HEIGHT}px !important;
        margin: 0 !important;
        overflow: hidden !important;
        width: ${PAGE_WIDTH}px !important;
      }
      .note-stage {
        align-items: flex-start !important;
        background: #fffefd !important;
        justify-content: flex-start !important;
        min-height: ${PAGE_HEIGHT}px !important;
        padding: 0 !important;
      }
      .note-page.export-mode {
        border-color: transparent !important;
      }
    `,
  });

  await page.evaluate(async () => {
    if ("fonts" in document) {
      await document.fonts.ready;
    }
  });

  return { browser, page };
}

function resolveOutputPath(options: ExportOptions) {
  if (options.output) return path.resolve(options.output);
  return path.resolve("exports", options.kind, routeToFilename(options.route, options.kind));
}

export async function exportNote(options: ExportOptions) {
  const baseUrl = process.env.EXPORT_BASE_URL || DEFAULT_BASE_URL;
  const outputPath = resolveOutputPath(options);
  const server = await ensureServer(baseUrl);
  let browser: Browser | undefined;

  try {
    await mkdir(path.dirname(outputPath), { recursive: true });
    const prepared = await preparePage(options.route, baseUrl);
    browser = prepared.browser;

    if (options.kind === "png") {
      await prepared.page.locator(".note-page").screenshot({
        animations: "disabled",
        path: outputPath,
      });
    } else {
      await prepared.page.pdf({
        height: `${PAGE_HEIGHT}px`,
        margin: {
          bottom: "0",
          left: "0",
          right: "0",
          top: "0",
        },
        path: outputPath,
        printBackground: true,
        width: `${PAGE_WIDTH}px`,
      });
    }

    console.info(`Exported ${options.kind.toUpperCase()}: ${outputPath}`);
  } finally {
    if (browser) await browser.close();
    stopServer(server);
  }
}
