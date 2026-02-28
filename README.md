# Beluga Tempo | 鲸律

A bilingual (Chinese/English) static company website for [Beluga Tempo](https://beluga-tempo.com) — a solo maker studio shipping real projects.

**Live site:** [https://beluga-tempo.com](https://beluga-tempo.com)

## Projects

| # | Project | Description | Link |
|---|---------|-------------|------|
| 1 | 📊 Investment Dashboard | Portfolio tracking and analysis | [invest.beluga-tempo.com](https://invest.beluga-tempo.com) |
| 2 | ⭐ StarQuest | Gamified task and habit tracker | [starquest.beluga-tempo.com](https://starquest.beluga-tempo.com) |
| 3 | 🌊 Tide Planner 2026 | Planner synced with tidal rhythms | [tide-planner.beluga-tempo.com](https://tide-planner.beluga-tempo.com) |
| 4 | 🔍 Codebase Visualizer | Visualize any codebase structure | [GitHub](https://github.com/belugatempo-dot/codebase-visualizer) |
| 5 | 📐 Math Visualization | Interactive math concept visualizations | [math.beluga-tempo.com](https://math.beluga-tempo.com) |
| 6 | 🎮 Math Quest | Gamified math learning adventure | [math-quest.beluga-tempo.com](https://math-quest.beluga-tempo.com) |
| 7 | 🧠 Socratic Coach | Claude Code skill for Socratic coaching | [GitHub](https://github.com/belugatempo-dot/socratic-coach) |
| 8 | 🏛️ Census Dashboard | U.S. Census data visualization | [GitHub](https://github.com/belugatempo-dot/CensusDashboard) |

## Features

- Bilingual (EN/ZH) via URL parameter (`?lang=en` / `?lang=zh`)
- Dark/light/auto theme with localStorage persistence
- Responsive design (mobile-first)
- Pure static — no build process, no backend
- Configuration-driven content (`js/config.js`)
- Deployed via GitHub Pages with custom domain

## Development

```bash
# Local preview
python -m http.server 8000
# or
npx serve .
```

Open `http://localhost:8000` in your browser.

## Architecture

```
├── index.html          # Home
├── about.html          # About
├── products.html       # Projects
├── updates.html        # Updates
├── contact.html        # Contact
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── css/style.css       # All styles (CSS variables for theming)
├── js/
│   ├── config.js       # Site configuration (company info, projects, social links)
│   ├── translations.js # All i18n strings
│   └── main.js         # Core logic: i18n, theme, navigation, dynamic rendering
└── assets/             # Images and resources
```

**Key patterns:**
- Content is centralized in `CONFIG` object (`js/config.js`)
- HTML elements use `data-i18n` attributes for translation
- Products, values, and social links are rendered dynamically from config
- `getBasePath()` handles GitHub Pages subpath deployment

## Deployment

Push to `main` branch. GitHub Pages auto-deploys from the root directory.

## License

Code is free to use and modify. Content copyright Beluga Tempo.

---

**Beluga Tempo** | 鲸律
Building tools that amplify human potential.
构建放大人类潜能的工具。
