export type ServiceResponse<T> =
  | {
      data: T
      success: true
      error?: never
    }
  | {
      error: string
      success: false
      data?: never
    }
