'use client'

import {
  ApplySection,
  Footer,
  HeroSection,
  HowItWorksSection,
  Navbar,
  PricingSection,
  ProfessionalsSection,
  TestimonialsSection,
} from './components'

import { City, Specialty } from '@/types'

export interface LandingPageProps {
  specialties?: Specialty[]
  cities?: City[]
  errors?: { city?: string; specialty?: string }
}
export function LandingPage({ cities, errors, specialties }: LandingPageProps) {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection id="how-it-works" />
        <PricingSection id="plans" />
        <ProfessionalsSection id="professionals" />
        {!errors && cities && specialties && <ApplySection cities={cities} id="apply" />}

        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
