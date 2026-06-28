export type NavigationItem = {
  label: string;
  href: string;
  description: string;
};

export const primaryNavigation: NavigationItem[] = [
  { label: "首页", href: "/", description: "资料馆入口" },
  { label: "学习路径", href: "/learning-path", description: "学习顺序与专题路径" },
  { label: "一页笔记", href: "/notes", description: "A5 活页笔记总览" },
  { label: "十四主星", href: "/stars", description: "主星结构与象义" },
  { label: "十二宫", href: "/palaces", description: "宫位系统整理" },
  { label: "五行基础", href: "/wuxing", description: "五行、阴阳与干支基础" },
  { label: "四化系统", href: "/sihua", description: "四化与动态判断" },
  { label: "辅星杂曜", href: "/minor-stars", description: "辅星、杂曜与组合提示" },
  { label: "门派人物", href: "/schools", description: "门派、人物与资料线索" },
  { label: "案例分析", href: "/cases", description: "案例笔记与判断记录" },
  { label: "视频实验室", href: "/video-lab", description: "分镜与短视频实验" },
  { label: "关于", href: "/about", description: "项目说明" },
];
