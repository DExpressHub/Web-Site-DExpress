'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

type HireFormClientContextValue = {
  form: UseFormReturn<
    {
      description: string
      serviceFrequency: string
    },
    any,
    undefined
  >
}
const HireFormClientContext = React.createContext<null | HireFormClientContextValue>(null)

export const formSchema = z.object({
  description: z.string().min(10, { message: 'Descrição deve ter pelo menos 10 caracteres' }),
  serviceFrequency: z.string().min(1, { message: 'Frequência de serviço é obrigatória' }),
})

export function HireFormClientProvider({ children }: { children: React.ReactNode }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
      serviceFrequency: '',
    },
  })

  const value: HireFormClientContextValue = { form }

  return <HireFormClientContext.Provider value={value}>{children}</HireFormClientContext.Provider>
}

export function useHireFormClient() {
  const context = React.useContext(HireFormClientContext)

  if (!context) throw new Error('useHireFormClient must be used within a HireFormClientProvider')

  return context
}
