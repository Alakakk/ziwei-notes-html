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

export const tianjiNote: StarNote = {
  slug: "tianji",
  title: "天机星",
  brand: "紫斗笔记",
  category: "十四主星",
  pageLabel: "第 02 页｜天机星",
  displayTitle: "天机星",
  topic: "对主星｜思考与机变",
  basicTags: [
    { label: "五行主性", value: "乙木" },
    { label: "五行兼性", value: "无" },
    { label: "阴阳", value: "阴" },
    { label: "星系", value: "南斗星" },
    { label: "化气", value: "善" },
    { label: "主", value: "思虑、机变、策略、学习" },
  ],
  naturePoints: [
    "机敏、善思",
    "好学、应变快",
    "策划力强、重逻辑",
    "变化多",
    "行动偏灵巧而非强攻",
  ],
  stateCompare: {
    good: ["聪明灵活", "善观察", "会统筹", "应变强", "学习快", "能因势调整"],
    weak: ["多思多虑", "反复犹豫", "主意多但不定", "易焦虑", "漂浮不稳", "劳心劳神"],
  },
  palaceHints: [
    { palace: "命宫", hint: "聪明机敏，思虑多，变化感较重" },
    { palace: "兄弟", hint: "同辈聪明机巧，互动多变" },
    { palace: "夫妻", hint: "关系重交流，也易多变反复" },
    { palace: "子女", hint: "子女灵巧好学，思维活" },
    { palace: "财帛", hint: "靠脑力、技术、策划得财" },
    { palace: "疾厄", hint: "劳心、神经紧张与失眠" },
    { palace: "迁移", hint: "在外机会多，适应变化" },
    { palace: "交友", hint: "朋友多聪明型，流动性强" },
    { palace: "官禄", hint: "适合策划、技术、教育、研究" },
    { palace: "田宅", hint: "居住与置产想法多变" },
    { palace: "福德", hint: "精神活动强，喜思考" },
    { palace: "父母", hint: "长辈聪明能干，关系有想法差异" },
  ],
  quote: "天机 = 思考 / 变化 / 机巧 / 策略",
  footerSource: "内容据《紫微斗数精成》整理。",
  disclaimer: "研究笔记，仅作术数学学习与民俗文化分享，不作现实决策依据。",
  meta: "A5 template / stars / 02",
};

export const starNotesBySlug = {
  ziwei: ziweiNote,
  tianji: tianjiNote,
};
