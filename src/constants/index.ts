export const D_EXPRESS = {
  refreshToken: 'refresh_token',
  accessToken: 'access_token',
}
export const serviceFrequency = [
  { value: 'MONTHLY', label: 'Mensal' },
  { value: 'BIMONTHLY', label: 'Bimestral' },
  { value: 'QUARTERLY', label: 'Trimestral' },
  { value: 'SEMIANNUALLY', label: 'Semestral' },
  { value: 'ANNUALLY', label: 'Anual' },
  { value: 'BIENNIALLY', label: 'Bienal ' },
]
export type ServiceFrequency = (typeof serviceFrequency)[number]['value']
