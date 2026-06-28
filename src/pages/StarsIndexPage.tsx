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
    tags: "南斗｜乙木｜善",
    summary: "思虑、机变、策略与学习。重观察、应变和调整。",
    status: "已完成",
    href: "/stars/tianji",
  },
  {
    number: "03",
    title: "太阳星",
    tags: "中天｜丙火｜贵",
    summary: "光明、外放、名望与照耀。重表现、担当和被看见。",
    status: "已完成",
    href: "/stars/taiyang",
  },
  {
    number: "04",
    title: "武曲星",
    tags: "北斗｜辛金｜财",
    summary: "财帛、执行、决断与管理。重效率、结果和现实落地。",
    status: "已完成",
    href: "/stars/wuqu",
  },
  {
    number: "05",
    title: "天同星",
    tags: "南斗｜壬水｜福",
    summary: "福气、和气、享受与童心。重感受、亲和和舒适。",
    status: "已完成",
    href: "/stars/tiantong",
  },
  {
    number: "06",
    title: "廉贞星",
    tags: "北斗｜丁火｜囚",
    summary: "欲望、原则、名声与边界。个性鲜明，重规则也重张力。",
    status: "已完成",
    href: "/stars/lianzhen",
  },
  {
    number: "07",
    title: "天府星",
    tags: "南斗｜阳土｜令",
    summary: "资源、库藏、守成与经营。重积累、秩序和长期稳定。",
    status: "已完成",
    href: "/stars/tianfu",
  },
  {
    number: "08",
    title: "太阴星",
    tags: "中天｜癸水｜富",
    summary: "温柔、情感、积累与内在。重感受、安全感和生活品质。",
    status: "已完成",
    href: "/stars/taiyin",
  },
  {
    number: "09",
    title: "贪狼星",
    tags: "北斗｜甲木｜桃花",
    summary: "欲望、交际、才艺与人缘。重体验、人脉和资源整合。",
    status: "已完成",
    href: "/stars/tanlang",
  },
  {
    number: "10",
    title: "巨门星",
    tags: "北斗｜癸水｜暗",
    summary: "口才、辨析、怀疑与是非。重表达、分析和判断。",
    status: "已完成",
    href: "/stars/jumen",
  },
  {
    number: "11",
    title: "天相星",
    tags: "南斗｜壬水｜印",
    summary: "辅佐、协调、规则与分寸。重秩序、体面和配合。",
    status: "已完成",
    href: "/stars/tianxiang",
  },
  {
    number: "12",
    title: "天梁星",
    tags: "南斗｜戊土｜荫",
    summary: "庇护、原则、长辈与解厄。重道义、承担和保护。",
    status: "已完成",
    href: "/stars/tianliang",
  },
  {
    number: "13",
    title: "七杀星",
    tags: "南斗｜庚金｜权",
    summary: "决断、开创、竞争与执行。重行动、突破和结果。",
    status: "已完成",
    href: "/stars/qisha",
  },
  {
    number: "14",
    title: "破军星",
    tags: "北斗｜癸水｜耗",
    summary: "破旧、变动、开创与冲破。重改变、转折和新局。",
    status: "已完成",
    href: "/stars/pojun",
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
