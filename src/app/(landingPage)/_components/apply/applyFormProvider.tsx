'use client'
import React from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { personalInfoSchema } from './personalInfoSchema'

const formSchema = z
  .object({
    address: z.string().min(5, 'Endereço deve ter pelo menos 5 caracteres'),
    experience: z.string().min(1, 'Selecione uma opção de experiência'),
    specialties: z.array(z.string()).min(1, 'Selecione pelo menos uma especialidade'),
    availability: z.string().min(1, 'Selecione uma opção de disponibilidade'),
    description: z.string().optional(),
  })
  .merge(personalInfoSchema)

type FormData = z.infer<typeof formSchema>
type ContextValue = {
  citiesOptions: {
    key: string
    label: string
  }[]
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  form: UseFormReturn<FormData>
}

export const ApplyContext = React.createContext<null | ContextValue>(null)

type ApplyFormProviderType = { children: React.ReactNode }

export function ApplyFormProvider({ children }: ApplyFormProviderType) {
  const citiesOptions = React.useMemo(
    () => [].map(({ id, name }) => ({ key: id, label: name })),
    [],
  )
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      identityNumber: '',
      phoneNumber: '',
      optionalPhoneNumber: '',
      maritalStatus: '',
      hasChildren: '',
      knownDiseases: '',
      email: '',
      phone: '',
      birthDate: '',
      address: '',
    },
  })
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
  }
  const value: ContextValue = { citiesOptions, onSubmit, form }

  return <ApplyContext.Provider value={value}>{children}</ApplyContext.Provider>
}

export function useApplyForm() {
  const context = React.useContext(ApplyContext)

  if (!context) {
    throw new Error('useApplyForm deve ser usado dentro de ApplyFormProvider')
  }

  return context
}
