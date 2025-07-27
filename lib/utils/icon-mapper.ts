import { 
  Globe, 
  Smartphone, 
  Zap, 
  Search, 
  Shield, 
  Headphones,
  LucideIcon 
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Zap,
  Search,
  Shield,
  Headphones,
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Globe; // Fallback to Globe if icon not found
} 