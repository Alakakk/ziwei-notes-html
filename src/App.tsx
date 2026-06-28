import { HomePage } from "./pages/HomePage";
import { MinorStarNotePage } from "./components/MinorStarNotePage";
import { MinorStarReaderPage } from "./pages/MinorStarReaderPage";
import { MinorStarsIndexPage } from "./pages/MinorStarsIndexPage";
import { NotePage } from "./components/NotePage";
import { PalaceNotePage } from "./components/PalaceNotePage";
import { PalaceReaderPage } from "./pages/PalaceReaderPage";
import { PalacesIndexPage } from "./pages/PalacesIndexPage";
import { StarsIndexPage } from "./pages/StarsIndexPage";
import { StarReaderPage } from "./pages/StarReaderPage";
import { minorStarNotesBySlug } from "./data/minorStars";
import { palaceNotesBySlug } from "./data/palaces";
import { starNotesBySlug } from "./data/stars";

export function App() {
  const path = window.location.pathname;
  const isExportMode = new URLSearchParams(window.location.search).get("export") === "1";

  if (path === "/stars") {
    return <StarsIndexPage />;
  }

  if (path === "/palaces") {
    return <PalacesIndexPage />;
  }

  if (path === "/minor-stars") {
    return <MinorStarsIndexPage />;
  }

  if (path.startsWith("/stars/")) {
    const slug = path.replace("/stars/", "");
    const note = starNotesBySlug[slug];

    if (note) {
      if (isExportMode) {
        return <NotePage note={note} exportMode />;
      }

      return (
        <StarReaderPage
          note={note}
          pageNumber={note.pageLabel.split("｜")[0]}
        />
      );
    }
  }

  if (path.startsWith("/palaces/")) {
    const slug = path.replace("/palaces/", "");
    const note = palaceNotesBySlug[slug];

    if (note) {
      if (isExportMode) {
        return <PalaceNotePage note={note} exportMode />;
      }

      return (
        <PalaceReaderPage
          note={note}
          pageNumber={note.pageLabel.split("｜")[0]}
        />
      );
    }
  }

  if (path.startsWith("/minor-stars/")) {
    const slug = path.replace("/minor-stars/", "");
    const note = minorStarNotesBySlug[slug];

    if (note) {
      if (isExportMode) {
        return <MinorStarNotePage note={note} exportMode />;
      }

      return (
        <MinorStarReaderPage
          note={note}
          pageNumber={note.pageLabel.split("｜")[0]}
        />
      );
    }
  }

  return <HomePage />;
}
