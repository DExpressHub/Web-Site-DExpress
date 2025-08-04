import { ApplySection } from '@/presentation/components/landingPage/apply'
import { HeroSection } from '@/presentation/components/landingPage/hero'
import { HowItWorks } from '@/presentation/components/landingPage/howItWorks'
import { Navbar } from '@/presentation/components/landingPage/navbar'
import { SearchSection } from '@/presentation/components/landingPage/search'

const TWENTY_FOUR_HOURS_IN_SECONDS = 24 * 60 * 60

// export default async function Page() {
//   // const errors: { city?: string; specialty?: string } = {}

//   // const [citiesResult, specialtiesResult] = await Promise.allSettled([
//   //   getCitiesServices({ revalidate: TWENTY_FOUR_HOURS_IN_SECONDS }),
//   //   getSpecialtiesService({ revalidate: TWENTY_FOUR_HOURS_IN_SECONDS }),
//   // ])

//   // if (specialtiesResult.status === 'fulfilled' && specialtiesResult.value.success) {
//   //   data.specialties = specialtiesResult.value.data
//   // } else if (specialtiesResult.status === 'rejected' || !specialtiesResult.value.success) {
//   //   const error =
//   //     specialtiesResult.status === 'rejected'
//   //       ? specialtiesResult.reason
//   //       : specialtiesResult.value.error

//   //   errors.city = `Erro ao carregar especialidades: ${error}`
//   // }

//   // if (citiesResult.status === 'fulfilled' && citiesResult.value.success) {
//   //   data.cities = citiesResult.value.data
//   // } else if (citiesResult.status === 'rejected' || !citiesResult.value.success) {
//   //   const error =
//   //     citiesResult.status === 'rejected' ? citiesResult.reason : citiesResult.value.error

//   //   errors.city = `Erro ao carregar cidades: ${error}`
//   // }

//   // if (Object.entries(errors).length > 0) {
//   //   data.errors = errors
//   // }

//   return (
//     <div>
//       <h1>Ola mundo</h1>
//     </div>
//   )
// }

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SearchSection />
      <ApplySection />
      {/*

      <SearchSection />
      <ApplySection />
      <PlansSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer /> */}
    </>
  )
}
