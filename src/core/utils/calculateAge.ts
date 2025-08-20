/**
 * Calculate someone's age from their birth date.
 * @param birthDate Birth date (Date or string in YYYY-MM-DD format)
 * @returns Age in years
 */
export function calculateAge(birthDate: Date | string): number {
  const dateOfBirth = typeof birthDate === 'string' ? new Date(birthDate) : birthDate
  const today = new Date()

  let age = today.getFullYear() - dateOfBirth.getFullYear()

  const currentMonth = today.getMonth()
  const currentDay = today.getDate()
  const birthMonth = dateOfBirth.getMonth()
  const birthDay = dateOfBirth.getDate()

  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--
  }

  return age
}
