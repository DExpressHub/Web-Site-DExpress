import 'server-only'
import ky from 'ky'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { env } from '@/config/env'
import { ApiError } from '@/types/apiError'

async function attachCookies(request: Request) {
  const cookieStore = await cookies()
  const cookiesString = cookieStore.toString()

  if (cookiesString) request.headers.set('cookie', cookiesString)
}

export const api = ky.create({
  credentials: 'include',
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  throwHttpErrors: true,
  retry: 0,
  hooks: {
    beforeRequest: [
      async (request) => {
        await attachCookies(request)
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401) {
          // tenta o refresh pelo nosso route handler interno
          const refreshRes = await ky.post(`${env.NEXT_PUBLIC_API_URL}/api/auth/refresh`)

          if (refreshRes.ok) {
            return ky(request, options)
          }
          redirect('/login')
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
