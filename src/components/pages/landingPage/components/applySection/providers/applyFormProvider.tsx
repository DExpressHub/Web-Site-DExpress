/* eslint-disable no-console */
import React from 'react'

import { City } from '@/types'
import { env } from '@/config/env'

type ContextValue = {
  citiesOptions: {
    key: string
    label: string
  }[]
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}
export const ApplyContext = React.createContext<null | ContextValue>(null)

type ApplyFormProviderType = { children: React.ReactNode; cities: City[] }

export function ApplyFormProvider({ children, cities }: ApplyFormProviderType) {
  const citiesOptions = React.useMemo(
    () => cities.map(({ id, name }) => ({ key: id, label: name })),
    [],
  )
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
  const value = { citiesOptions, onSubmit }

  return <ApplyContext.Provider value={value}>{children}</ApplyContext.Provider>
}
