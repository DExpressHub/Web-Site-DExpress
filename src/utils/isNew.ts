import dayjs from 'dayjs'

export function isNew(date: Date, daysLimit = 30): boolean {
  const inputDate = dayjs(date).startOf('day')
  const today = dayjs().startOf('day')

  const diffInDays = today.diff(inputDate, 'day')

  return diffInDays <= daysLimit
}
