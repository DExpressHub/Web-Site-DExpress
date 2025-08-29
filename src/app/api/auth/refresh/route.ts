import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import ky from 'ky'

import { env } from '@/config/env'
import { D_EXPRESS } from '@/constants'
export async function POST() {
  const cookieStore = await cookies()
  const cookieHeader = cookieStore.toString()

  try {
    const res = await ky.post(`${env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
      headers: { cookie: cookieHeader },
      credentials: 'include',
    })

    if (!res.ok) {
      cookieStore.delete(D_EXPRESS.accessToken)
      cookieStore.delete(D_EXPRESS.refreshToken)

      return NextResponse.json({ error: 'Refresh token inválido' }, { status: 401 })
    }

    return NextResponse.json(await res.json())
  } catch {
    cookieStore.delete('accessToken')
    cookieStore.delete('refreshToken')

    return NextResponse.json({ error: 'Erro ao tentar refresh' }, { status: 401 })
  }
}
