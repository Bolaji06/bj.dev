import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.cookies.has("bj.dev-token")) {
    return NextResponse.redirect(new URL("/admin/account", request.url));
  }
}

export const config = {
  matcher: ["/admin/dashboard"],
};
