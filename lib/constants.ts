/**
 * Application Constants
 * Centralized configuration values and constants
 */

// Site Configuration
export const SITE_CONFIG = {
  name: "WebAgency",
  description: "Beautiful websites built for success",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: "WebAgency Team",
} as const;

// Email Configuration
export const EMAIL_CONFIG = {
  service: "Gmail",
  subjectPrefix: "Contact Form Submission:",
  maxMessageLength: 2000,
  maxSubjectLength: 200,
} as const;

// Validation Rules
export const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    maxLength: 254,
  },
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-ZÀ-ÿ\s'-]+$/,
  },
  subject: {
    minLength: 5,
    maxLength: EMAIL_CONFIG.maxSubjectLength,
  },
  message: {
    minLength: 10,
    maxLength: EMAIL_CONFIG.maxMessageLength,
  },
} as const;

// UI Constants
export const UI_CONFIG = {
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  animation: {
    duration: {
      fast: 150,
      normal: 300,
      slow: 500,
    },
  },
} as const;

// API Routes
export const API_ROUTES = {
  contact: "/api/contact",
} as const;

// Navigation
export const NAVIGATION = {
  main: [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/services", label: "services" },
    { href: "/contact", label: "contact" },
  ],
  footer: {
    services: [
      { href: "/services", label: "staticWebsites" },
      { href: "/services", label: "dynamicWebsites" },
      { href: "/services", label: "customWebApps" },
      { href: "/services", label: "websiteManagement" },
    ],
    company: [
      { href: "/about", label: "aboutUs" },
      { href: "/contact", label: "contact" },
      { href: "#", label: "privacy" },
      { href: "#", label: "terms" },
    ],
    support: [
      { href: "#", label: "helpCenter" },
      { href: "#", label: "documentation" },
      { href: "#", label: "statusPage" },
      { href: "/contact", label: "getSupport" },
    ],
  },
} as const;

// Contact Information
export const CONTACT_INFO = {
  email: "hello@webagency.com",
  phone: "+1 (555) 123-4567",
  address: "123 Web Street, Digital City",
  social: {
    twitter: "#",
    linkedin: "#",
    github: "#",
  },
} as const; 