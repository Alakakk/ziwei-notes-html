import { NoteGrid, type NoteGridItem } from "../components/site/NoteGrid";
import { PageTitleBand } from "../components/site/PageTitleBand";
import { SiteLayout } from "../components/site/SiteLayout";

const starNotes: NoteGridItem[] = [
  {
    number: "01",
    title: "紫微星",
    tags: "北斗｜己土｜尊",
    summary: "中枢、主导、秩序与统筹。先看能不能把局面稳住。",
    status: "已完成",
    href: "/stars/ziwei",
  },
  {
    number: "02",
    title: "天机星",
    tags: "南斗｜乙木",
    summary: "机变、思考、调整与结构转换。",
    status: "待整理",
    href: "/stars",
  },
  {
    number: "03",
    title: "太阳星",
    tags: "中天｜丙火",
    summary: "光明、外放、照拂与可见度。",
    status: "待整理",
    href: "/stars",
  },
  {
    number: "04",
    title: "武曲星",
    tags: "北斗｜辛金",
    summary: "财帛、执行、纪律与资源掌控。",
    status: "待整理",
    href: "/stars",
  },
  {
    number: "05",
    title: "天同星",
    tags: "南斗｜壬水",
    summary: "安适、承接、福气与情绪缓冲。",
    status: "待整理",
    href: "/stars",
  },
  {
    number: "06",
    title: "廉贞星",
    tags: "北斗｜丁火",
    summary: "界限、欲望、规训与复杂关系。",
    status: "待整理",
    href: "/stars",
  },
];

export function StarsIndexPage() {
  return (
    <SiteLayout activePath="/stars">
      <PageTitleBand
        title="十四主星"
        topic="主星系统｜星曜象义"
        description="以主星为入口，整理星性、状态、落宫提示和使用边界。当前先保留目录骨架，逐页补齐 A5 笔记。"
      />

      <section className="category-intro">
        <span className="site-number-badge">索</span>
        <p>
          这里不是博客列表，而是一份可持续维护的资料目录。已完成的条目会进入 A5 阅读页，待整理条目先保留位置。
        </p>
      </section>

      <NoteGrid notes={starNotes} />
    </SiteLayout>
  );
}
