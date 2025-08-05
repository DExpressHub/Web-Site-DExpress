import { loadLandingPageData } from '@/main/loaders/landingPageData'
import { ApplySection } from '@/presentation/components/landingPage/apply'
import { HeroSection } from '@/presentation/components/landingPage/hero'
import { HowItWorks } from '@/presentation/components/landingPage/howItWorks'
import { Navbar } from '@/presentation/components/landingPage/navbar'
import { SearchSection } from '@/presentation/components/landingPage/search'

export default async function LandingPage() {
  const { specialties } = await loadLandingPageData()

  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SearchSection specialties={specialties} />
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
