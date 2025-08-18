import { Navbar } from './_components/navbar'
import { HeroSection } from './_components/hero'
import { HowItWorks } from './_components/howItWorks'
import { SearchSection } from './_components/search'
import { ApplySection } from './_components/apply'
import { LoadPageData } from './_components/load'
import { PlanSection } from './_components/plan'
import { TestimonialsSection } from './_components/testimonials'
import { BecomeClientSection } from './_components/ddd'

export default async function LandingPage() {
  return (
    <LoadPageData>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SearchSection />
      <ApplySection />
      <PlanSection />
      <TestimonialsSection />
      <BecomeClientSection />
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
