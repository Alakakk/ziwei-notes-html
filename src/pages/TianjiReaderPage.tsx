import { tianjiNote } from "../data/stars";
import { StarReaderPage } from "./StarReaderPage";

export function TianjiReaderPage() {
  return <StarReaderPage note={tianjiNote} pageNumber="第 02 页" />;
}
