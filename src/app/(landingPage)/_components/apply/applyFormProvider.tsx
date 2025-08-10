'use client'
import React from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { personalInfoSchema } from './personalInfo'

import { env } from '@/config/env'

const formSchema = z
  .object({
    name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
    identityNumber: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
    birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
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
      name: '',
      email: '',
      phone: '',
      birthDate: '',
      address: '',
      experience: '',
      specialties: [],
      availability: '',
      description: '',
      identityNumber: '',
    },
  })
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const formattedData = {
      fullName: formData.get('fullName'),
      identityNumber: formData.get('identityNumber'),
      phoneNumber: formData.get('phoneNumber'),
      optionalPhoneNumber: formData.get('optionalPhoneNumber'),
      email: formData.get('email'),
      maritalStatus: formData.get('maritalStatus'),
      knownDiseases: formData.get('knownDiseases'),
      desiredPosition: formData.get('desiredPosition'),
      languages: formData.getAll('languages'),
      hasChildren: formData.get('hasChildren') === 'YES',
      availabilityDate: formData.get('availabilityDate'),
      professionalExperience: formData.get('professionalExperience'),
      skillsAndQualities: formData.getAll('skillsAndQualities'),
      location: {
        cityId: formData.get('cityId'),
        districtId: formData.get('districtId'),
        street: formData.get('street'),
      },
      highestDegree: formData.get('highestDegree'),
      courses: formData
        .get('courses')
        ?.toString()
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
    }

    try {
      const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/job-application`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      })

      const responseBody = await response.json()

      if (!response.ok) {
        console.log('❌ Erro ao enviar candidatura:', responseBody)

        return
      }

      console.log('✅ Candidatura enviada com sucesso:', responseBody)
    } catch (error) {
      console.log('❌ Erro inesperado ao enviar candidatura:', error)
    }
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
