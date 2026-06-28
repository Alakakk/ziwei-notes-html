import { SiteLayout } from "../components/site/SiteLayout";

const previewSections = [
  {
    number: "01",
    title: "站点状态栏",
    body: "顶部继承讲义页眉的横向秩序，用于说明资料馆身份、整理方向与系统状态。",
  },
  {
    number: "02",
    title: "导航结构",
    body: "一级栏目已经预留，后续会逐步接入首页、索引页与 A5 笔记阅读页。",
  },
  {
    number: "03",
    title: "视觉原则",
    body: "紫灰、纸白、细线框、编号模块，不做博客卡片、营销首屏或 dashboard。",
  },
];

export function SiteShellPreview() {
  return (
    <SiteLayout activePath="/">
      <section className="site-preview-band">
        <div>
          <span className="site-preview-label">Step 1 Preview</span>
          <h2>全站 UI 外壳</h2>
        </div>
        <p>先确认站点级页眉、导航、纸面容器和编号模块的方向。</p>
      </section>

      <section className="site-preview-grid" aria-label="站点外壳确认项">
        {previewSections.map((item) => (
          <article className="site-section-card" key={item.number}>
            <div className="site-section-heading">
              <span className="site-number-badge">{item.number}</span>
              <h3>{item.title}</h3>
            </div>
            <p>{item.body}</p>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
