import { NextResponse } from "next/server";

const locales = ["en", "th"];
const defaultLocale = "en";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname.includes(".")) {
    return;
  }

  const pathnameParts = pathname.split("/");
  const localeInPath = pathnameParts[1];

  if (locales.includes(localeInPath)) {
    return;
  }

  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, req.url)
  );
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
