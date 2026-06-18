import { NotePage } from "../components/NotePage";
import { ReaderShell } from "../components/site/ReaderShell";
import { ReaderToolbar } from "../components/site/ReaderToolbar";
import { SiteLayout } from "../components/site/SiteLayout";
import { ziweiNote } from "../data/stars";

export function ZiweiReaderPage() {
  return (
    <SiteLayout activePath="/stars">
      <ReaderToolbar
        backHref="/stars"
        category="十四主星"
        title={ziweiNote.title}
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
                <dd>第 01 页</dd>
              </div>
              <div>
                <dt>状态</dt>
                <dd>已完成</dd>
              </div>
            </dl>
            <div className="reader-toc">
              <h3>目录</h3>
              <a href="#basic-tags">01 基础标签</a>
              <a href="#star-nature">02 星性理解</a>
              <a href="#state-hints">03 状态提示</a>
              <a href="#palace-hints">04 落宫提示</a>
              <a href="#closing-quote">05 速记判断</a>
            </div>
          </>
        }
        note={<NotePage note={ziweiNote} />}
        right={
          <>
            <div className="reader-panel-heading">
              <span className="site-number-badge">关</span>
              <h2>相关笔记</h2>
            </div>
            <div className="related-notes">
              <a href="/stars">天府星｜待整理</a>
              <a href="/stars">天相星｜待整理</a>
              <a href="/stars">北斗主星｜专题占位</a>
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
