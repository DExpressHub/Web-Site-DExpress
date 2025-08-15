export function buildQueryParams<T extends Record<string, any>>(params?: T) {
  const query = new URLSearchParams()

  if (!params) return ''

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      query.set(key, String(value))
    }
  }

  return query.toString()
}
