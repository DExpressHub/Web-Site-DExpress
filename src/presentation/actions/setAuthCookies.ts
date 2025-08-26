'use server'

import { cookies } from 'next/headers'

interface SetAuthCookiesParams {
  refreshToken: string
  accessToken: string
}

export async function setAuthCookies({ refreshToken, accessToken }: SetAuthCookiesParams) {
  const cookieStore = await cookies()

  const secureConfig = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  }

  cookieStore.set('NEXT_refresh_token', refreshToken, secureConfig)
  cookieStore.set('NEXT_access_token', accessToken, secureConfig)

  return { success: true }
}
