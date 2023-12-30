import { NextRequest, NextResponse } from 'next/server';
import { API_BASE } from '@/constants';
import { LINKS, getApiError } from '@/util';
import { cookies } from 'next/headers';
import { sitesRoutes } from '@/util';
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicPath =
    path === LINKS.HOME ||
    path === LINKS.LOGIN ||
    path === LINKS.REGISTER || path ===LINKS.VERIFY;

  console.log(req.nextUrl.pathname);
  if (sitesRoutes.includes(req.nextUrl.pathname as any)) {
    let user;
    try {
      const token = cookies().get('jwt')?.value;
      const response = await fetch(`${API_BASE}/users/me`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw await getApiError(response);
      }
      user = await response.json();
    } catch (err) {
      console.log('MAIN ERROR');
      console.log(err);
    }

    if (isPublicPath && user) {
      return NextResponse.redirect(
        new URL(LINKS.PARTNER_SUGGESTION, req.nextUrl)
      );
    }
    if (!isPublicPath && !user) {
      return NextResponse.redirect(new URL(LINKS.LOGIN, req.nextUrl));
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ...sitesRoutes,
  ],
};
