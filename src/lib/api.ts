import 'server-only'
import ky from 'ky'
import { cookies } from 'next/headers'

import { env } from '@/config/env'
import { ApiError } from '@/types/apiError'
import { D_EXPRESS } from '@/constants'
export class RefreshTokenExpiredError extends Error {
  constructor() {
    super('Refresh token expired')
  }
}
const secureConfig = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
}

export const api = ky.create({
  credentials: 'include',
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  throwHttpErrors: true,
  retry: 0,

  hooks: {
    beforeRequest: [
      async (request) => {
        const cookieStore = await cookies()

        request.headers.set('cookie', cookieStore.toString())
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401 && !request.url.includes('auth/refresh')) {
          const cookieStore = await cookies()

          const refresh = cookieStore.get(D_EXPRESS.refreshToken)?.value

          if (!refresh) {
            throw new RefreshTokenExpiredError()
          }

          const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
            method: 'POST',
            credentials: 'include',
            headers: { cookie: cookieStore.toString(), authorization: `Bearer ${refresh}` },
          })

          if (!res.ok) {
            throw new RefreshTokenExpiredError()
          }
          console.log('Token refreshed successfully', await res.json())
          const { accessToken } = await res.json()

          cookieStore.set(D_EXPRESS.accessToken, accessToken, secureConfig)
        }

        if (!response.ok) {
          const errorBody = (await response.json().catch(() => null)) as Partial<ApiError>

          throw {
            message: errorBody?.message || 'Erro desconhecido',
            error: errorBody?.error || 'Unknown',
            statusCode: errorBody?.statusCode || response.status,
          } satisfies ApiError
        }

        return response
      },
    ],
  },
})
