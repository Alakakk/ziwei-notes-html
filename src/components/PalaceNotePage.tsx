import type { PalaceNote } from "../data/palaces";
import { FooterNote } from "./FooterNote";
import { NumberedSection } from "./NumberedSection";
import { TitleBand } from "./TitleBand";
import { TopBar } from "./TopBar";

type PalaceNotePageProps = {
  note: PalaceNote;
  exportMode?: boolean;
};

function HoleSafeArea() {
  return <aside className="hole-safe-area" aria-label="装订安全区" />;
}

function PalaceSceneMarkers() {
  return (
    <div className="scene-markers" aria-hidden="true">
      <span>intro</span>
      <span>meaning</span>
      <span>focus</span>
      <span>pairings</span>
      <span>mistakes</span>
      <span>closing-quote</span>
    </div>
  );
}

export function PalaceNotePage({ note, exportMode = false }: PalaceNotePageProps) {
  return (
    <main className="note-stage">
      <article
        className={`note-page palace-note-page ${exportMode ? "export-mode" : ""}`}
      >
        <HoleSafeArea />
        <div className="note-content palace-note-content">
          <TopBar
            brand={note.brand}
            category={note.category}
            pageLabel={note.pageLabel}
          />
          <TitleBand title={note.displayTitle} topic={note.topic} />

          <div className="palace-lesson-sections" aria-label={`${note.title}笔记内容`}>
            <div className="palace-top-grid">
              <NumberedSection
                className="palace-meaning-section"
                number="01"
                title="基本含义"
                scene="meaning"
              >
                <div className="palace-prose">
                  {note.meaning.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </NumberedSection>

              <NumberedSection
                className={`palace-focus-section ${note.focus.length > 4 ? "is-dense" : ""}`}
                number="02"
                title="观察重点"
                scene="focus"
              >
                <ul className="palace-focus-list">
                  {note.focus.map((item, index) => (
                    <li key={item.label}>
                      <span className="focus-index">{index + 1}</span>
                      <div>
                        <strong>{item.label}</strong>
                        <p>{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </NumberedSection>
            </div>

            <div className="palace-bottom-grid">
              <NumberedSection
                className="palace-pairing-section"
                number="03"
                title={note.pairSectionTitle ?? `不能只看${note.title}`}
                scene="pairings"
              >
                {note.pairSectionLead ? (
                  <p className="palace-section-lead">{note.pairSectionLead}</p>
                ) : null}
                <ul className="palace-pairing-list">
                  {note.pairings.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}</strong>
                      <span>{item.relation}</span>
                      <p>{item.detail}</p>
                    </li>
                  ))}
                </ul>
                <ul className="palace-reminders">
                  {note.reminders.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </NumberedSection>

              <NumberedSection
                className="palace-mistake-section"
                number="04"
                title={note.mistakeSectionTitle ?? "常见误区"}
                scene="mistakes"
              >
                <ul className="palace-mistake-list">
                  {note.mistakes.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}</strong>
                      <p>{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </NumberedSection>
            </div>

            <NumberedSection
              className="palace-note-section"
              number="05"
              title={note.noteTitle ?? "小注"}
              scene="note"
            >
              <p>{note.note}</p>
            </NumberedSection>

            <section className="palace-quote-band" data-scene="closing-quote">
              <p>{note.quote}</p>
            </section>
          </div>

          <FooterNote disclaimer={note.disclaimer} />
        </div>
        <PalaceSceneMarkers />
      </article>
    </main>
  );
}
