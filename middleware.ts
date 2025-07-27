import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  getLocaleForRequest,
  hasLocalePrefix,
  shouldSkipI18n
} from "./lib/utils/i18n";

/**
 * Middleware for internationalization
 * Automatically redirects users to the appropriate locale-prefixed URL
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal paths and static assets
  if (shouldSkipI18n(pathname)) {
    return;
  }

  // If pathname already has a locale prefix, continue
  if (hasLocalePrefix(pathname)) {
    return;
  }

  // Get the appropriate locale and redirect
  const locale = getLocaleForRequest(request);
  const newUrl = new URL(`/${locale}${pathname}${request.nextUrl.search}`, request.url);
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico).*)",
  ],
}
