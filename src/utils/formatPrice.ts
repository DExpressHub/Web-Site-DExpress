export function formatPrice(price: number, locale = 'pt-AO') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'AOA',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)
}
