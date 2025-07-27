/**
 * Internationalization utilities
 * Handles locale detection and validation
 */

import type { NextRequest } from "next/server";

export const SUPPORTED_LOCALES = ["en", "dk"] as const;
export const DEFAULT_LOCALE = "en" as const;

export type SupportedLocale = typeof SUPPORTED_LOCALES[number];

/**
 * Language code mappings for browser language detection
 */
const LANGUAGE_MAPPINGS: Record<string, SupportedLocale> = {
  'da': 'dk',
  'da-DK': 'dk',
  'en': 'en',
  'en-US': 'en',
  'en-GB': 'en',
};

/**
 * Checks if a locale is supported
 */
export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

/**
 * Checks if the pathname already has a locale prefix
 */
export function hasLocalePrefix(pathname: string): boolean {
  return SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
}

/**
 * Extracts locale from pathname
 */
export function getLocaleFromPathname(pathname: string): SupportedLocale | null {
  const segments = pathname.split('/');
  const firstSegment = segments[1];
  
  return isSupportedLocale(firstSegment) ? firstSegment : null;
}

/**
 * Detects preferred locale from Accept-Language header
 */
export function detectLocaleFromHeader(request: NextRequest): SupportedLocale {
  const acceptLanguage = request.headers.get("accept-language");
  
  if (!acceptLanguage) {
    return DEFAULT_LOCALE;
  }

  // Parse Accept-Language header and find best match
  const preferredLanguages = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim())
    .map((lang) => LANGUAGE_MAPPINGS[lang])
    .filter(Boolean);

  return preferredLanguages[0] || DEFAULT_LOCALE;
}

/**
 * Gets the appropriate locale for a request
 * First checks pathname, then falls back to Accept-Language header
 */
export function getLocaleForRequest(request: NextRequest): SupportedLocale {
  const { pathname } = request.nextUrl;
  
  // Check if pathname already has a locale
  const pathLocale = getLocaleFromPathname(pathname);
  if (pathLocale) {
    return pathLocale;
  }
  
  // Fall back to header detection
  return detectLocaleFromHeader(request);
}

/**
 * Checks if a path should be excluded from i18n processing
 */
export function shouldSkipI18n(pathname: string): boolean {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  );
} 