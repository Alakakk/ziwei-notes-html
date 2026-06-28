# ziwei-notes-html

这是一个用于“紫微斗数 / 术数学习笔记”的 HTML 页面系统。它不是普通博客，而是一个可编程的一页笔记母版，后续可用于静态网站展示、图片导出和视频分镜生产。

当前项目包含“紫斗笔记”网站外壳、十四主星页面、十二宫页面、十四辅星页面，以及可导出的 A5 一页笔记母版。

## 项目用途

- 作为可复用的 A5 竖版笔记页面模板。
- 作为可持续维护的静态知识库和学习笔记索引。
- 可部署到 GitHub Pages 或 Cloudflare Pages 等静态托管平台。
- 可通过页面内导出按钮或 Playwright 脚本导出 PNG / PDF。
- 可通过 `data-scene` 标记接入 HyperFrames，拆分为短视频分镜。

## 安装依赖

```bash
npm install
```

## 本地预览

```bash
npm run dev
```

启动后打开终端显示的本地地址即可查看页面。

## 构建静态文件

```bash
npm run build
```

构建产物会输出到 `dist/`，可用于静态部署。

## 导出 PNG / PDF

首次使用导出功能，先安装 Playwright Chromium：

```bash
npm run export:install
```

导出脚本会截取页面中的 `.note-page`，不会包含网站导航、阅读页侧栏或工具按钮。

```bash
npm run export:png -- /stars/ziwei
npm run export:pdf -- /stars/ziwei

npm run export:png -- /palaces/minggong
npm run export:pdf -- /palaces/minggong
```

默认输出位置：

```text
exports/png/
exports/pdf/
```

如需指定文件名：

```bash
npm run export:png -- /palaces/minggong --out exports/png/minggong.png
npm run export:pdf -- /palaces/minggong --out exports/pdf/minggong.pdf
```

## GitHub Pages

当前仓库已经配置 GitHub Pages 工作流。构建时会使用：

```text
BUILD_BASE=/ziwei-notes-html/
```

部署后的站点路径为：

```text
https://alakakk.github.io/ziwei-notes-html/
```

## 导出说明

`.note-page` 是完整页面容器，尺寸由 `src/styles/tokens.css` 中的变量控制：

```css
--page-width: 794px;
--page-height: 1123px;
```

Playwright 导出时会打开带有 `?export=1` 的页面，只渲染 A5 笔记本体，并给 `.note-page` 添加 `.export-mode`。

## HyperFrames 预留

页面主要模块已添加 `data-scene`，后续可以基于这些标记拆分为视频分镜。

## 后续扩展方向

- 完善更多十四主星页面。
- 完善十二宫页面。
- 增加五行 / 四化页面。
- 接入 HyperFrames 视频生产。
- 抽象更多主题 tokens，用于不同系列笔记。

## 项目边界

- 不添加数据库。
- 不接登录系统。
- 不把项目做成普通博客。
- 不引入来路不明的字体文件。
- 不把敏感资料放入 `public/`。
