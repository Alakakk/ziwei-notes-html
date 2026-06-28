import { NotePage } from "../components/NotePage";
import { ReaderShell } from "../components/site/ReaderShell";
import { ReaderToolbar } from "../components/site/ReaderToolbar";
import { SiteLayout } from "../components/site/SiteLayout";
import type { StarNote } from "../data/stars";
import { routeHref } from "../utils/routes";

type StarReaderPageProps = {
  note: StarNote;
  pageNumber: string;
};

export function StarReaderPage({ note, pageNumber }: StarReaderPageProps) {
  return (
    <SiteLayout activePath="/stars" variant="reader">
      <ReaderToolbar
        backHref="/stars"
        category="十四主星"
        title={note.title}
      />
      <ReaderShell
        left={
          <>
            <div className="reader-panel-heading">
              <span className="site-number-badge">信</span>
              <h2>笔记信息</h2>
            </div>
            <dl className="reader-meta">
              <div>
                <dt>栏目</dt>
                <dd>十四主星</dd>
              </div>
              <div>
                <dt>页码</dt>
                <dd>{pageNumber}</dd>
              </div>
              <div>
                <dt>状态</dt>
                <dd>已完成</dd>
              </div>
            </dl>
            <div className="reader-toc">
              <h3>目录</h3>
              <a href="#basic-tags">01 基础档案</a>
              <a href="#star-nature">02 星性核心</a>
              <a href="#state-hints">03 状态分化</a>
              <a href="#palace-hints">04 十二宫落点</a>
              <a href="#closing-quote">05 速记边界</a>
            </div>
          </>
        }
        note={<NotePage note={note} />}
        right={
          <>
            <div className="reader-panel-heading">
              <span className="site-number-badge">关</span>
              <h2>相关笔记</h2>
            </div>
            <div className="related-notes">
              <a href={routeHref("/stars/ziwei")}>紫微星｜已完成</a>
              <a href={routeHref("/stars/tianji")}>天机星｜已完成</a>
              <a href={routeHref("/stars")}>十四主星｜返回目录</a>
            </div>
            <p className="reader-panel-note">
              后续这里会放同组主星、组合提示和导出记录。
            </p>
          </>
        }
      />
    </SiteLayout>
  );
}
