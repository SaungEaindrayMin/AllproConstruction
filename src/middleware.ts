import { NextResponse } from "next/server";

const locales = ["en", "th"];
const defaultLocale = "en";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // ignore static files
  if (pathname.startsWith("/_next") || pathname.includes(".")) return;

  // check locale in path
  const locale = pathname.split("/")[1];

  if (locales.includes(locale)) return;

  // redirect to default
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, req.url)
  );
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
