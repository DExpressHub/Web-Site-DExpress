import { getSpecialtiesUseCaseFactory } from '../factories/getSpecialties'

const TWENTY_FOUR_HOURS_IN_SECONDS = 24 * 60 * 60

export async function loadLandingPageData() {
  const data: { specialties: Specialty[] } = { specialties: [] }

  const specialtiesResult = await getSpecialtiesUseCaseFactory().execute()

  if (specialtiesResult.success) {
    data.specialties = specialtiesResult.data
  }

  return { ...data }
}
