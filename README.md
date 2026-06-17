# ziwei-notes-html

这是一个用于“紫微斗数 / 术数学习笔记”的 HTML 页面系统。它不是普通博客，而是一个可编程的一页笔记母版，后续可用于静态网站展示、图片导出和视频分镜生产。

当前第一阶段只包含一页：`紫微星 A5 笔记页面`。

## 项目用途

- 作为可复用的 A5 竖版笔记页面模板。
- 未来可部署到 GitHub Pages 或 Cloudflare Pages 等静态托管平台。
- 未来可通过 Playwright 截取 `.note-page` 导出 PNG / PDF。
- 未来可通过 `data-scene` 标记接入 HyperFrames，拆分为短视频分镜。

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

构建产物会输出到 `dist/`，可用于后续静态部署。

## 当前状态

这个 repo 当前是 private。需要注意：private repo 只代表源码仓库私有，并不等于未来发布出来的网站也一定是私有。若以后部署到 GitHub Pages、Cloudflare Pages 或其他静态托管服务，需要单独确认发布目标、访问权限和域名策略。

第一阶段暂不部署 GitHub Pages，也不创建任何公开发布。

## 目录说明

```text
content/
  stars/
    ziwei.md
src/
  data/
    stars.ts
  components/
    NotePage.tsx
    NoteHeader.tsx
    BasicInfoBlock.tsx
    ContentBlock.tsx
    PalaceHintBlock.tsx
    QuoteBlock.tsx
  pages/
    ZiweiPage.tsx
  styles/
    tokens.css
    note-page.css
public/
  assets/
    textures/
    images/
scripts/
  export-image.ts
  export-pdf.ts
exports/
  png/
  pdf/
```

## 导出预留

`.note-page` 是完整页面容器，尺寸由 `src/styles/tokens.css` 中的变量控制：

```css
--page-width: 559px;
--page-height: 794px;
```

后续 Playwright 可以直接定位 `.note-page` 进行截图或 PDF 输出。导出时可添加 `.export-mode` class，去除浏览器预览用阴影。

## HyperFrames 预留

页面主要模块已添加 `data-scene`：

- `intro`
- `basic-tags`
- `star-nature`
- `palace-hints`
- `closing-quote`

后续可以基于这些标记拆分为视频分镜。

## 后续扩展方向

- 完整实现 PNG / PDF 导出脚本。
- 接入 HyperFrames 视频生产。
- 增加更多十四主星页面。
- 增加十二宫页面。
- 增加五行 / 四化页面。
- 抽象更多主题 tokens，用于不同系列笔记。

## 第一阶段不包含

- 不部署 GitHub Pages。
- 不创建公开部署。
- 不添加数据库。
- 不接登录系统。
- 不加入复杂路由。
- 不一次性生成十四主星。
- 不把项目做成普通博客。
- 不引入来路不明的字体文件。
- 不把敏感资料放入 `public/`。
