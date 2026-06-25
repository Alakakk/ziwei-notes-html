import { MinorStarNotePage } from "../components/MinorStarNotePage";
import { ReaderShell } from "../components/site/ReaderShell";
import { ReaderToolbar } from "../components/site/ReaderToolbar";
import { SiteLayout } from "../components/site/SiteLayout";
import type { MinorStarNote } from "../data/minorStars";

type MinorStarReaderPageProps = {
  note: MinorStarNote;
  pageNumber: string;
};

export function MinorStarReaderPage({
  note,
  pageNumber,
}: MinorStarReaderPageProps) {
  return (
    <SiteLayout activePath="/minor-stars" variant="reader">
      <ReaderToolbar
        backHref="/minor-stars"
        backLabel="← 返回辅星杂曜"
        category="辅星杂曜"
        title={note.title}
      />
      <ReaderShell
        left={
          <>
            <div className="reader-panel-heading">
              <span className="site-number-badge">辅</span>
              <h2>笔记信息</h2>
            </div>
            <dl className="reader-meta">
              <div>
                <dt>栏目</dt>
                <dd>辅星杂曜</dd>
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
              <a href="#overview">01 总论</a>
              <a href="#comparison">02 差异对照</a>
              <a href="#first-star">03 {note.firstName}星性</a>
              <a href="#second-star">04 {note.secondName}星性</a>
              <a href="#combinations">05 组合格局</a>
            </div>
          </>
        }
        note={<MinorStarNotePage note={note} />}
        right={
          <>
            <div className="reader-panel-heading">
              <span className="site-number-badge">关</span>
              <h2>相关笔记</h2>
            </div>
            <div className="related-notes">
              <a href="/minor-stars/zuofu-youbi">左辅右弼｜六吉助星</a>
              <a href="/minor-stars/wenchang-wenqu">文昌文曲｜文教才华</a>
              <a href="/minor-stars/qingyang-tuoluo">擎羊陀罗｜煞曜阻力</a>
              <a href="/minor-stars">辅星杂曜｜返回目录</a>
            </div>
            <p className="reader-panel-note">
              后续这里会放辅星组合、主星会照和宫位落点索引。
            </p>
          </>
        }
      />
    </SiteLayout>
  );
}
