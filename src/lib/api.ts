import 'server-only'
import ky from 'ky'
import { cookies } from 'next/headers'

import { env } from '@/config/env'
import { ApiError } from '@/types/apiError'
import { D_EXPRESS } from '@/constants'
import { UnauthorizedError } from '@/errors'

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
        if (response.status === 401 && !request.url.includes('auth')) {
          const cookieStore = await cookies()

          const refresh = cookieStore.get(D_EXPRESS.refreshToken)?.value

          if (!refresh) {
            throw new UnauthorizedError()
          }

          const res = await fetch(`${env.NEXT_PUBLIC_API_URL}auth/refresh`, {
            method: 'POST',
            credentials: 'include',
            headers: { cookie: cookieStore.toString(), authorization: `Bearer ${refresh}` },
          })

          if (!res.ok) {
            throw new UnauthorizedError()
          }

          // const { accessToken } = await res.json()

          // await setAccessTokenCookie(accessToken)
          // TODO: ATUALIZAR TODAS CHAMADAS PARA CLIENT, VER FORMA DE VALIDAR REFRESH TOKEN NO SERVER TODOS ROTAS PRIVADAS CHAMAR NO CLIENTE, DEIXAR ROTAS
          throw new UnauthorizedError()
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
