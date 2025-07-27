import type { Dictionary, Language, Service } from "@/lib/types";

/**
 * Get services data with proper typing
 * This is the single source of truth for all service data
 */
export function getServices(dict: Dictionary, lang: Language): Service[] {
  return [
    {
      id: 'static',
      icon: 'Globe', // Use string identifier instead of component
      title: dict.services.static.title,
      description: dict.services.static.description,
      features: dict.services.static.features,
      price: dict.services.static.price,
      href: `/${lang}/services`,
      popular: false,
      tier: 'starter',
      buttonText: dict.services.learnMore,
      addons: dict.services.static.addons ? {
        title: dict.services.static.addons,
        management: dict.services.static.management || '',
        support: dict.services.static.support || '',
      } : undefined,
    },
    {
      id: 'dynamic',
      icon: 'Zap', // Use string identifier instead of component
      title: dict.services.dynamic.title,
      description: dict.services.dynamic.description,
      features: dict.services.dynamic.features,
      price: dict.services.dynamic.price,
      href: `/${lang}/services`,
      popular: true,
      tier: 'professional',
      buttonText: dict.services.learnMore,
    },
    {
      id: 'custom',
      icon: 'Smartphone', // Use string identifier instead of component
      title: dict.services.custom.title,
      description: dict.services.custom.description,
      features: dict.services.custom.features,
      price: dict.services.custom.price,
      href: `/${lang}/services`,
      popular: false,
      tier: 'enterprise',
      buttonText: dict.services.custom.requestQuote || dict.services.learnMore,
    }
  ];
} 