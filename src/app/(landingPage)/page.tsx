import { Navbar } from './_components/navbar'
import { HeroSection } from './_components/hero'
import { HowItWorks } from './_components/howItWorks'
import { SearchSection } from './_components/search'
import { ApplySection } from './_components/apply'
import { LoadPageData } from './_components/load'

export default async function LandingPage() {
  return (
    <LoadPageData>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SearchSection />
      <ApplySection />
    </LoadPageData>
  )
}

{
  /*

      <SearchSection />
      <ApplySection />
      <PlansSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer /> */
}
