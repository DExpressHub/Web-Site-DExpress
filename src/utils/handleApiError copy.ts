import { ApiError } from '@/core/types/apiError'

export function handleApiError(err: unknown): ApiError {
  if (err && typeof err === 'object' && 'message' in err) {
    return err as ApiError
  }

  return {
    message: 'Erro inesperado',
    error: 'Unknown',
    statusCode: 500,
  }
}
