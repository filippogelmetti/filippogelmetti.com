import type { CategoryProjectType } from '../domain/models/category-project-type';
import { CategoriesProjectTypeId } from '../domain/models/category-project-type-id';

type HashTableCategoriesProjectType<T> = {
  [key in CategoriesProjectTypeId]: T;
};

export const categoriesProjectType: HashTableCategoriesProjectType<CategoryProjectType> =
  {
    desktopApp: {
      id: CategoriesProjectTypeId.desktopApp,
      icon: '',
      name: 'Desktop App',
    },
    widget: {
      id: CategoriesProjectTypeId.widget,
      icon: '',
      name: 'Widget',
    },
    fullStack: {
      id: CategoriesProjectTypeId.fullStack,
      icon: '',
      name: 'Full Stack',
    },
    frontend: {
      id: CategoriesProjectTypeId.frontend,
      icon: '',
      name: 'Frontend',
    },
    b2bPlatform: {
      id: CategoriesProjectTypeId.b2bPlatform,
      icon: '',
      name: 'B2B platform',
    },
    website: {
      id: CategoriesProjectTypeId.website,
      icon: '',
      name: 'Website',
    },
    customAdminPanel: {
      id: CategoriesProjectTypeId.customAdminPanel,
      icon: '',
      name: 'Custom Admin Panel',
    },
    videoStreaming: {
      id: CategoriesProjectTypeId.videoStreaming,
      icon: '',
      name: 'Video Streaming',
    },
    headless: {
      id: CategoriesProjectTypeId.headless,
      icon: '',
      name: 'Headless CMS',
    },
    ecommerce: {
      id: CategoriesProjectTypeId.ecommerce,
      icon: '',
      name: 'E-commerce',
    },
    plugin: {
      id: CategoriesProjectTypeId.plugin,
      icon: '',
      name: 'Plugin',
    },
    cms: {
      id: CategoriesProjectTypeId.cms,
      icon: '',
      name: 'CMS',
    },
    customIntegration: {
      id: CategoriesProjectTypeId.customIntegration,
      icon: '',
      name: 'Custom Integration',
    },
    webapp: {
      id: CategoriesProjectTypeId.webapp,
      icon: '',
      name: 'Web Application',
    },
    computerVision: {
      id: CategoriesProjectTypeId.computerVision,
      icon: '',
      name: 'Computer Vision',
    },
    emailMarketingTool: {
      id: CategoriesProjectTypeId.emailMarketingTool,
      icon: '',
      name: 'Email Marketing Tool',
    },
    dashboard: {
      id: CategoriesProjectTypeId.dashboard,
      icon: '',
      name: 'Dashboard',
    },
    mobileApplication: {
      id: CategoriesProjectTypeId.mobileApplication,
      icon: '',
      name: 'Mobile Application',
    },
    api: {
      id: CategoriesProjectTypeId.api,
      icon: '',
      name: 'API',
    },
    saas: {
      id: CategoriesProjectTypeId.saas,
      icon: '',
      name: 'SaaS',
    },
    educationalPlatform: {
      id: CategoriesProjectTypeId.educationalPlatform,
      icon: '',
      name: 'Educational Platform',
    },
    interactivePlatform: {
      id: CategoriesProjectTypeId.interactivePlatform,
      icon: '',
      name: 'Interactive Platform',
    },
    portfolioShowcase: {
      id: CategoriesProjectTypeId.portfolioShowcase,
      icon: '',
      name: 'Portfolio Showcase',
    },
    enterpriseSolutions: {
      id: CategoriesProjectTypeId.enterpriseSolutions,
      icon: '',
      name: 'Enterprise Solutions',
    },
    corporateWebsite: {
      id: CategoriesProjectTypeId.corporateWebsite,
      icon: '',
      name: 'Corporate Website',
    },
    contentAggregator: {
      id: CategoriesProjectTypeId.contentAggregator,
      icon: '',
      name: 'Content Aggregator',
    },
  };
