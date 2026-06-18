import { SectionCard } from "../components/site/SectionCard";
import { SiteLayout } from "../components/site/SiteLayout";

const indexSections = [
  {
    number: "01",
    title: "十四主星",
    href: "/stars",
    description: "以主星为入口，整理星性、状态、落宫提示和使用边界。",
  },
  {
    number: "02",
    title: "十二宫",
    href: "/palaces",
    description: "整理命、兄、夫、子、财等宫位的观察层次。",
  },
  {
    number: "03",
    title: "五行基础",
    href: "/wuxing",
    description: "阴阳、五行、天干地支与基础术语的学习索引。",
  },
  {
    number: "04",
    title: "四化系统",
    href: "/sihua",
    description: "化禄、化权、化科、化忌的结构与判断提示。",
  },
  {
    number: "05",
    title: "辅星杂曜",
    href: "/minor-stars",
    description: "辅星、杂曜、组合关系与资料整理入口。",
  },
  {
    number: "06",
    title: "门派人物",
    href: "/schools",
    description: "门派脉络、人物资料与参考书目的线索记录。",
  },
  {
    number: "07",
    title: "案例分析",
    href: "/cases",
    description: "案例拆解、判断过程与复盘笔记的归档区。",
  },
];

const latestNotes = [
  {
    label: "第 01 页｜紫微星",
    meta: "十四主星｜已完成",
    href: "/stars/ziwei",
  },
  {
    label: "A5 笔记母版",
    meta: "导出结构｜已预留",
    href: "/notes",
  },
  {
    label: "视频分镜实验",
    meta: "HyperFrames｜占位",
    href: "/video-lab",
  },
];

export function HomePage() {
  return (
    <SiteLayout activePath="/">
      <section className="home-hero">
        <span className="home-eyebrow">紫斗笔记</span>
        <h2>把术数学习整理成可复用的笔记系统</h2>
        <p>
          主星、宫位、五行、四化、门派与案例，逐步整理为可阅读、可打印、可视频化的知识资产。
        </p>
        <div className="home-actions">
          <a className="paper-button primary" href="/notes">
            进入一页笔记
          </a>
          <a className="paper-button" href="/learning-path">
            查看学习路径
          </a>
        </div>
      </section>

      <section className="home-section" aria-labelledby="index-title">
        <div className="home-section-heading">
          <span className="site-number-badge">目</span>
          <h2 id="index-title">资料索引</h2>
        </div>
        <div className="home-index-grid">
          {indexSections.map((section) => (
            <SectionCard key={section.number} {...section} />
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="latest-title">
        <div className="home-section-heading">
          <span className="site-number-badge">新</span>
          <h2 id="latest-title">最近更新</h2>
        </div>
        <div className="latest-notes">
          {latestNotes.map((note) => (
            <a className="latest-note" href={note.href} key={note.label}>
              <span>{note.label}</span>
              <small>{note.meta}</small>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
