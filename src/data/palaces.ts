export type PalaceFocus = {
  label: string;
  detail: string;
};

export type PalacePair = {
  title: string;
  relation: string;
  detail: string;
};

export type PalaceMistake = {
  title: string;
  detail: string;
};

export type PalaceNote = {
  slug: string;
  title: string;
  brand: string;
  category: string;
  pageLabel: string;
  displayTitle: string;
  topic: string;
  meaning: string[];
  focus: PalaceFocus[];
  pairSectionTitle?: string;
  pairSectionLead?: string;
  pairings: PalacePair[];
  reminders: string[];
  mistakeSectionTitle?: string;
  mistakes: PalaceMistake[];
  noteTitle?: string;
  note: string;
  quote: string;
  disclaimer: string;
  meta: string;
};

const disclaimer = "研究笔记，仅作术数学学习与民俗文化分享，不作现实决策依据。";

function palaceNote(note: Omit<PalaceNote, "brand" | "category" | "disclaimer">): PalaceNote {
  return {
    brand: "紫斗笔记",
    category: note.title === "来因宫" ? "基础篇・四化补充" : "基础篇・十二宫",
    disclaimer,
    ...note,
  };
}

export const minggongNote = palaceNote({
  slug: "minggong",
  title: "命宫",
  pageLabel: "第 01 页｜命宫",
  displayTitle: "命宫",
  topic: "一身之主",
  meaning: [
    "命宫，是十二宫中最重要的宫位。",
    "它是整张命盘的核心，也是一切判断的基准。",
    "看命宫，不是先问命好不好，而是先看这个人本身。",
    "性格如何，气质如何，有什么才能，如何思考，一生大致往哪里发展。",
    "十二宫由命宫展开。先定其人，再质财、官、情，才不至于断成孤立事件。",
  ],
  focus: [
    { label: "看性格", detail: "个性、气质、思想意识。" },
    { label: "看容貌", detail: "容貌、神态、外在气质。" },
    { label: "看才能", detail: "禀赋、能力、处事方式。" },
    { label: "看趋向", detail: "发展方向、人生层次。" },
  ],
  pairSectionTitle: "不能只看命宫",
  pairSectionLead: "命宫为主，三方四正为辅。",
  pairings: [
    { title: "迁移宫", relation: "对宫", detail: "外部环境、对外表现、出外发展。" },
    { title: "官禄宫", relation: "三方", detail: "事业、工作方式、社会定位。" },
    { title: "财帛宫", relation: "三方", detail: "钱财、资源、现实承接能力。" },
  ],
  reminders: [
    "命宫看“我是什么样的人”。",
    "三方四正看“这个人如何把自己活出来”。",
  ],
  mistakes: [
    {
      title: "误区一：只看命宫主星就下结论",
      detail: "同一颗主星，遇到不同辅曜、煞忌、四化，表现会差很多。",
    },
    {
      title: "误区二：把命宫当成性格测试",
      detail: "命宫不只看性格，也看容貌、才能、意识、发展趋向与格局层次。",
    },
    {
      title: "误区三：跳过命宫直接看财官感情",
      detail: "财帛、官禄、夫妻都不是孤立事件。看不清这个人本身，后面越断越偏。",
    },
  ],
  noteTitle: "小注",
  note: "本页所述，为以命宫为太极点时的十二宫本义。",
  quote: "命宫不是一句性格标签，而是读懂自己的起点。",
  meta: "A5 template / palaces / 01",
});

export const palaceNotes: PalaceNote[] = [
  minggongNote,
  palaceNote({
    slug: "shengong",
    title: "身宫",
    pageLabel: "第 02 页｜身宫",
    displayTitle: "身宫",
    topic: "后天所寄",
    meaning: [
      "身宫，是辅助命宫判断的宫位。",
      "它不等于命宫，也不能替代命宫。",
      "命宫看“我是谁”，身宫看后来会把重心安放在哪里。",
      "身宫没有独立宫位，落在哪一宫，那一宫的人事就更容易成为后天重视、投入或受牵动的地方。",
    ],
    focus: [
      { label: "看寄宫", detail: "身宫落在哪一宫。" },
      { label: "看环境", detail: "命主实际所处的处境与外部环境。" },
      { label: "看方式", detail: "如何面对外界、回应外界。" },
      { label: "看后天", detail: "后天发展重心与中晚年趋势。" },
    ],
    pairSectionTitle: "安身宫小法",
    pairSectionLead: "身宫排法，以命宫同从出生月起算。",
    pairings: [
      { title: "第一步", relation: "起正月", detail: "从寅宫起正月，顺数到出生月份。" },
      { title: "第二步", relation: "起子时", detail: "在出生月所在宫位起子时。" },
      { title: "第三步", relation: "顺数时辰", detail: "顺数到出生时辰，所在宫位就是身宫。" },
    ],
    reminders: [
      "安命：生月起子时，逆数至生时。",
      "安身：生月起子时，顺数至生时。",
    ],
    mistakeSectionTitle: "身宫常见寄宫",
    mistakes: [
      { title: "身命同宫", detail: "先后天重叠，自我意识较强，一生多靠自己推进。" },
      { title: "身在福德宫", detail: "重精神德爱、享受与内在安顿，看安逸、兴趣、满足感。" },
      { title: "身在官禄宫 / 迁移宫", detail: "重事业责任、社会位置，或重外部发展与变化。" },
      { title: "身在财帛宫 / 夫妻宫", detail: "重现实经营、钱财安全感，或在亲密关系中投入较多。" },
    ],
    noteTitle: "小注",
    note: "本页所述，为以命宫为太极点时，身宫作为辅助判断的基本含义。",
    quote: "身宫不是另一个命宫，而是后天把自己安放在哪里。",
    meta: "A5 template / palaces / 02",
  }),
  palaceNote({
    slug: "fumugong",
    title: "父母宫",
    pageLabel: "第 03 页｜父母宫",
    displayTitle: "父母宫",
    topic: "来处与文书",
    meaning: [
      "父母宫，首先看父母、父母缘分与家庭背景。",
      "也看长辈、师长、上司、老板与靠山，尤其来自“上面的人”的帮助、管束或压力。",
      "父母宫又为文书宫，可看学历、证件、法规、契约、合同、官司等事。",
      "看相貌与遗传时，也要参看父母宫；但相貌仍以命宫为主，父母宫为辅。",
    ],
    focus: [
      { label: "看父母", detail: "父母缘分、背景与照拂。" },
      { label: "看靠山", detail: "长辈、师长、上司助力。" },
      { label: "看文书", detail: "学历、证件、契约、法规。" },
      { label: "看遗传", detail: "相貌、头脑、思维影响。" },
    ],
    pairSectionTitle: "不能只看父母宫",
    pairSectionLead: "父母宫要回到命宫与相关宫位合看。",
    pairings: [
      { title: "命宫", relation: "本人", detail: "命主自身状态与承接方式。" },
      { title: "官禄宫", relation: "上司老板", detail: "工作中的上级、制度与管理关系。" },
      { title: "疾厄宫", relation: "文疾线", detail: "文书、证件、法规与手续压力。" },
      { title: "太阳太阴", relation: "父母象", detail: "判断父母状态时需参看。" },
    ],
    reminders: ["父母宫是来处与秩序之宫，既看亲缘，也看制度与规则的影响。"],
    mistakeSectionTitle: "常见误区",
    mistakes: [
      { title: "误区一：把父母宫只当爸妈宫", detail: "它也看长辈、师长、上司、靠山与社会背景。" },
      { title: "误区二：看到煞忌就断亲缘差", detail: "也可能表现为文书、合同、法规、名声上的压力。" },
      { title: "误区三：忽略父母宫的文书意义", detail: "学历、证件、契约、官司、制度关系，都可回来看这里。" },
    ],
    noteTitle: "小注",
    note: "细论父母状况，还需参看太阳、太阴、命宫、官禄宫、疾厄宫及四化影响。",
    quote: "父母宫看父母，也看那些曾经托住你、管住你的人和规则。",
    meta: "A5 template / palaces / 03",
  }),
  palaceNote({
    slug: "fudegong",
    title: "福德宫",
    pageLabel: "第 04 页｜福德宫",
    displayTitle: "福德宫",
    topic: "精神与享受",
    meaning: [
      "福德宫，为思想精神宫。",
      "它看一个人的福分、享受、修养、内心世界与精神状态。",
      "也看兴趣爱好、饮食娱乐、生活享受，以及消费方式、钱财去向与财源。",
      "福德宫不是一句“有福没福”，更像在看内心能不能安顿，生活能不能享受，钱从哪里来又流向哪里去。",
    ],
    focus: [
      { label: "看精神", detail: "内心世界、心态与精神状态。" },
      { label: "看享受", detail: "饮食、娱乐、生活满足感。" },
      { label: "看修养", detail: "思想品德、兴趣爱好与思维活动。" },
      { label: "看财源", detail: "来财之地、消费方式与钱财去向。" },
    ],
    pairSectionTitle: "不能只看福德宫",
    pairSectionLead: "福德宫要与命宫、财帛宫合看。",
    pairings: [
      { title: "命宫", relation: "本人", detail: "本人的底色与心性承接。" },
      { title: "财帛宫", relation: "对宫", detail: "钱财基础、财源与使用方式。" },
      { title: "疾厄宫", relation: "身心", detail: "精神状态与身体消耗互相影响。" },
    ],
    reminders: [
      "财帛宫是现财、近财，福德宫是远财、财源。",
      "财帛不好，物质享受基础不足；福德不好，也会影响财源、享受与精神安顿。",
    ],
    mistakeSectionTitle: "常见误区",
    mistakes: [
      { title: "误区一：把福德宫只当享福宫", detail: "福德宫不只有享受，也看思想、心态、品德、兴趣与精神状态。" },
      { title: "误区二：福德宫好就一定人生轻松", detail: "仍要合看命宫、财帛与整体格局。" },
      { title: "误区三：忽略福德宫的财源意义", detail: "福德宫也看来财之地、消费方式、钱财去向与投资环境。" },
      { title: "误区四：拿福德宫直接断身体病", detail: "身体病症以疾厄宫为主，福德宫更偏精神状态与内在消耗。" },
    ],
    noteTitle: "小注",
    note: "本页所述，为以命宫为太极点时的十二宫本义。",
    quote: "福德宫不只看有福没福，也看一个人如何后天修养、安顿自己。",
    meta: "A5 template / palaces / 04",
  }),
  palaceNote({
    slug: "tianzhaigong",
    title: "田宅宫",
    pageLabel: "第 05 页｜田宅宫",
    displayTitle: "田宅宫",
    topic: "家宅与财库",
    meaning: [
      "田宅宫看家庭、家宅、祖业与不动产。",
      "也看居住环境、家庭是否安宁、家人相处，以及能否继承祖业、是否能置业。",
      "也涉及买房、卖房、搬迁、建房、装修等事。",
      "田宅宫也有财库之意，偏看钱财能否沉淀、收藏、聚起。",
    ],
    focus: [
      { label: "看家宅", detail: "住宅环境、家庭安宁、家人关系。" },
      { label: "看祖业", detail: "祖产、家族资源、继承情况。" },
      { label: "看不动产", detail: "买房、卖房、搬迁、装修。" },
      { label: "看财库", detail: "存钱、聚财、资产沉淀。" },
    ],
    pairSectionTitle: "不能只看田宅宫",
    pairSectionLead: "田宅宫需合看命宫、财帛与福德。",
    pairings: [
      { title: "命宫", relation: "承接", detail: "整体格局能否承接田宅。" },
      { title: "财帛宫", relation: "现金流", detail: "钱财来源、收入基础与现实现金流。" },
      { title: "福德宫", relation: "安顿", detail: "财源、享受能力与家庭安顿感。" },
      { title: "子女宫", relation: "对宫", detail: "子田线彼此牵动。" },
    ],
    reminders: [
      "田宅宫好，但命宫格局不承接，未必能大富大贵。",
      "命宫格局好，田宅宫再吉，置业、聚财、家宅稳定性会更明显。",
    ],
    mistakeSectionTitle: "常见误区",
    mistakes: [
      { title: "误区一：把田宅宫只当房子宫", detail: "它也看家庭、祖业、财库与居住环境。" },
      { title: "误区二：田宅宫好就一定有豪宅", detail: "仍要看命宫、财帛与整体格局。" },
      { title: "误区三：忽略田宅宫的财库意义", detail: "钱能不能存住、变成资产，这里很重要。" },
      { title: "误区四：买卖房产只看田宅宫", detail: "还要结合限年、四化、财帛宫与星曜组合。" },
    ],
    noteTitle: "小注",
    note: "本页所述，为以命宫为太极点时的十二宫本义。",
    quote: "田宅宫看一个人如何安家，也看资源如何沉淀成真正的底气。",
    meta: "A5 template / palaces / 05",
  }),
  palaceNote({
    slug: "guanlugong",
    title: "官禄宫",
    pageLabel: "第 06 页｜官禄宫",
    displayTitle: "官禄宫",
    topic: "事业与社会角色",
    meaning: [
      "古代以“官禄”为主，主仕官、官阶；现代多称事业宫。",
      "主要看事业得失、贵气成就、从事职业、职位、工作态度、创业能力、薪金与升迁。",
      "也可看学业考试、官非、运途等情况。",
      "具体事业不能只看官禄，要综合命宫、财帛宫、迁移宫、福德宫等。",
    ],
    focus: [
      { label: "事业层次", detail: "事业发展层次、成就大小、贵气显否。" },
      { label: "职位升迁", detail: "职位高低、升迁机会、责任承担。" },
      { label: "工作状态", detail: "工作态度、做事风格、是否长期稳定。" },
      { label: "创业能力", detail: "适合独立创业，还是适合平台发展。" },
      { label: "薪金收入", detail: "薪金高低、收入来源与稳定性。" },
      { label: "学业运途", detail: "学业考试、事业发展运程、官非等。" },
    ],
    pairSectionTitle: "不能只看官禄宫",
    pairSectionLead: "官禄宫要与命、财、迁、福合看。",
    pairings: [
      { title: "命宫", relation: "承接", detail: "命主本身能否承接事业与责任。" },
      { title: "财帛宫", relation: "收益", detail: "事业能否转化为现实收入。" },
      { title: "迁移宫", relation: "外部", detail: "外部环境、发展空间与机会。" },
      { title: "福德宫", relation: "心态", detail: "精神状态、抗压能力与心态。" },
      { title: "夫妻宫", relation: "对宫", detail: "关系与事业常互相牵动。" },
    ],
    reminders: ["只有综合判断，才能更准确看出事业发展路径与成就层次。"],
    mistakeSectionTitle: "常见误区",
    mistakes: [
      { title: "误区一：把官禄宫当成职业测试", detail: "只看主星就下结论，过于片面。" },
      { title: "误区二：只看职位高低", detail: "忽略工作内容、成长与成就感。" },
      { title: "误区三：只看眼前工作", detail: "没看到长期发展、运程起伏与转折。" },
      { title: "误区四：忽略其他宫位", detail: "脱离命宫、财帛、迁移、福德等，容易判断失准。" },
    ],
    noteTitle: "小注",
    note: "本页所述，为以命宫为太极点时的十二宫本义。",
    quote: "官禄宫看一个人如何做事，如何承担，如何在社会里站住，如何成事。",
    meta: "A5 template / palaces / 06",
  }),
  palaceNote({
    slug: "jiaoyougong",
    title: "交友宫",
    pageLabel: "第 07 页｜交友宫",
    displayTitle: "交友宫",
    topic: "外部人际与助力",
    meaning: [
      "交友宫，古称奴仆宫。",
      "主要看家庭以外的一般朋友、同事、下属、员工、合作对象等外部人际。",
      "也看是否得助、是否受拖累，以及合伙关系、人缘与人事损耗。",
      "它不只看朋友多少，也看朋友质量、部属是否得力、小人与口舌。",
    ],
    focus: [
      { label: "看朋友", detail: "一般朋友、人缘厚薄、交往质量。" },
      { label: "看部属", detail: "下属、员工、服务于我者是否得力。" },
      { label: "看合作", detail: "合伙关系、合作对象、能否互相支持。" },
      { label: "看人灾", detail: "小人、口舌、欺骗、人际损害。" },
    ],
    pairSectionTitle: "不能只看交友宫",
    pairSectionLead: "交友宫需合看命、兄、官等宫位。",
    pairings: [
      { title: "命宫", relation: "待人", detail: "看自身性格与待人方式。" },
      { title: "兄弟宫", relation: "同辈", detail: "看手足、知己与亲近同辈关系。" },
      { title: "官禄宫", relation: "职场", detail: "看职场环境与共事情况。" },
    ],
    reminders: ["交友宫好，人脉能成助力；交友宫有压，人事也可能变成损耗。"],
    mistakeSectionTitle: "常见误区",
    mistakes: [
      { title: "误区一：把交友宫只当朋友宫", detail: "也看下属、员工、合作对象与服务于我者。" },
      { title: "误区二：朋友多就等于交友宫好", detail: "数量不等于质量，关键看是否得助还是受拖累。" },
      { title: "误区三：只看朋友，不看人事损耗", detail: "受骗、口舌、合伙破财也要看这里。" },
      { title: "误区四：把同事关系全塞进交友宫", detail: "职场人际还要合看官禄宫。" },
    ],
    noteTitle: "小注",
    note: "本页所述，为以命宫为太极点时的十二宫本义。",
    quote: "交友宫不只看朋友，也看哪些人会成为助力，哪些人会变成阻力。",
    meta: "A5 template / palaces / 07",
  }),
  palaceNote({
    slug: "qianyigong",
    title: "迁移宫",
    pageLabel: "第 08 页｜迁移宫",
    displayTitle: "迁移宫",
    topic: "外出与发展空间",
    meaning: [
      "迁移宫，看一个人离开出生地后的发展与际遇。",
      "主要看外出、远行、变动、旅游、升迁调动、出差、移民、留学、迁居等情况。",
      "也看在外地的环境、人际、贵人或小人，以及能否适应新环境。",
      "迁移宫还可反映事业外部环境、发展空间与机遇。",
    ],
    focus: [
      { label: "外出远行", detail: "出差、旅游、远行、迁居、留学、移民等。" },
      { label: "发展空间", detail: "在外地的发展机会、事业拓展空间。" },
      { label: "在外人际", detail: "在外的人缘、贵人、小人、助力或阻力。" },
      { label: "环境适应", detail: "能否适应陌生环境，环境是否有利。" },
      { label: "升迁机遇", detail: "因外出、调动、变动而带来的机会。" },
      { label: "是非风险", detail: "在外易遇的风险、口舌、意外与麻烦。" },
    ],
    pairSectionTitle: "不能只看迁移宫",
    pairSectionLead: "迁移宫要与命宫、官禄、财帛、福德合看。",
    pairings: [
      { title: "命宫", relation: "适应", detail: "本人能否适应与承受外部环境。" },
      { title: "官禄宫", relation: "事业", detail: "事业发展与外部环境的配合。" },
      { title: "财帛宫", relation: "收益", detail: "外出发展能否带来实际收益。" },
      { title: "福德宫", relation: "心态", detail: "精神状态是否能支撑长期变动。" },
    ],
    reminders: [
      "迁移宫好，不一定代表一定离乡发展。",
      "迁移宫有压力，也不一定出门就不好，关键在环境与本人如何配合。",
    ],
    mistakeSectionTitle: "常见误区",
    mistakes: [
      { title: "误区一：只看有没有出远门", detail: "迁移宫不只看距离远近，也看在外发展质量。" },
      { title: "误区二：出门越多越好", detail: "频繁变动不等于发展好，要看是否有收获。" },
      { title: "误区三：把迁移宫当旅行宫", detail: "旅游只是其中一小部分，不等于全部含义。" },
      { title: "误区四：忽略在外人际与是非", detail: "在外能否得助、能否避开小人，很关键。" },
    ],
    noteTitle: "小注",
    note: "本页所述，为以命宫为太极点时的十二宫本义。",
    quote: "迁移宫看一个人走出熟悉环境后的发展、际遇与人际，也看你能走多远、能站多稳。",
    meta: "A5 template / palaces / 08",
  }),
  palaceNote({
    slug: "jiegong",
    title: "疾厄宫",
    pageLabel: "第 09 页｜疾厄宫",
    displayTitle: "疾厄宫",
    topic: "身体与本我",
    meaning: [
      "疾厄宫看先天体质、身体强弱与健康状态。",
      "也看疾病隐患、薄弱部位、慢性问题与灾厄风险。",
      "可看受伤、手术、意外、长期消耗等身体层面的压力。",
      "疾厄宫不只是看病，也看一个人卸下外在角色后，更本能、更私下的状态。",
    ],
    focus: [
      { label: "看体质", detail: "先天体质、身体强弱、薄弱部位。" },
      { label: "看隐患", detail: "疾病倾向、慢性问题、反复之处。" },
      { label: "看灾厄", detail: "受伤、手术、意外与风险。" },
      { label: "看本我", detail: "私下状态、本能反应、长期消耗。" },
    ],
    pairSectionTitle: "不能只看疾厄宫",
    pairSectionLead: "疾厄宫需结合命宫、福德与整体格局。",
    pairings: [
      { title: "命宫", relation: "承受", detail: "本人底色与整体承受力。" },
      { title: "福德宫", relation: "精神", detail: "精神状态、内在消耗与享受能力。" },
      { title: "父母宫", relation: "文疾线", detail: "对宫、遗传、文书线、早年影响与身体牵动。" },
      { title: "迁移宫", relation: "外部", detail: "外出环境、意外风险与外部影响。" },
    ],
    reminders: [
      "疾厄宫好，不代表一生无病。",
      "疾厄宫有压力，也不等于一定生病，要结合限年与整体格局看。",
    ],
    mistakeSectionTitle: "常见误区",
    mistakes: [
      { title: "误区一：把疾厄宫只当生病宫", detail: "也看体质、隐患、灾厄、本能反应与长期消耗。" },
      { title: "误区二：看到煞忌就直接断大病", detail: "轻重仍要看命宫、福德、限运和整体格局。" },
      { title: "误区三：忽略生活习惯与压力反应", detail: "作息、情绪、劳累、内耗，也会在疾厄宫里反映。" },
      { title: "误区四：直接当医学诊断", detail: "疾厄宫只能作倾向与提醒，不能替代医学判断。" },
    ],
    noteTitle: "小注",
    note: "本页所述，为以命宫为太极点时的十二宫本义。",
    quote: "疾厄宫不是吓自己，而是看见身体里那个最诚实的我。",
    meta: "A5 template / palaces / 09",
  }),
  palaceNote({
    slug: "caibogong",
    title: "财帛宫",
    pageLabel: "第 10 页｜财帛宫",
    displayTitle: "财帛宫",
    topic: "钱财与资源",
    meaning: [
      "财帛宫看一个人的财运、求财方式、收入来源与经济活动。",
      "也看理财观念、用钱方式、赚钱能力与现实承接力。",
      "可看正财偏财、现金流、进财出财，以及对物质与资源的掌握。",
      "财帛宫不只看“有没有钱”，也看一个人如何得财、用财、守财。",
    ],
    focus: [
      { label: "看财源", detail: "钱从哪里来、正财偏财、进财门路。" },
      { label: "看收入", detail: "收入高低、现金流、赚钱节奏。" },
      { label: "看理财", detail: "用钱方式、守财能力、资源配置。" },
      { label: "看物欲", detail: "对金钱、物质与资源的态度。" },
    ],
    pairSectionTitle: "不能只看财帛宫",
    pairSectionLead: "财帛宫要与命宫、官禄、福德、田宅合看。",
    pairings: [
      { title: "命宫", relation: "承接", detail: "本人格局、求财心态与承接能力。" },
      { title: "官禄宫", relation: "事业", detail: "事业基础、工作方式与收入来源。" },
      { title: "福德宫", relation: "财源", detail: "财源、消费方式与享受能力。" },
      { title: "田宅宫", relation: "财库", detail: "资产沉淀与守成能力。" },
    ],
    reminders: ["财帛宫看钱怎么来、怎么用；田宅宫看钱能不能留下来。"],
    mistakeSectionTitle: "常见误区",
    mistakes: [
      { title: "误区一：把财帛宫只当有钱没钱", detail: "也看求财方式、用财习惯与资源承接。" },
      { title: "误区二：财帛宫好就一定暴富", detail: "还要看命宫、官禄与整体格局。" },
      { title: "误区三：只看赚钱，不看守财", detail: "钱来得快，不等于留得住。" },
      { title: "误区四：把财帛宫当成投资建议", detail: "它看倾向与能力，不等于具体理财指令。" },
    ],
    noteTitle: "小注",
    note: "本页所述，为以命宫为太极点时的十二宫本义。",
    quote: "财帛宫不只看你有多少钱，也看你如何赚钱、用钱，把资源变成底气。",
    meta: "A5 template / palaces / 10",
  }),
  palaceNote({
    slug: "zinvgong",
    title: "子女宫",
    pageLabel: "第 11 页｜子女宫",
    displayTitle: "子女宫",
    topic: "子女与延伸",
    meaning: [
      "子女宫看子女、子女缘分、子女状态与亲子关系。",
      "也看怀孕、生育、子息相关事项。",
      "可看学生、弟子、晚辈，以及培养他人的关系。",
      "也涉及合伙、桃花、玩乐与情欲等延伸主题。",
      "子女宫不只看孩子，也看一个人如何延伸、创造与投入关系。",
    ],
    focus: [
      { label: "看子女缘", detail: "子女缘分深浅，是否易有子女。" },
      { label: "看子女状态", detail: "子女个性、健康、发展与亲子关系。" },
      { label: "看生育", detail: "怀孕、生育、子息相关事项。" },
      { label: "看晚辈学生", detail: "学生、弟子、晚辈与培养关系。" },
      { label: "看合伙桃花", detail: "合伙、玩乐、桃花与情欲。" },
    ],
    pairSectionTitle: "不能只看子女宫",
    pairSectionLead: "子女宫要合看本宫、命宫、夫妻、田宅与福德。",
    pairings: [
      { title: "命宫", relation: "承接", detail: "本人整体生命力与承接力。" },
      { title: "夫妻宫", relation: "关系", detail: "配偶状态，影响子女缘与家庭氛围。" },
      { title: "田宅宫", relation: "家庭", detail: "家庭环境、子女成长的根基。" },
      { title: "福德宫", relation: "修养", detail: "心性、修养，也影响养育与相处方式。" },
      { title: "子女宫", relation: "本宫", detail: "看子女、晚辈、合伙与延伸主题。" },
    ],
    reminders: ["子女宫是延伸线，要回头看本宫，也要结合关系与家庭环境。"],
    mistakeSectionTitle: "常见误区",
    mistakes: [
      { title: "误区一：把子女宫只当生育宫", detail: "它也看子女状态、亲子关系、学生晚辈、合伙、桃花与玩乐。" },
      { title: "误区二：子女宫不好就断无子", detail: "子女缘有无，要合看命宫、夫妻宫、福德宫等，不宜单宫下结论。" },
      { title: "误区三：只看孩子，不看延伸成果", detail: "没有孩子的人，子女宫也看学生、作品、晚辈与培养关系。" },
      { title: "误区四：把子女宫直接写成晚年运", detail: "晚年享受应回看福德宫、田宅宫等，不宜直接归到子女宫。" },
    ],
    noteTitle: "小注",
    note: "本页所述，为以命宫为太极点时的十二宫本义。",
    quote: "子女宫不只看孩子，也看一个人如何延伸、创造与投入关系。",
    meta: "A5 template / palaces / 11",
  }),
  palaceNote({
    slug: "fuqigong",
    title: "夫妻宫",
    pageLabel: "第 12 页｜夫妻宫",
    displayTitle: "夫妻宫",
    topic: "长期稳定关系与伴侣关系",
    meaning: [
      "夫妻宫，主要看长期稳定关系与伴侣关系。",
      "看容易吸引、一起进入关系的一类人。",
      "看婚恋缘分的深浅、早晚、稳定度。",
      "看感情需求、相处模式、进入长期稳定关系后的互动状态。",
      "也可看恋爱对象、同居关系等。",
    ],
    focus: [
      { label: "看对象类型", detail: "容易被哪类人吸引，常遇到的伴侣特质。" },
      { label: "看关系缘分", detail: "缘分深浅、早晚，是否能长久稳定。" },
      { label: "看感情模式", detail: "感情需求、相处方式、亲密与沟通模式。" },
      { label: "看关系互动", detail: "进入长期稳定关系后的状态、家庭氛围与彼此支持。" },
      { label: "看变化波折", detail: "感情变化、分合、争执、第三者等情况。" },
    ],
    pairSectionTitle: "不能只看夫妻宫",
    pairSectionLead: "夫妻宫看关系与模式，需要综合命、福、田、子、官。",
    pairings: [
      { title: "命宫", relation: "本人", detail: "本人性格、价值观、择偶偏好。" },
      { title: "福德宫", relation: "情感", detail: "情感需求、内心感受与包容能力。" },
      { title: "田宅宫", relation: "家庭", detail: "家庭环境、家风氛围、居住与相处。" },
      { title: "子女宫", relation: "延伸", detail: "感情投入方式、亲密与生育议题。" },
      { title: "官禄宫", relation: "事业", detail: "事业与工作状态，影响婚姻经营。" },
    ],
    reminders: ["夫妻宫看“关系与模式”，需合参全盘综合判断，才能更准。"],
    mistakeSectionTitle: "常见误区",
    mistakes: [
      { title: "误区一：把夫妻宫当成配偶本人画像", detail: "它看的是倾向与类型，不是具体的某一个人。" },
      { title: "误区二：只看夫妻宫就判断长期关系好坏", detail: "只是关系的一面向，要合参多宫综合看。" },
      { title: "误区三：见煞曜就认定关系一定不顺", detail: "煞曜代表挑战与课题，不等于一定失败，要看整体格局与化解。" },
      { title: "误区四：忽略感情模式与沟通", detail: "再好的缘分，若相处模式不合，仍会出问题。" },
    ],
    noteTitle: "小注",
    note: "本页所述，为以命宫为太极点时的十二宫本义。",
    quote: "夫妻宫看的是你容易遇到、被吸引、进入关系的一类人，以及长期稳定关系的模式与互动。",
    meta: "A5 template / palaces / 12",
  }),
  palaceNote({
    slug: "xiongdigong",
    title: "兄弟宫",
    pageLabel: "第 13 页｜兄弟宫",
    displayTitle: "兄弟宫",
    topic: "手足与同辈关系",
    meaning: [
      "兄弟宫，主要看手足（兄弟姐妹）与同辈关系。",
      "看手足的多寡、缘分深浅、性格与状态。",
      "看与手足之间的相处模式、情义与互助程度。",
      "也可看同学、同事、朋友、同辈伙伴等关系。",
    ],
    focus: [
      { label: "看手足缘分", detail: "手足的多寡、缘分深浅、是否和睦。" },
      { label: "看手足状态", detail: "手足的性格、能力、健康、发展状况。" },
      { label: "看相处模式", detail: "相处是否融合、是否互助、是否有冲突。" },
      { label: "看同辈关系", detail: "同学、同事、朋友、同辈伙伴的关系。" },
      { label: "看变化波折", detail: "关系变化、分合、疏远或支持的情况。" },
    ],
    pairSectionTitle: "不能只看兄弟宫",
    pairSectionLead: "兄弟宫看手足与同辈缘分，需合盘综合判断。",
    pairings: [
      { title: "命宫", relation: "本人", detail: "本人性格，会影响与同辈的相处。" },
      { title: "福德宫", relation: "包容", detail: "情感需求、包容度与相处心态。" },
      { title: "田宅宫", relation: "家庭", detail: "家庭环境、家风氛围影响手足关系。" },
      { title: "交友宫", relation: "同辈", detail: "朋友圈层，也影响同辈助力。" },
      { title: "迁移宫", relation: "环境", detail: "外出、环境变化对关系的影响。" },
    ],
    reminders: ["兄弟宫看“手足与同辈缘分”，需合盘综合判断，才能更准。"],
    mistakeSectionTitle: "常见误区",
    mistakes: [
      { title: "误区一：只有兄弟宫就判断手足缘分", detail: "需要结合命宫、田宅、福德等多宫综合看。" },
      { title: "误区二：只看手足数量，不看关系质量", detail: "数量多不代表关系好，关键看缘分与互动。" },
      { title: "误区三：忽略同辈关系的影响", detail: "同学、同事、朋友等同辈关系也很重要。" },
      { title: "误区四：兄弟宫凶断手足不和", detail: "需结合全盘格局、四化与实际环境判断。" },
    ],
    noteTitle: "小注",
    note: "本页所述，以兄弟宫为核心，需结合全盘综合判断。",
    quote: "兄弟宫看的不只是血缘手足，更是你与同辈之间的缘分与互动。好的同辈关系，能成为你人生路上重要的支持与助力。",
    meta: "A5 template / palaces / 13",
  }),
  palaceNote({
    slug: "laiyingong",
    title: "来因宫",
    pageLabel: "补充页｜来因宫",
    displayTitle: "来因宫",
    topic: "四化的起点",
    meaning: [
      "来因宫，不是十二宫之外新增的一个宫位。",
      "它是用出生年天干，去对应命盘中相同宫干的位置。",
      "哪个宫位的宫干与出生年干相同，哪个宫位就是来因宫。",
      "在北派四化、飞星四化、钦天四化等体系中，常用来观察生年四化从哪个主题发出。",
      "它更像是在看：这一生，什么主题最容易先被启动。",
    ],
    focus: [
      { label: "出生年干", detail: "先取出生年的天干。" },
      { label: "找同宫干", detail: "找十二宫中与出生年干相同的宫干。" },
      { label: "定位来因", detail: "该宫位即为来因宫。" },
      { label: "举例", detail: "出生年干为甲，找宫干为甲的宫位，此宫即来因宫。" },
    ],
    pairSectionTitle: "来因宫看什么",
    pairSectionLead: "来因宫更常用于四化体系的起点观察。",
    pairings: [
      { title: "看主题", relation: "启动点", detail: "一生容易反复被哪个宫位主题牵动。" },
      { title: "看起点", relation: "四化来源", detail: "生年四化从哪里发出。" },
      { title: "看因由", relation: "事情开端", detail: "事情为什么常从这里开始。" },
      { title: "看牵引", relation: "背景音", detail: "像长期背景音，不一定天天发生，但容易反复出现。" },
    ],
    reminders: [],
    mistakeSectionTitle: "常见误区",
    mistakes: [
      { title: "误区一：把来因宫当第十三宫", detail: "它只是十二宫中的一个定位点。" },
      { title: "误区二：所有流派都必须用", detail: "它更常见于四化体系。" },
      { title: "误区三：一上来就讲前世因果", detail: "基础学习先看四化起点。" },
      { title: "误区四：只看来因宫就下结论", detail: "仍要合看生年四化、宫位、星曜、飞化与限运。" },
    ],
    noteTitle: "小注",
    note: "本页所述，为四化体系中的来因宫基础概念，不等同于十二宫本义。",
    quote: "来因宫看的是起点：这一生，什么主题最容易先被启动。",
    meta: "A5 template / palaces / extra",
  }),
];

export const allPalaceNotes = palaceNotes;

export const palaceNotesBySlug: Record<string, PalaceNote> = {
  ...Object.fromEntries(palaceNotes.map((note) => [note.slug, note])),
};
