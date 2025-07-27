import type { Dictionary, Feature } from "@/lib/types";

/**
 * Get features data with proper typing
 * This is the single source of truth for all feature data
 */
export function getFeatures(dict: Dictionary): Feature[] {
  return [
    {
      icon: 'Search', // Use string identifier instead of component
      title: dict.services.seoOptimized.title,
      description: dict.services.seoOptimized.description,
    },
    {
      icon: 'Shield', // Use string identifier instead of component
      title: dict.services.secure.title,
      description: dict.services.secure.description,
    },
    {
      icon: 'Headphones', // Use string identifier instead of component
      title: dict.services.support.title,
      description: dict.services.support.description,
    }
  ];
} 