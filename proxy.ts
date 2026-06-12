import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, localePath, type Locale } from "./app/lib/i18n";

function preferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";
  return acceptLanguage.startsWith("de") || acceptLanguage.includes(",de") ? "de" : defaultLocale;
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = localePath(preferredLocale(request));
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/",
};
