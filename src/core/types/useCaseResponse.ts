import { ApiError } from './apiError'

export type UseCaseResponse<T> =
  | {
      success: true
      data: T
      error?: never
    }
  | {
      success: false
      error: ApiError
      data?: never
    }
