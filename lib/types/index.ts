
export interface Dictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
    getStarted: string;
    allServices: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    description: string;
    startProject: string;
    viewServices: string;
  };
  services: {
    title: string;
    description: string;
    static: ServiceInfo;
    dynamic: ServiceInfo;
    custom: ServiceInfo;
    learnMore: string;
    whyChoose: string;
    seoOptimized: FeatureInfo;
    secure: FeatureInfo;
    support: FeatureInfo;
  };
  about: {
    title: string;
    description: string;
    story: {
      title: string;
      content1: string;
      content2: string;
    };
    values: {
      title: string;
      quality: FeatureInfo;
      client: FeatureInfo;
      innovation: FeatureInfo;
    };
  };
  contact: {
    title: string;
    description: string;
    form: {
      title: string;
      description: string;
      firstName: string;
      lastName: string;
      email: string;
      subject: string;
      message: string;
      messagePlaceholder: string;
      send: string;
    };
    info: {
      title: string;
      description: string;
      hours: string;
      monday: string;
      saturday: string;
      sunday: string;
      closed: string;
    };
  };
  footer: {
    description: string;
    services: string;
    company: string;
    support: string;
    links: {
      staticWebsites: string;
      dynamicWebsites: string;
      customWebApps: string;
      websiteManagement: string;
      aboutUs: string;
      contact: string;
      privacy: string;
      terms: string;
      helpCenter: string;
      documentation: string;
      statusPage: string;
      getSupport: string;
    };
    copyright: string;
  };
}

interface ServiceInfo {
  title: string;
  description: string;
  features: string[];
  price: string;
  addons?: string;
  management?: string;
  support?: string;
  popular?: string;
  requestQuote?: string;
}

interface FeatureInfo {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  icon: string; // Icon name as string
  title: string;
  description: string;
  features: string[];
  price: string;
  priceDescription: string;
  href: string;
  popular: boolean;
  tier?: 'starter' | 'professional' | 'enterprise';
  buttonText?: string;
  addons?: {
    title: string;
    management: string;
    support: string;
  };
}

export interface Feature {
  icon: string; // Icon name as string
  title: string;
  description: string;
}

export type Language = "en" | "dk";

export interface PageProps {
  params: Promise<{ lang: Language }>;
}

export interface ComponentWithDict {
  dict: Dictionary;
  lang: Language;
} 