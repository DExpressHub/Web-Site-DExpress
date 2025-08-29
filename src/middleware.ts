import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

import { D_EXPRESS } from './constants'

export function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get(D_EXPRESS.refreshToken)?.value
  const accessToken = req.cookies.get(D_EXPRESS.accessToken)?.value
  const { pathname } = req.nextUrl

  const publicRoutes = ['/', '/login', '/register', '/profissionais']
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route))

  if (
    refreshToken &&
    accessToken &&
    (pathname.startsWith('/login') || pathname.startsWith('/register'))
  ) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (!refreshToken && !accessToken && !isPublicRoute) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
