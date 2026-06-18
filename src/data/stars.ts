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
  displayTitle: "紫微星",
  topic: "对主星｜中枢与统筹",
  basicTags: [
    { label: "五行主性", value: "己土" },
    { label: "五行兼性", value: "火" },
    { label: "阴阳", value: "阴" },
    { label: "星系", value: "北斗星系" },
    { label: "化气", value: "贵" },
    { label: "主", value: "尊贵、统摄、领导、核心" },
  ],
  naturePoints: [
    "尊贵、稳重",
    "自主、有主见",
    "重秩序与体面",
    "统筹力强",
    "喜居中掌局",
  ],
  stateCompare: {
    good: ["有格局", "能统筹", "有主心骨", "稳得住", "受人器重", "有领导感"],
    weak: ["好面子", "控制欲强", "容易端着", "自尊过高", "依赖位置", "不够灵活"],
  },
  palaceHints: [
    { palace: "命宫", hint: "主轴、统筹、自我位置" },
    { palace: "兄弟", hint: "同辈关系与协作感" },
    { palace: "夫妻", hint: "长期关系中的秩序需求" },
    { palace: "子女", hint: "教养与责任投射" },
    { palace: "财帛", hint: "资源调度与财务结构" },
    { palace: "疾厄", hint: "压力下的控制感" },
    { palace: "迁移", hint: "外部身份与被看见方式" },
    { palace: "交友", hint: "圈层关系与组织位置" },
    { palace: "官禄", hint: "事业结构与管理倾向" },
    { palace: "田宅", hint: "空间秩序与资源沉淀" },
    { palace: "福德", hint: "精神稳定与内在主位" },
    { palace: "父母", hint: "权威经验与规范感" },
  ],
  quote: "紫微 = 中心 / 统摄 / 尊贵 / 主导",
  footerSource: "内容据《紫微斗数精成》整理。",
  disclaimer: "研究笔记，仅作术数学学习与民俗文化分享，不作现实决策依据。",
  meta: "A5 template / stars / 01",
};
