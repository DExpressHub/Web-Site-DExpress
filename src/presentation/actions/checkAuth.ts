'use server'

import { cookies } from 'next/headers'

interface AuthStatus {
  isAuthenticated: boolean
}

export async function checkAuth(): Promise<AuthStatus> {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('NEXT_access_token')

  if (!accessToken) {
    return { isAuthenticated: false }
  }

  return { isAuthenticated: true }
}
