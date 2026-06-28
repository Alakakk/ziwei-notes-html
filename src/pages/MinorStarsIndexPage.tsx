import { NoteGrid, type NoteGridItem } from "../components/site/NoteGrid";
import { PageTitleBand } from "../components/site/PageTitleBand";
import { SiteLayout } from "../components/site/SiteLayout";
import { minorStarNotes } from "../data/minorStars";

const minorStarItems: NoteGridItem[] = minorStarNotes.map((note, index) => ({
  number: `${index + 1}`.padStart(2, "0"),
  title: note.title,
  tags: note.topic,
  summary: note.overview[0],
  status: "已完成",
  href: `/minor-stars/${note.slug}`,
}));

export function MinorStarsIndexPage() {
  return (
    <SiteLayout activePath="/minor-stars">
      <PageTitleBand
        title="辅星杂曜"
        topic="十四辅星｜吉煞助曜与组合格局"
        description="以七组对星为入口，整理辅星的总论、差异对照、单星星性与组合格局。"
      />

      <section className="category-intro">
        <span className="site-number-badge">辅</span>
        <p>
          辅星不是主轴，但会改变星曜的助力、阻力、贵人、才华、煞气与流动性。先看成组差异，再回到宫位与三方四正。
        </p>
      </section>

      <NoteGrid notes={minorStarItems} />
    </SiteLayout>
  );
}
