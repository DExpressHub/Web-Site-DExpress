'use server'

import { cookies } from 'next/headers'

import { D_EXPRESS } from '@/constants'

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

  cookieStore.set(D_EXPRESS.refreshToken, refreshToken, secureConfig)
  cookieStore.set(D_EXPRESS.accessToken, accessToken, secureConfig)

  return { success: true }
}
