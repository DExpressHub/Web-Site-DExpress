import { LandingPage, LandingPageProps } from '@/components/pages'
import { getCitiesServices } from '@/services/getCities'
import { getSpecialtiesService } from '@/services'

const TWENTY_FOUR_HOURS_IN_SECONDS = 24 * 60 * 60

export default async function Page() {
  const data: LandingPageProps = {}
  const errors: { city?: string; specialty?: string } = {}

  const [citiesResult, specialtiesResult] = await Promise.allSettled([
    getCitiesServices({ revalidate: TWENTY_FOUR_HOURS_IN_SECONDS }),
    getSpecialtiesService({ revalidate: TWENTY_FOUR_HOURS_IN_SECONDS }),
  ])

  if (specialtiesResult.status === 'fulfilled' && specialtiesResult.value.success) {
    data.specialties = specialtiesResult.value.data
  } else if (specialtiesResult.status === 'rejected' || !specialtiesResult.value.success) {
    const error =
      specialtiesResult.status === 'rejected'
        ? specialtiesResult.reason
        : specialtiesResult.value.error

    errors.city = `Erro ao carregar especialidades: ${error}`
  }

  if (citiesResult.status === 'fulfilled' && citiesResult.value.success) {
    data.cities = citiesResult.value.data
  } else if (citiesResult.status === 'rejected' || !citiesResult.value.success) {
    const error =
      citiesResult.status === 'rejected' ? citiesResult.reason : citiesResult.value.error

    errors.city = `Erro ao carregar cidades: ${error}`
  }

  if (Object.entries(errors).length > 0) {
    data.errors = errors
  }

  return <LandingPage {...data} />
}
