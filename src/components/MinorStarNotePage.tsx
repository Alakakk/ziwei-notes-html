import type { MinorStarNote } from "../data/minorStars";
import { FooterNote } from "./FooterNote";
import { NumberedSection } from "./NumberedSection";
import { TopBar } from "./TopBar";

type MinorStarNotePageProps = {
  note: MinorStarNote;
  exportMode?: boolean;
};

function HoleSafeArea() {
  return <aside className="hole-safe-area" aria-label="装订安全区" />;
}

function MinorStarSceneMarkers() {
  return (
    <div className="scene-markers" aria-hidden="true">
      <span>intro</span>
      <span>overview</span>
      <span>comparison</span>
      <span>first-star</span>
      <span>second-star</span>
      <span>combinations</span>
    </div>
  );
}

export function MinorStarNotePage({
  note,
  exportMode = false,
}: MinorStarNotePageProps) {
  return (
    <main className="note-stage minor-star-stage">
      <article
        className={`note-page minor-star-note-page ${exportMode ? "export-mode" : ""}`}
      >
        <HoleSafeArea />
        <div className="note-content minor-star-note-content">
          <TopBar
            brand="紫斗笔记"
            category="基础篇・辅星"
            pageLabel={note.pageLabel}
          />

          <section className="minor-title-band" data-scene="intro">
            <h1>
              <span>{note.firstName}</span>
              <i>｜</i>
              <span>{note.secondName}</span>
            </h1>
            <p>{note.topic}</p>
          </section>

          <div className="minor-star-sections" aria-label={`${note.title}笔记内容`}>
            <NumberedSection
              className="minor-overview-section"
              number="01"
              title={note.overviewTitle}
              scene="overview"
            >
              <ul className="minor-bullet-list">
                {note.overview.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </NumberedSection>

            <NumberedSection
              className="minor-table-section"
              number="02"
              title={note.tableTitle}
              scene="comparison"
            >
              <table className="minor-compare-table">
                <thead>
                  <tr>
                    <th>项目</th>
                    <th>{note.firstName}</th>
                    <th>{note.secondName}</th>
                  </tr>
                </thead>
                <tbody>
                  {note.tableRows.map((row) => (
                    <tr key={row.label}>
                      <th>{row.label}</th>
                      <td>{row.first}</td>
                      <td>{row.second}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </NumberedSection>

            <div className="minor-nature-grid">
              <NumberedSection
                className="minor-nature-section"
                number="03"
                title={`${note.firstName}星性`}
                scene="first-star"
              >
                <ul className="minor-bullet-list is-compact">
                  {note.firstNature.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </NumberedSection>

              <NumberedSection
                className="minor-nature-section"
                number="04"
                title={`${note.secondName}星性`}
                scene="second-star"
              >
                <ul className="minor-bullet-list is-compact">
                  {note.secondNature.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </NumberedSection>
            </div>

            <NumberedSection
              className="minor-combo-section"
              number="05"
              title="组合与格局"
              scene="combinations"
            >
              <ul className="minor-bullet-list is-combo">
                {note.combinations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </NumberedSection>
          </div>

          <FooterNote disclaimer={note.disclaimer} />
        </div>
        <MinorStarSceneMarkers />
      </article>
    </main>
  );
}
