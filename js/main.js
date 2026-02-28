/**
 * ========================================
 * BELUGA TEMPO - MAIN JAVASCRIPT
 * ========================================
 */

(function() {
  'use strict';

  // ========================================
  // UTILITIES
  // ========================================
  
  /**
   * 获取当前语言
   * 优先级: URL 参数 > 默认语言 (en)
   * 注意: 不使用浏览器语言自动检测
   */
  function getCurrentLang() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam && CONFIG.site.supportedLangs.includes(langParam)) {
      return langParam;
    }
    
    return CONFIG.site.defaultLang; // 默认返回 'en'
  }

  /**
   * 获取翻译文本
   */
  function t(path, lang) {
    lang = lang || getCurrentLang();
    const keys = path.split('.');
    let value = TRANSLATIONS;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        console.warn(`Translation not found: ${path}`);
        return path;
      }
    }
    
    if (typeof value === 'object' && lang in value) {
      return value[lang];
    }
    
    return path;
  }

  /**
   * 获取基础路径（用于 GitHub Pages 子路径部署）
   */
  function getBasePath() {
    // 检测是否在 GitHub Pages 子路径下
    const path = window.location.pathname;
    const match = path.match(/^\/[^\/]+\//);
    
    // 如果在本地开发或根路径，返回空字符串
    if (window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1' ||
        path === '/' || path === '/index.html') {
      return '';
    }
    
    // 如果在子路径下，返回子路径
    if (match) {
      return match[0].slice(0, -1); // 移除末尾的 /
    }
    
    return '';
  }

  /**
   * 构建带语言参数的链接
   */
  function buildLink(href, lang) {
    lang = lang || getCurrentLang();
    const basePath = getBasePath();
    let url = href;
    
    // 如果是相对路径，添加基础路径
    if (href.startsWith('./') || href.startsWith('/') || !href.startsWith('http')) {
      // 移除开头的 ./ 或 /
      const cleanHref = href.replace(/^\.?\//, '');
      url = basePath + '/' + cleanHref;
    }
    
    // 添加语言参数
    const separator = url.includes('?') ? '&' : '?';
    return url + separator + 'lang=' + lang;
  }

  // ========================================
  // LANGUAGE SWITCHING
  // ========================================

  /**
   * 切换语言
   */
  function switchLanguage(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.location.href = url.toString();
  }

  /**
   * 更新页面上所有翻译内容
   */
  function updateTranslations() {
    const lang = getCurrentLang();
    
    // 更新 HTML lang 属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    // 更新所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = t(key, lang);
      
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.hasAttribute('placeholder')) {
          el.placeholder = translation;
        } else {
          el.value = translation;
        }
      } else {
        el.textContent = translation;
      }
    });
    
    // 更新所有带 data-i18n-html 属性的元素（支持 HTML）
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key, lang);
    });
    
    // 更新页面标题
    const titleKey = document.body.getAttribute('data-page-title');
    if (titleKey) {
      document.title = t(titleKey, lang);
    }
    
    // 更新 meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const descKey = metaDesc.getAttribute('data-i18n');
      if (descKey) {
        metaDesc.setAttribute('content', t(descKey, lang));
      }
    }
    
    // 更新语言切换按钮文字
    const langSwitch = document.querySelector('.lang-switch');
    if (langSwitch) {
      langSwitch.textContent = t('nav.switchLang', lang);
    }
    
    // 更新版权年份
    document.querySelectorAll('[data-copyright]').forEach(el => {
      const year = new Date().getFullYear();
      el.textContent = t('common.copyright', lang).replace('{{year}}', year);
    });
    
    // 更新所有链接的语言参数
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      // 只处理内部链接
      if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('#')) {
        // 移除现有的 lang 参数
        const cleanHref = href.split('?')[0];
        link.setAttribute('href', cleanHref + '?lang=' + lang);
      }
    });
  }

  // ========================================
  // THEME MANAGEMENT
  // ========================================

  /**
   * 获取当前主题
   */
  function getCurrentTheme() {
    const saved = localStorage.getItem('theme');
    if (saved && ['light', 'dark'].includes(saved)) {
      return saved;
    }
    return 'light';
  }

  /**
   * 应用主题
   */
  function applyTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeToggle(theme);
    updateThemeLogo(theme);
  }

  function updateThemeLogo(theme) {
    document.querySelectorAll('.hero-logo[data-logo-light][data-logo-dark]').forEach(img => {
      img.src = theme === 'dark' ? img.dataset.logoDark : img.dataset.logoLight;
    });
  }

  /**
   * 更新主题切换按钮状态
   */
  function updateThemeToggle(theme) {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    const icon = toggle.querySelector('.theme-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
  }

  /**
   * 切换主题
   */
  function toggleTheme() {
    const current = getCurrentTheme();
    applyTheme(current === 'light' ? 'dark' : 'light');
  }

  // ========================================
  // NAVIGATION
  // ========================================

  /**
   * 初始化移动端导航
   */
  function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // 更新 aria 属性
      const isOpen = navMenu.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    
    // 点击菜单项后关闭菜单
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // 点击外部关闭菜单
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // ========================================
  // DYNAMIC CONTENT
  // ========================================

  /**
   * 渲染核心价值观
   */
  function renderValues() {
    const container = document.querySelector('.values-grid');
    if (!container) return;
    if (!CONFIG.values || !CONFIG.values.length) return;

    const lang = getCurrentLang();
    container.innerHTML = '';

    CONFIG.values.forEach(value => {
      const card = document.createElement('div');
      card.className = 'value-card';
      card.innerHTML = `
        <div class="value-icon">${value.icon}</div>
        <h3 class="value-title">${lang === 'zh' ? value.titleZh : value.titleEn}</h3>
        <p class="value-description">${lang === 'zh' ? value.descriptionZh : value.descriptionEn}</p>
      `;
      container.appendChild(card);
    });
  }

  /**
   * 渲染产品/项目卡片
   */
  function renderProducts() {
    const container = document.querySelector('.products-grid');
    if (!container) return;

    const lang = getCurrentLang();
    container.innerHTML = '';

    CONFIG.products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      // Status badge
      let statusClass = 'product-status';
      let statusText = t('common.comingSoon', lang);
      if (product.status === 'live') {
        statusClass += ' product-status-live';
        statusText = t('common.live', lang);
      } else if (product.status === 'github') {
        statusClass += ' product-status-github';
        statusText = t('common.githubOnly', lang);
      }

      // Action links
      let linksHtml = '<div class="product-links">';
      if (product.url) {
        linksHtml += `<a href="${product.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">${t('common.visitSite', lang)}</a>`;
      }
      if (product.github) {
        linksHtml += `<a href="${product.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">${t('common.viewGithub', lang)}</a>`;
      }
      if (product.introUrl) {
        linksHtml += `<a href="${product.introUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">${t('common.viewIntro', lang)}</a>`;
      }
      if (product.demoUrl) {
        linksHtml += `<a href="${product.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">${t('common.tryDemo', lang)}</a>`;
      }
      linksHtml += '</div>';

      card.innerHTML = `
        <div class="product-icon">${product.icon}</div>
        <h3 class="product-name">${lang === 'zh' ? product.nameZh : product.nameEn}</h3>
        <p class="product-description">${lang === 'zh' ? product.descriptionZh : product.descriptionEn}</p>
        <span class="${statusClass}">${statusText}</span>
        ${linksHtml}
      `;
      container.appendChild(card);
    });
  }

  /**
   * 渲染社交链接
   */
  function renderSocialLinks() {
    const containers = document.querySelectorAll('.social-links');
    
    containers.forEach(container => {
      container.innerHTML = '';
      
      const socialIcons = {
        twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
        linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
        github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
        producthunt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.8-.806 1.8-1.8 0-.995-.805-1.8-1.8-1.8zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.881 4.2 4.2 0 2.321-1.881 4.2-4.201 4.2z"/></svg>',
        xiaohongshu: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>'
      };
      
      Object.entries(CONFIG.contact.social).forEach(([platform, url]) => {
        if (url && socialIcons[platform]) {
          const link = document.createElement('a');
          link.href = url;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.className = 'social-link';
          link.setAttribute('aria-label', platform);
          link.innerHTML = socialIcons[platform];
          container.appendChild(link);
        }
      });
    });
  }

  /**
   * 设置联系表单
   */
  function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = form.querySelector('[name="name"]').value;
      const email = form.querySelector('[name="email"]').value;
      const message = form.querySelector('[name="message"]').value;
      
      if (CONFIG.contactForm.url && !CONFIG.contactForm.useMailto) {
        // 使用第三方表单服务
        window.open(CONFIG.contactForm.url, '_blank');
      } else {
        // 使用 mailto
        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${CONFIG.contact.email}?subject=${subject}&body=${body}`;
      }
    });
  }

  /**
   * 设置 Newsletter 按钮
   */
  function setupNewsletterButtons() {
    document.querySelectorAll('.newsletter-btn, .cta-primary').forEach(btn => {
      if (btn.classList.contains('newsletter-btn') || btn.getAttribute('data-action') === 'newsletter') {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (CONFIG.newsletter.enabled && CONFIG.newsletter.url) {
            window.open(CONFIG.newsletter.url, '_blank');
          }
        });
      }
    });
  }

  // ========================================
  // INITIALIZATION
  // ========================================

  function init() {
    // 应用主题
    applyTheme(getCurrentTheme());
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (getCurrentTheme() === 'auto') {
        applyTheme('auto');
      }
    });
    
    // 更新翻译
    updateTranslations();
    
    // 初始化导航
    initMobileNav();
    
    // 渲染动态内容
    renderValues();
    renderProducts();
    renderSocialLinks();
    
    // 设置交互
    setupContactForm();
    setupNewsletterButtons();
    
    // 设置语言切换
    document.querySelectorAll('.lang-switch').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentLang = getCurrentLang();
        switchLanguage(currentLang === 'en' ? 'zh' : 'en');
      });
    });
    
    // 设置主题切换
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 导出函数供外部使用
  window.BelugatTempo = {
    getCurrentLang,
    switchLanguage,
    t,
    toggleTheme,
    getCurrentTheme
  };

})();
