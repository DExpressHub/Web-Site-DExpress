'use server'

import { cookies } from 'next/headers'

import { D_EXPRESS } from '@/constants'

export async function deleteAuthCookies() {
  const cookieStore = await cookies()

  cookieStore.delete(D_EXPRESS.refreshToken)
  cookieStore.delete(D_EXPRESS.accessToken)
  cookieStore.delete('user_id')
}
