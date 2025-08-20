'use client'

import React from 'react'
import { Crown, LucideProps, Star } from 'lucide-react'

import { useScrollTo } from '@/presentation/hooks/useScrollTo'
import { useListAllPlans } from '@/presentation/hooks/plan/useListAllPlans'
type BecomeClientContextValue = {
  plans: {
    details: string[]
    id: string
    description: string
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >
    isPopular: boolean
    period: string
    price: string
    name: string
  }[]
  handleSetPlan: (newPlan: string) => void
  planId: string
}
const BecomeClientContext = React.createContext<null | BecomeClientContextValue>(null)

export function BecomeClientProvider({ children }: { children: React.ReactNode }) {
  const [planId, setPlanId] = React.useState('')
  const scrollToSection = useScrollTo()
  const handleSetPlan = (planId: string) => {
    setPlanId(planId)
    scrollToSection('become-client')
  }
  const { plans } = useListAllPlans()
  const newPlans = React.useMemo(() => {
    return plans.map((plan) => ({
      details: plan.details,
      id: plan.id,
      description: plan.description,
      icon: plan.isPopular ? Crown : Star,
      period: '/mês',
      isPopular: plan.isPopular,
      price: Intl.NumberFormat('pt-AO', {
        style: 'currency',
        currency: 'AOA',
        minimumFractionDigits: 0,
      }).format(plan.price),
      name: plan.name.replace('Pacote ', ''),
    }))
  }, [plans])

  const value: BecomeClientContextValue = React.useMemo(
    () => ({
      plans: newPlans,
      planId,
      handleSetPlan,
    }),
    [plans, planId],
  )

  return <BecomeClientContext.Provider value={value}>{children}</BecomeClientContext.Provider>
}

export function useBecomeClient() {
  const context = React.useContext(BecomeClientContext)

  if (!context) throw new Error('useBecomeClient must be used within a BecomeClientProvider')

  return context
}
