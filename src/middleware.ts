import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get('NEXT_refresh_token')?.value
  const accessToken = req.cookies.get('NEXT_access_token')?.value
  const { pathname } = req.nextUrl

  const publicRoutes = ['/', '/login', '/register', '/profissionais']
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route))

  if (
    refreshToken &&
    accessToken &&
    (pathname.startsWith('/login') || pathname.startsWith('/register') || pathname === '/')
  ) {
    return NextResponse.redirect(new URL('/profissionais', req.url))
  }

  if (!refreshToken && !accessToken && !isPublicRoute) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
