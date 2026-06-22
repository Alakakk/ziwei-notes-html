import { NoteGrid, type NoteGridItem } from "../components/site/NoteGrid";
import { PageTitleBand } from "../components/site/PageTitleBand";
import { SiteLayout } from "../components/site/SiteLayout";
import { allPalaceNotes } from "../data/palaces";

const palaceNotes: NoteGridItem[] = allPalaceNotes.map((note, index) => ({
  number: `${index + 1}`.padStart(2, "0"),
  title: note.title,
  tags: note.topic,
  summary: note.meaning[0],
  status: "已完成",
  href: `/palaces/${note.slug}`,
}));

export function PalacesIndexPage() {
  return (
    <SiteLayout activePath="/palaces">
      <PageTitleBand
        title="十二宫"
        topic="宫位系统｜人生场域与判断次序"
        description="以宫位为入口，整理每一宫的本义、观察重点、三方四正与常见误区。当前包含十二宫、身宫与来因宫补充页。"
      />

      <section className="category-intro">
        <span className="site-number-badge">宫</span>
        <p>
          十二宫不是零散事项列表，而是一套观察人生场域的结构。先定宫位本义，再看星曜与四化落点。
        </p>
      </section>

      <NoteGrid notes={palaceNotes} />
    </SiteLayout>
  );
}
