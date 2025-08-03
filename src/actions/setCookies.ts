'use server'

import { cookies } from 'next/headers'

export async function SetCookies<T>(key: string, value: T) {
  const action = await cookies()

  action.set(key, JSON.stringify(value))
}
