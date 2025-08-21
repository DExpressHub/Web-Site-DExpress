import ky from 'ky'

import { env } from '@/config/env'
import { ApiError } from '@/core/types/apiError'

export const api = ky.create({
  credentials: 'include',
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  throwHttpErrors: true,
  retry: 0,
  hooks: {
    afterResponse: [
      async (_request, _options, response) => {
        if (!response.ok) {
          const errorBody = (await response.json().catch(() => null)) as Partial<ApiError>

          const apiError: ApiError = {
            message: errorBody?.message || 'Erro desconhecido',
            error: errorBody?.error || 'Unknown',
            statusCode: errorBody?.statusCode || response.status,
          }

          throw apiError
        }
      },
    ],
  },
})
