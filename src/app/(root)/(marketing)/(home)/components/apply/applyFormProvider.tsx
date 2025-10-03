'use client'

import React from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { formSchema, defaultValues, FormData } from './schema'
import { steps } from './steps'

import { useCreateJobApplication } from '@/hooks/jobApplication/useCreateJobApplication'

type ContextValue = {
  onSubmit: (data: FormData) => void
  form: UseFormReturn<FormData>
  isLoading: boolean
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  handleNextOrSubmit: () => Promise<void>
  handleBack: () => void
  steps: typeof steps
}

export const ApplyContext = React.createContext<null | ContextValue>(null)

export function ApplyFormProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = React.useState(0)
  const { isPending: isLoading, createJobApplicationAsync } = useCreateJobApplication()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onChange',
  })

  const onSubmit = React.useCallback(
    async (data: FormData) => {
      const result = await createJobApplicationAsync({
        fullName: data.fullName,
        identityNumber: data.identityNumber,
        birthDate: data.birthDate,
        genderId: data.genderId,
        maritalStatusId: data.maritalStatusId,
        email: data.email,
        phoneNumber: data.phoneNumber,
        optionalPhoneNumber: data.optionalPhoneNumber,
        desiredPositionId: data.desiredPositionId,
        availabilityDate: data.availabilityDate,
        ProfessionalExperience: data.ProfessionalExperience || [],
        highestDegreeId: data.highestDegreeId,
        courses: data.courses,
        languages: data.languages,
        skills: data.skills,
        hasChildren: data.hasChildren === 'YES',
        location: {
          cityId: data.cityId,
          districtId: data.districtId,
          street: data.street,
        },
        knownDiseases: data.knownDiseases === 'YES',
        experienceLevelId: data.experienceLevelId,
      })

      if (result?.success) {
        setCurrentStep(0)
        form.reset()
      }
    },
    [createJobApplicationAsync, form],
  )

  const handleNextOrSubmit = React.useCallback(async () => {
    const isLastStep = currentStep === steps.length - 1
    const valid = await form.trigger(steps[currentStep].fields, { shouldFocus: true })

    if (!valid) return
    if (isLastStep) {
      form.handleSubmit(onSubmit)()
    } else {
      setCurrentStep((prev) => prev + 1)
    }
  }, [currentStep, form, onSubmit])

  const handleBack = React.useCallback(() => {
    setCurrentStep((prev) => prev - 1)
  }, [])

  const value: ContextValue = {
    onSubmit,
    form,
    isLoading,
    currentStep,
    setCurrentStep,
    handleNextOrSubmit,
    handleBack,
    steps,
  }

  return <ApplyContext.Provider value={value}>{children}</ApplyContext.Provider>
}

export function useApplyForm() {
  const context = React.useContext(ApplyContext)

  if (!context) {
    throw new Error('useApplyForm deve ser usado dentro de ApplyFormProvider')
  }

  return context
}
