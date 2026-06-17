import type { StarNote } from "../data/stars";
import { FooterNote } from "./FooterNote";
import { NoteTable } from "./NoteTable";
import { NumberedSection } from "./NumberedSection";
import { TitleBand } from "./TitleBand";
import { TopBar } from "./TopBar";

type NotePageProps = {
  note: StarNote;
  exportMode?: boolean;
};

function HoleSafeArea() {
  return <aside className="hole-safe-area" aria-label="装订安全区" />;
}

function StateCompare({ note }: { note: StarNote }) {
  return (
    <div className="state-compare">
      <div>
        <h3>顺用</h3>
        <ul className="note-list compact-list">
          {note.stateCompare.good.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>失衡</h3>
        <ul className="note-list compact-list">
          {note.stateCompare.weak.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SceneMarkers() {
  return (
    <div className="scene-markers" aria-hidden="true">
      <span>intro</span>
      <span>basic-tags</span>
      <span>star-nature</span>
      <span>state-hints</span>
      <span>palace-hints</span>
      <span>closing-quote</span>
    </div>
  );
}

export function NotePage({ note, exportMode = false }: NotePageProps) {
  return (
    <main className="note-stage">
      <article className={`note-page ${exportMode ? "export-mode" : ""}`}>
        <HoleSafeArea />
        <div className="note-content">
          <TopBar
            brand={note.brand}
            category={note.category}
            pageLabel={note.pageLabel}
          />
          <TitleBand title={note.displayTitle} topic={note.topic} />
          <div className="lesson-sections" aria-label="紫微星笔记内容">
            <NumberedSection number="01" title="基础标签" scene="basic-tags">
              <NoteTable rows={note.basicTags} />
            </NumberedSection>

            <NumberedSection number="02" title="星性理解" scene="star-nature">
              <ul className="note-list">
                {note.naturePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </NumberedSection>

            <div className="section-pair">
              <NumberedSection number="03" title="状态提示" scene="state-hints">
                <StateCompare note={note} />
              </NumberedSection>

              <NumberedSection number="04" title="落宫提示" scene="palace-hints">
                <ul className="note-list palace-list">
                  {note.palaceHints.map((item) => (
                    <li key={item.palace}>
                      <strong>{item.palace}：</strong>
                      {item.hint}
                    </li>
                  ))}
                </ul>
              </NumberedSection>
            </div>

            <NumberedSection number="05" title="速记与判断" scene="closing-quote">
              <p className="memory-line">{note.quote}</p>
            </NumberedSection>
          </div>
          <FooterNote
            source={note.footerSource}
            disclaimer={note.disclaimer}
          />
        </div>
        <SceneMarkers />
      </article>
    </main>
  );
}
