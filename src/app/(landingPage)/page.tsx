import { Navbar } from './components/navbar'
import { HeroSection } from './components/hero'
import { HowItWorks } from './components/howItWorks'
import { SearchSection } from './components/search'
import { ApplySection } from './components/apply'
import { LoadPageData } from './components/load'
import { PlanSection } from './components/plan'
import { TestimonialsSection } from './components/testimonials'
import { BecomeClientSection } from './components/becomeClients'
import { BecomeClientProvider } from './components/becomeClients/becomeClientContext'
import { Footer } from './components/footer'

export default async function LandingPage() {
  return (
    <LoadPageData>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SearchSection />
      <ApplySection />
      <BecomeClientProvider>
        <PlanSection />
        <TestimonialsSection />
        <BecomeClientSection />
      </BecomeClientProvider>
      <Footer />
    </LoadPageData>
  )
}
