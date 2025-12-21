# Beluga Tempo | 鲸律 - 公司官网

一个简洁、专业的双语（中英文）公司官网静态站点，可直接部署到 GitHub Pages。

## 📁 项目结构

```
beluga-tempo-website/
├── index.html          # 首页
├── about.html          # 关于页面
├── products.html       # 产品页面
├── updates.html        # 动态/更新页面
├── contact.html        # 联系页面
├── privacy.html        # 隐私政策
├── terms.html          # 服务条款
├── css/
│   └── style.css       # 全部样式
├── js/
│   ├── config.js       # 🔧 配置文件（需要修改）
│   ├── translations.js # 翻译文件
│   └── main.js         # 主要逻辑
├── assets/             # 图片等资源（可添加）
└── README.md           # 本文件
```

## ✨ 功能特性

- ✅ 中英文双语支持，URL 参数切换（`?lang=en` / `?lang=zh`）
- ✅ 默认英文，不依赖浏览器语言设置
- ✅ 深色/浅色模式切换，支持跟随系统
- ✅ 响应式设计，适配手机端
- ✅ 纯静态，无需后端
- ✅ 兼容 GitHub Pages 子路径部署
- ✅ SEO 友好
- ✅ 配置集中管理，便于修改

## 🚀 GitHub Pages 部署步骤

### 方法一：通过 GitHub 网页界面

1. **创建 GitHub 仓库**
   - 登录 GitHub
   - 点击右上角 "+" → "New repository"
   - 仓库名称建议：`beluga-tempo-website` 或 `company-website`
   - 选择 Public（公开）
   - 点击 "Create repository"

2. **上传文件**
   - 在新建的仓库页面，点击 "uploading an existing file"
   - 将本项目所有文件拖拽上传
   - 填写 commit message，点击 "Commit changes"

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 `main`，文件夹选择 `/ (root)`
   - 点击 Save
   - 等待几分钟后，页面顶部会显示网站地址

4. **访问网站**
   - 网站地址格式：`https://<你的用户名>.github.io/<仓库名>/`
   - 例如：`https://belugatempo.github.io/company-website/`

### 方法二：通过命令行（需要 Git）

```bash
# 1. 克隆或初始化仓库
git init
git add .
git commit -m "Initial commit: Beluga Tempo website"

# 2. 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/<你的用户名>/<仓库名>.git

# 3. 推送代码
git branch -M main
git push -u origin main

# 4. 然后在 GitHub 仓库 Settings → Pages 启用 GitHub Pages
```

## 🌐 自定义域名绑定（可选）

如果你有自己的域名（如 `beluga-tempo.com`），可以绑定到 GitHub Pages：

### 步骤

1. **在仓库根目录创建 CNAME 文件**
   ```
   beluga-tempo.com
   ```
   或者在 GitHub Pages 设置页面直接填写域名

2. **配置 DNS 记录**（在你的域名服务商处）
   
   **方式 A：使用 A 记录（推荐根域名）**
   ```
   类型: A
   名称: @
   值: 185.199.108.153
   值: 185.199.109.153
   值: 185.199.110.153
   值: 185.199.111.153
   ```
   
   **方式 B：使用 CNAME 记录（推荐 www 子域名）**
   ```
   类型: CNAME
   名称: www
   值: <你的用户名>.github.io
   ```

3. **等待 DNS 生效**（通常需要几分钟到 48 小时）

4. **在 GitHub Pages 设置中勾选 "Enforce HTTPS"**

## 🔧 配置修改指南

所有需要自定义的内容都集中在 `js/config.js` 文件中。

### 需要替换的占位项清单（共 12 项）

| 序号 | 配置项 | 位置 | 说明 |
|------|--------|------|------|
| 1 | `taglineEn` / `taglineZh` | `config.company` | 公司标语，一句话使命宣言 |
| 2 | `descriptionEn` / `descriptionZh` | `config.company` | 公司简短描述 |
| 3 | `email` | `config.contact` | 联系邮箱 |
| 4 | `social.twitter` | `config.contact.social` | Twitter/X 链接 |
| 5 | `social.linkedin` | `config.contact.social` | LinkedIn 链接 |
| 6 | `social.github` | `config.contact.social` | GitHub 链接 |
| 7 | `social.producthunt` | `config.contact.social` | Product Hunt 链接 |
| 8 | `social.xiaohongshu` | `config.contact.social` | 小红书链接 |
| 9 | `newsletter.url` | `config.newsletter` | Newsletter 订阅链接（Buttondown/Substack 等） |
| 10 | `contactForm.url` | `config.contactForm` | 表单服务链接（Formspree/Tally 等） |
| 11 | `seo.defaultDescriptionEn` / `Zh` | `config.seo` | SEO 描述文字 |
| 12 | `seo.ogImage` | `config.seo` | 社交分享图片 URL |

### 其他可自定义内容

- **产品列表**：修改 `config.products` 数组
- **核心价值观**：修改 `config.values` 数组
- **法律页面更新日期**：修改 `config.legal.lastUpdated`
- **翻译文案**：修改 `js/translations.js`

## 📱 推荐的第三方服务

### Newsletter 订阅
- [Buttondown](https://buttondown.email/) - 简洁、开发者友好
- [Substack](https://substack.com/) - 适合内容创作者
- [ConvertKit](https://convertkit.com/) - 功能丰富
- [Mailchimp](https://mailchimp.com/) - 老牌服务

### 联系表单
- [Formspree](https://formspree.io/) - 简单易用，免费版够用
- [Tally](https://tally.so/) - 美观、免费
- [Typeform](https://www.typeform.com/) - 体验出色
- [Google Forms](https://forms.google.com/) - 免费、可靠

## 🎨 自定义样式

如需调整设计，主要修改 `css/style.css` 中的 CSS 变量：

```css
:root {
  /* 品牌色 */
  --color-primary: #0066cc;
  --color-primary-hover: #0052a3;
  
  /* 字体 */
  --font-sans: 'Söhne', -apple-system, BlinkMacSystemFont, ...;
  
  /* 间距 */
  --space-4: 1rem;
  ...
}
```

## 📋 后续维护建议

1. **添加更新/博客文章**
   - 直接在 `updates.html` 中添加新的 `<article class="update-item">` 元素
   - 或者迁移到静态网站生成器（如 Astro、11ty）

2. **添加产品页面**
   - 在 `config.products` 中更新产品信息
   - 可为每个产品创建独立页面

3. **添加团队成员**
   - 在 `about.html` 中添加团队成员卡片

4. **添加分析**
   - 推荐使用 [Plausible](https://plausible.io/) 或 [Fathom](https://usefathom.com/)（隐私友好）
   - 或 Google Analytics（在每个页面 `</body>` 前添加代码）

## 📄 许可证

本项目代码可自由使用和修改。内容版权归 Beluga Tempo 所有。

---

**Beluga Tempo** | 鲸律  
Building tools that amplify human potential.  
构建放大人类潜能的工具。
