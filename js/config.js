/**
 * ========================================
 * BELUGA TEMPO - SITE CONFIGURATION
 * ========================================
 */

const CONFIG = {
  // ========================================
  // COMPANY INFO | 公司信息
  // ========================================
  company: {
    nameEn: 'Beluga Tempo',
    nameZh: '鲸律',
    taglineEn: 'Building tools that amplify human potential',
    taglineZh: '构建放大人类潜能的工具',
    descriptionEn: 'A solo maker studio shipping real projects — from math education to investment tools.',
    descriptionZh: '一个独立创作者工作室，持续发布真实项目——从数学教育到投资工具。',
    foundedYear: 2026,
    location: 'Palo Alto, California, USA 94303',
    locationZh: '美国加利福尼亚州帕罗奥图 94303'
  },

  // ========================================
  // CONTACT INFO | 联系信息
  // ========================================
  contact: {
    email: 'belugatempo@gmail.com',
    social: {
      twitter: '',
      linkedin: '',
      github: 'https://github.com/belugatempo-dot',
      producthunt: '',
      xiaohongshu: 'https://www.xiaohongshu.com/user/profile/DaDaShuo'
    }
  },

  // ========================================
  // NEWSLETTER | 订阅
  // ========================================
  newsletter: {
    url: '',
    enabled: false
  },

  // ========================================
  // CONTACT FORM | 联系表单
  // ========================================
  contactForm: {
    url: '',
    useMailto: true
  },

  // ========================================
  // SEO SETTINGS | SEO 设置
  // ========================================
  seo: {
    defaultDescriptionEn: 'Beluga Tempo is a solo maker studio shipping real projects — from math visualization to investment dashboards.',
    defaultDescriptionZh: '鲸律是一个独立创作者工作室，持续发布真实项目——从数学可视化到投资仪表板。',
    keywordsEn: 'Beluga Tempo, projects, math visualization, investment dashboard, tide planner, codebase visualizer',
    keywordsZh: '鲸律, 项目, 数学可视化, 投资仪表板, 潮汐计划, 代码库可视化',
    ogImage: ''
  },

  // ========================================
  // LEGAL PAGES | 法律页面
  // ========================================
  legal: {
    legalEntityEn: 'Beluga Tempo Inc.',
    legalEntityZh: 'Beluga Tempo Inc.',
    lastUpdated: '2024-01-01'
  },

  // ========================================
  // PROJECTS | 项目
  // ========================================
  products: [
    {
      id: 'invest-app',
      nameEn: 'Investment Dashboard',
      nameZh: '投资仪表板',
      descriptionEn: 'A clean dashboard for tracking and analyzing your investment portfolio.',
      descriptionZh: '一个简洁的仪表板，用于跟踪和分析你的投资组合。',
      status: 'live',
      icon: '📊',
      url: 'https://invest.beluga-tempo.com',
      github: 'https://github.com/belugatempo-dot/invest-app'
    },
    {
      id: 'starquest',
      nameEn: 'StarQuest',
      nameZh: 'StarQuest 星途探险',
      descriptionEn: 'Complete quests. Earn stars. Unlock rewards. A gamified task and habit tracker.',
      descriptionZh: '完成任务，收集星星，解锁奖励。一款游戏化的任务与习惯追踪器。',
      status: 'live',
      icon: '⭐',
      url: 'https://starquest.beluga-tempo.com',
      github: 'https://github.com/belugatempo-dot/StarQuest'
    },
    {
      id: 'tide-planner-2026',
      nameEn: 'Tide Planner 2026',
      nameZh: '潮汐计划本 2026',
      descriptionEn: 'A beautifully designed planner that syncs with tidal rhythms for coastal living.',
      descriptionZh: '一款设计精美的计划本，与潮汐节律同步，为沿海生活而设计。',
      status: 'live',
      icon: '🌊',
      url: 'https://tide-planner.beluga-tempo.com',
      github: 'https://github.com/belugatempo-dot/Tide-Planner-2026'
    },
    {
      id: 'codebase-visualizer',
      nameEn: 'Codebase Visualizer',
      nameZh: '代码库可视化',
      descriptionEn: 'Visualize and explore the structure of any codebase at a glance.',
      descriptionZh: '一目了然地可视化和探索任意代码库的结构。',
      status: 'github',
      icon: '🔍',
      url: '',
      github: 'https://github.com/belugatempo-dot/codebase-visualizer'
    },
    {
      id: 'math-visualization',
      nameEn: 'Math Visualization',
      nameZh: '数学可视化',
      descriptionEn: 'Interactive visualizations that make abstract math concepts tangible and intuitive.',
      descriptionZh: '交互式可视化，让抽象的数学概念变得直观可感。',
      status: 'live',
      icon: '📐',
      url: 'https://math.beluga-tempo.com',
      github: 'https://github.com/belugatempo-dot/math-visualization'
    },
    {
      id: 'math-quest',
      nameEn: 'Math Quest',
      nameZh: '数学冒险',
      descriptionEn: 'A gamified math learning adventure that makes practice fun and engaging.',
      descriptionZh: '一款游戏化的数学学习冒险，让练习变得有趣且引人入胜。',
      status: 'live',
      icon: '🎮',
      url: 'https://math-quest.beluga-tempo.com',
      github: 'https://github.com/belugatempo-dot/math-quest'
    },
    {
      id: 'socratic-coach',
      nameEn: 'Socratic Coach',
      nameZh: '苏格拉底教练',
      descriptionEn: 'A Claude Code skill that turns Claude into a Socratic coaching agent — helping users think through decisions by asking probing questions.',
      descriptionZh: '一个 Claude Code 技能，将 Claude 变成苏格拉底式教练——通过提出探究性问题帮助用户深入思考决策。',
      status: 'github',
      icon: '🧠',
      url: '',
      github: 'https://github.com/belugatempo-dot/socratic-coach'
    },
    {
      id: 'census-dashboard',
      nameEn: 'Census Dashboard',
      nameZh: '人口普查仪表板',
      descriptionEn: 'A U.S. Census data visualization dashboard built with React and Recharts, featuring real-time data from the Census Bureau API.',
      descriptionZh: '基于 React 和 Recharts 构建的美国人口普查数据可视化仪表板，通过集成 Census Bureau API 实时展示人口、经济和人口统计数据。',
      status: 'github',
      icon: '🏛️',
      url: '',
      github: 'https://github.com/belugatempo-dot/CensusDashboard'
    },
    {
      id: 'daily-planner',
      nameEn: 'Daily Planner',
      nameZh: '每日计划',
      descriptionEn: 'A family-friendly daily planner that creates personalized schedules around school, activities, weather, goals, and rewards.',
      descriptionZh: '一款适合家庭使用的每日计划工具，可根据学校、课外活动、天气、目标和奖励生成个性化日程。',
      status: 'live',
      icon: '🗓️',
      url: 'https://daily-planner.beluga-tempo.com/',
      github: ''
    }
  ],

  // ========================================
  // CORE VALUES | 核心价值
  // ========================================
  values: [],

  // ========================================
  // SITE SETTINGS | 网站设置
  // ========================================
  site: {
    defaultLang: 'zh',
    supportedLangs: ['en', 'zh'],
    enableDarkModeToggle: true,
    defaultTheme: 'auto'
  }
};

// 导出配置（如果在模块环境中）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
