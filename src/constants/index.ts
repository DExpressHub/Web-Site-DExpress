export const D_EXPRESS = {
  refreshToken: 'refresh_token',
  accessToken: 'access_token',
}
export const serviceFrequency = [
  { value: 'SEMIANNUALLY', label: 'Semestral' },
  { value: 'ANNUALLY', label: 'Anual' },
  { value: 'DAILY', label: 'Diária' },
]

export type ServiceFrequency = (typeof serviceFrequency)[number]['value']
