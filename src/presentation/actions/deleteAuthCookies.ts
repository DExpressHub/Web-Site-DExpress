'use server'

import { cookies } from 'next/headers'

export async function deleteAuthCookies() {
  const cookieStore = await cookies()

  cookieStore.delete('NEXT_refresh_token')
  cookieStore.delete('NEXT_access_token')
}
