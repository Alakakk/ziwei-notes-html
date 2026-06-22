import { exportNote, parseExportArgs } from "./export-utils";

await exportNote(parseExportArgs("pdf"));
