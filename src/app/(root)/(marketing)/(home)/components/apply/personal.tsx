'use client'
import { User } from 'lucide-react'

import { useApplyForm } from './applyFormProvider'
import { useApplyOptions } from './useApplyOptions'

import { InputFormField } from '@/components/inputFormField'
import { SelectFormField } from '@/components/SelectFormField'

const childrenOptions = [
  {
    value: 'NO',
    label: 'Não',
  },
  {
    value: 'YES',
    label: 'Sim',
  },
]
const knownDiseasesOptions = [
  {
    value: 'NO',
    label: 'Não',
  },
  {
    value: 'YES',
    label: 'Sim',
  },
]

export function Personal() {
  const { form } = useApplyForm()
  const { genderOptions, martialStatusOptions } = useApplyOptions()

  return (
    <section className="flex-col flex gap-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <User className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Informações Pessoais</h3>
      </div>
      <InputFormField
        control={form.control}
        label="Nome Completo"
        name="fullName"
        placeholder="Digite seu nome completo"
        type="text"
      />
      <div className="grid md:grid-cols-2 gap-6">
        <InputFormField
          control={form.control}
          label="Bilhete de identidade"
          name="identityNumber"
          placeholder="Bilhete de identidade"
          type="text"
        />
        <InputFormField
          control={form.control}
          label="Data de Nascimento"
          name="birthDate"
          placeholder="Data de Nascimento"
          type="date"
        />
        <SelectFormField
          control={form.control}
          items={genderOptions}
          label="Género"
          name="genderId"
          placeholder="Género"
        />
        <SelectFormField
          control={form.control}
          items={martialStatusOptions}
          label="Estado Civil"
          name="maritalStatusId"
          placeholder="Estado Civil"
        />

        <SelectFormField
          control={form.control}
          items={childrenOptions}
          label="Tem filhos?"
          name="hasChildren"
          placeholder="Tem filhos?"
        />
        <SelectFormField
          control={form.control}
          items={knownDiseasesOptions}
          label="Doenças ou condições médicas conhecidas?"
          name="knownDiseases"
          placeholder="Doenças ou condições médicas conhecidas?"
        />
      </div>
    </section>
  )
}
