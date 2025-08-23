import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('sessionToken')?.value
  const { pathname } = req.nextUrl

  const publicRoutes = ['/', '/login', '/register', '/profissionais']
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route))

  if (token && (pathname.startsWith('/auth/login') || pathname.startsWith('/auth/register'))) {
    return NextResponse.redirect(new URL('/profissionais', req.url))
  }

  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
