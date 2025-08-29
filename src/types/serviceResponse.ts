import { ApiError } from './apiError'

export type ServiceResponse<T> =
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
