import { PalaceNotePage } from "../components/PalaceNotePage";
import { ReaderShell } from "../components/site/ReaderShell";
import { ReaderToolbar } from "../components/site/ReaderToolbar";
import { SiteLayout } from "../components/site/SiteLayout";
import type { PalaceNote } from "../data/palaces";

type PalaceReaderPageProps = {
  note: PalaceNote;
  pageNumber: string;
};

export function PalaceReaderPage({ note, pageNumber }: PalaceReaderPageProps) {
  return (
    <SiteLayout activePath="/palaces" variant="reader">
      <ReaderToolbar
        backHref="/palaces"
        backLabel="← 返回十二宫"
        category="十二宫"
        title={note.title}
      />
      <ReaderShell
        left={
          <>
            <div className="reader-panel-heading">
              <span className="site-number-badge">宫</span>
              <h2>笔记信息</h2>
            </div>
            <dl className="reader-meta">
              <div>
                <dt>栏目</dt>
                <dd>十二宫</dd>
              </div>
              <div>
                <dt>页码</dt>
                <dd>{pageNumber}</dd>
              </div>
              <div>
                <dt>状态</dt>
                <dd>母版完成</dd>
              </div>
            </dl>
            <div className="reader-toc">
              <h3>目录</h3>
              <a href="#meaning">01 基本含义</a>
              <a href="#focus">02 观察重点</a>
              <a href="#pairings">03 三方四正</a>
              <a href="#mistakes">04 常见误区</a>
              <a href="#note">05 小注</a>
            </div>
          </>
        }
        note={<PalaceNotePage note={note} />}
        right={
          <>
            <div className="reader-panel-heading">
              <span className="site-number-badge">关</span>
              <h2>相关笔记</h2>
            </div>
            <div className="related-notes">
              <a href="/palaces/minggong">命宫｜母版完成</a>
              <a href="/palaces">十二宫｜返回目录</a>
              <a href="/stars">十四主星｜对照星曜</a>
            </div>
            <p className="reader-panel-note">
              后续这里会放三方四正、对宫关系和同类宫位提示。
            </p>
          </>
        }
      />
    </SiteLayout>
  );
}
