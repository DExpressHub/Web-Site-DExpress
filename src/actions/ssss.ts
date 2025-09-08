'use server'

import { cookies } from 'next/headers'

import { D_EXPRESS } from '@/constants'

export async function setAccessTokenCookie(token: string) {
  const cookieStore = await cookies()

  cookieStore.set(D_EXPRESS.accessToken, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}
