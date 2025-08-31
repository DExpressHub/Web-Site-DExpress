'use server'

import { cookies } from 'next/headers'

import { D_EXPRESS } from '@/constants'

interface AuthStatus {
  isAuthenticated: boolean
}

export async function checkAuth(): Promise<AuthStatus> {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get(D_EXPRESS.accessToken)
  const refreshToken = cookieStore.get(D_EXPRESS.refreshToken)

  if (!accessToken && !refreshToken) {
    return { isAuthenticated: false }
  }

  return { isAuthenticated: true }
}
