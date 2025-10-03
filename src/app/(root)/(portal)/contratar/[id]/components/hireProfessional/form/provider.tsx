'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { GetCurrentUserResponse } from '@/types/users'

type HireFormClientContextValue = {
  user: GetCurrentUserResponse
  form: UseFormReturn<
    {
      description: string
      serviceFrequency: string
      individualAddress: string
      individualIdentityNumber: string
      requesterPhoneNumber: string
    },
    any,
    undefined
  >
}
const HireFormClientContext = React.createContext<null | HireFormClientContextValue>(null)
const phoneRegex = /^(?:\+244|244)?\s?9\d{8}$/
const phoneNumber = z.string().regex(phoneRegex, 'Número inválido')

export const biSchema = z
  .string()
  .trim()
  .min(1, { message: 'O BI é obrigatório' })
  .length(14, { message: 'O BI deve ter exatamente 14 caracteres.' })
  .refine((val) => /^\d{9}/.test(val), {
    message: 'O BI deve começar com 8 dígitos.',
  })
  .refine((val) => /^\d{9}[A-Z]{2}/.test(val), {
    message: 'Após os 9 dígitos, devem vir 2 letras maiúsculas.',
  })
  .refine((val) => /^\d{9}[A-Z]{2}\d{3}$/.test(val), {
    message: 'Os últimos 3 caracteres devem ser dígitos.',
  })
export const formSchema = z.object({
  description: z.string().min(10, { message: 'Descrição deve ter pelo menos 10 caracteres' }),
  serviceFrequency: z.string().min(1, { message: 'Frequência de serviço é obrigatória' }),
  requesterPhoneNumber: phoneNumber,
  individualIdentityNumber: biSchema,
  individualAddress: z.string().min(10, { message: 'Endereço é obrigatório' }),
})

export function HireFormClientProvider({
  children,
  user,
}: {
  children: React.ReactNode
  user: GetCurrentUserResponse
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
      serviceFrequency: '',
      individualAddress: '',
      individualIdentityNumber: '',
      requesterPhoneNumber: '',
    },
  })

  const value: HireFormClientContextValue = { form, user }

  return <HireFormClientContext.Provider value={value}>{children}</HireFormClientContext.Provider>
}

export function useHireFormClient() {
  const context = React.useContext(HireFormClientContext)

  if (!context) throw new Error('useHireFormClient must be used within a HireFormClientProvider')

  return context
}
