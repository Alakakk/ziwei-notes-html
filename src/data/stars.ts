export type BasicTag = {
  label: string;
  value: string;
};

export type PalaceHint = {
  palace: string;
  hint: string;
};

export type StarNote = {
  slug: string;
  title: string;
  brand: string;
  category: string;
  pageLabel: string;
  displayTitle: string;
  topic: string;
  basicTags: BasicTag[];
  naturePoints: string[];
  stateCompare: {
    good: string[];
    weak: string[];
  };
  palaceHints: PalaceHint[];
  quote: string;
  footerSource: string;
  disclaimer: string;
  meta: string;
};

export const ziweiNote: StarNote = {
  slug: "ziwei",
  title: "紫微星",
  brand: "紫斗笔记",
  category: "十四主星",
  pageLabel: "第 01 页｜紫微星",
  displayTitle: "紫微｜星",
  topic: "对主星｜中枢与统筹",
  basicTags: [
    { label: "五行", value: "己土" },
    { label: "阴阳", value: "阴" },
    { label: "化气", value: "尊" },
    { label: "主象", value: "中枢、主导、秩序、统筹" },
  ],
  naturePoints: [
    "紫微不是单纯的“帝王星”",
    "更像系统里的主轴、调度中心、资源汇聚点",
    "好时能定局、统筹、安人心",
    "弱时容易空转、端着、只剩形式感",
  ],
  stateCompare: {
    good: ["定局", "统筹", "安人心"],
    weak: ["空转", "端着", "形式感"],
  },
  palaceHints: [
    { palace: "命宫", hint: "看自我主轴与统筹方式" },
    { palace: "官禄", hint: "看事业结构与组织位置" },
    { palace: "福德", hint: "看精神秩序和内在稳定" },
    { palace: "田宅", hint: "看资源沉淀与空间掌控" },
  ],
  quote: "紫微不是“最大”，而是“能不能把局面稳住”。",
  footerSource: "内容据《紫微斗数精成》整理。",
  disclaimer: "研究笔记，仅作术数学学习与民俗文化分享，不作现实决策依据。",
  meta: "A5 template / stars / 01",
};
