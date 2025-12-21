# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Beluga Tempo (鲸律) is a bilingual (Chinese/English) static company website designed for GitHub Pages deployment. It is a pure static site with no build process or backend dependencies.

## Development

**Local preview:** Open `index.html` directly in a browser, or use any local server:
```bash
python -m http.server 8000
# or
npx serve .
```

**Deployment:** Push to main branch with GitHub Pages enabled (Settings → Pages → Deploy from main branch).

## Architecture

### Configuration-Driven Content
All customizable content is centralized in `js/config.js` (CONFIG object). This includes company info, contact details, products, core values, and site settings. HTML pages reference this config rather than hardcoding content.

### Internationalization (i18n)
- Language determined by `?lang=en` or `?lang=zh` URL parameter (default: English)
- Translations stored in `js/translations.js` (TRANSLATIONS object)
- HTML elements use `data-i18n` attributes for text content and `data-i18n-html` for HTML content
- `main.js` handles translation lookups via the `t(key, lang)` function

### Theme System
- Light/dark/auto modes via `data-theme` attribute on `<html>`
- CSS variables in `:root` and `[data-theme="dark"]` selectors
- Theme persisted in localStorage

### Key Files
- `js/config.js` - Site configuration (company info, products, values, social links)
- `js/translations.js` - All translatable strings
- `js/main.js` - Core logic: i18n, theme, navigation, dynamic rendering
- `css/style.css` - All styles with CSS variables for theming

### Dynamic Rendering
Products, values, and social links are rendered dynamically from CONFIG by `main.js` functions (`renderProducts()`, `renderValues()`, `renderSocialLinks()`).

## GitHub Pages Considerations

The site handles GitHub Pages subpath deployment. `getBasePath()` in `main.js` detects if running under a subpath (e.g., `username.github.io/repo-name/`) and adjusts links accordingly.
