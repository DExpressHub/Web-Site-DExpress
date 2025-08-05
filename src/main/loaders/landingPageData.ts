import { getSpecialtiesUseCaseFactory } from '../factories/getSpecialties';

import { Specialty } from '@/core/types/specialty'
const TWENTY_FOUR_HOURS_IN_SECONDS = 24 * 60 * 60;

export async function loadLandingPageData() {
  const data: { specialties: Specialty[] } = { specialties: [] }

  const specialtiesResult = await getSpecialtiesUseCaseFactory({
    revalidate: TWENTY_FOUR_HOURS_IN_SECONDS,
  }).execute()

  if (specialtiesResult.success) {
    data.specialties = specialtiesResult.data;
  }

  return { ...data }
}
