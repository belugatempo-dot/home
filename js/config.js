/**
 * ========================================
 * BELUGA TEMPO - SITE CONFIGURATION
 * ========================================
 * 
 * 修改此文件来自定义网站内容。
 * 所有标记为 [PLACEHOLDER] 的内容都需要替换为真实信息。
 * 
 * Modify this file to customize website content.
 * All items marked [PLACEHOLDER] should be replaced with real information.
 */

const CONFIG = {
  // ========================================
  // COMPANY INFO | 公司信息
  // ========================================
  company: {
    nameEn: 'Beluga Tempo',
    nameZh: '鲸律',
    // [PLACEHOLDER] 替换为真实标语
    taglineEn: 'Building tools that amplify human potential',
    taglineZh: '构建放大人类潜能的工具',
    // [PLACEHOLDER] 替换为真实描述
    descriptionEn: 'A Silicon Valley company creating innovative products for the modern world.',
    descriptionZh: '一家位于硅谷的公司，致力于为现代世界创造创新产品。',
    foundedYear: 2024,
    location: 'San Francisco Bay Area, California',
    locationZh: '美国加利福尼亚州旧金山湾区'
  },

  // ========================================
  // CONTACT INFO | 联系信息
  // ========================================
  contact: {
    // [PLACEHOLDER] 替换为真实邮箱
    email: 'hi@beluga-tempo.com',
    // [PLACEHOLDER] 替换为真实社交链接，留空则不显示
    social: {
      twitter: 'https://twitter.com/belugatempo',
      linkedin: '',
      github: 'https://github.com/belugatempo',
      producthunt: '',
      xiaohongshu: ''
    }
  },

  // ========================================
  // NEWSLETTER | 订阅
  // ========================================
  newsletter: {
    // [PLACEHOLDER] 替换为真实的 newsletter 订阅链接
    // 可使用 Buttondown, Substack, ConvertKit 等服务
    url: 'https://buttondown.email/belugatempo',
    // 是否启用 newsletter
    enabled: true
  },

  // ========================================
  // CONTACT FORM | 联系表单
  // ========================================
  contactForm: {
    // [PLACEHOLDER] 替换为真实的表单服务链接
    // 推荐: Formspree, Tally, Typeform, Google Forms
    // 或留空使用 mailto 方式
    url: '',
    // 如果 url 为空，使用 mailto
    useMailto: true
  },

  // ========================================
  // SEO SETTINGS | SEO 设置
  // ========================================
  seo: {
    // [PLACEHOLDER] 替换为真实 SEO 描述
    defaultDescriptionEn: 'Beluga Tempo is a Silicon Valley company building innovative tools and products that amplify human potential.',
    defaultDescriptionZh: '鲸律是一家位于硅谷的公司，致力于构建放大人类潜能的创新工具和产品。',
    // [PLACEHOLDER] 替换为真实关键词
    keywordsEn: 'Beluga Tempo, technology, innovation, Silicon Valley, startup, software',
    keywordsZh: '鲸律, 科技, 创新, 硅谷, 创业, 软件',
    // Open Graph 图片 URL（用于社交分享）
    // [PLACEHOLDER] 替换为真实的 OG 图片 URL
    ogImage: ''
  },

  // ========================================
  // LEGAL PAGES | 法律页面
  // ========================================
  legal: {
    // [PLACEHOLDER] 替换为真实的法律实体名称
    legalEntityEn: 'Beluga Tempo Inc.',
    legalEntityZh: 'Beluga Tempo Inc.',
    // 法律页面最后更新日期
    lastUpdated: '2024-01-01'
  },

  // ========================================
  // PRODUCTS PLACEHOLDER | 产品占位
  // ========================================
  // 这些是占位产品，用于展示产品矩阵布局
  // [PLACEHOLDER] 替换为真实产品信息
  products: [
    {
      id: 'product-1',
      nameEn: 'Project Alpha',
      nameZh: '项目 Alpha',
      descriptionEn: 'An innovative solution for modern challenges.',
      descriptionZh: '应对现代挑战的创新解决方案。',
      status: 'coming-soon',
      icon: '🚀'
    },
    {
      id: 'product-2',
      nameEn: 'Project Beta',
      nameZh: '项目 Beta',
      descriptionEn: 'Empowering individuals with smart tools.',
      descriptionZh: '用智能工具赋能个人。',
      status: 'coming-soon',
      icon: '⚡'
    },
    {
      id: 'product-3',
      nameEn: 'Project Gamma',
      nameZh: '项目 Gamma',
      descriptionEn: 'Streamlining workflows for teams.',
      descriptionZh: '优化团队工作流程。',
      status: 'coming-soon',
      icon: '🎯'
    },
    {
      id: 'product-4',
      nameEn: 'Project Delta',
      nameZh: '项目 Delta',
      descriptionEn: 'Connecting ideas across boundaries.',
      descriptionZh: '跨越边界连接创意。',
      status: 'coming-soon',
      icon: '🌐'
    }
  ],

  // ========================================
  // CORE VALUES | 核心价值
  // ========================================
  // [PLACEHOLDER] 替换为真实的公司价值观
  values: [
    {
      titleEn: 'User First',
      titleZh: '用户优先',
      descriptionEn: 'Every decision starts with understanding user needs.',
      descriptionZh: '每一个决策都从理解用户需求开始。',
      icon: '👤'
    },
    {
      titleEn: 'Quality Over Speed',
      titleZh: '质量先于速度',
      descriptionEn: 'We take time to build things that last.',
      descriptionZh: '我们花时间构建经得起考验的产品。',
      icon: '✨'
    },
    {
      titleEn: 'Transparent & Honest',
      titleZh: '透明与诚实',
      descriptionEn: 'We communicate openly with our users and partners.',
      descriptionZh: '我们与用户和合作伙伴保持开放的沟通。',
      icon: '💬'
    }
  ],

  // ========================================
  // SITE SETTINGS | 网站设置
  // ========================================
  site: {
    // 默认语言 (en 或 zh)
    defaultLang: 'en',
    // 支持的语言
    supportedLangs: ['en', 'zh'],
    // 是否启用深色模式切换（false 则自动跟随系统）
    enableDarkModeToggle: true,
    // 默认主题 (light, dark, auto)
    defaultTheme: 'auto'
  }
};

// 导出配置（如果在模块环境中）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
