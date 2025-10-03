'use client'
import { Briefcase, Plus, Trash2 } from 'lucide-react'
import React from 'react'
import { useFieldArray } from 'react-hook-form'

import { useApplyOptions } from './useApplyOptions'
import { useApplyForm } from './applyFormProvider'

import { SelectFormField } from '@/components/SelectFormField'
import { InputFormField } from '@/components/inputFormField'

export function Professional() {
  const { form } = useApplyForm()
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'ProfessionalExperience',
  })
  const { desiredPositions, experienceLevelsOptions } = useApplyOptions()

  return (
    <section className="flex-col flex gap-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Informações Profissionais</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectFormField
          control={form.control}
          items={experienceLevelsOptions}
          label="Experiência Profissional"
          name="experienceLevelId"
          placeholder="Selecione a Profissional"
        />
        <SelectFormField
          control={form.control}
          items={desiredPositions}
          label="Posição desejada"
          name="desiredPositionId"
          placeholder="Selecione a Posição"
        />
      </div>
      <InputFormField
        control={form.control}
        label="Data de Disponibilidade"
        name="availabilityDate"
        placeholder="Data de Disponibilidade"
        type="date"
      />
      <div className="space-y-4">
        <p className="text-sm font-medium">Experiência Profissional</p>
        {fields.map((field, index) => (
          <div key={field.id} className="grid md:grid-cols-3 gap-4 items-end relative">
            <InputFormField
              control={form.control}
              label="Local de Trabalho"
              name={`ProfessionalExperience.${index}.localTrabalho`}
              placeholder="Ex: Empresa ABC"
              type="text"
            />
            <InputFormField
              control={form.control}
              label="Cargo"
              name={`ProfessionalExperience.${index}.cargo`}
              placeholder="Ex: Gerente de Vendas"
              type="text"
            />
            <InputFormField
              control={form.control}
              label="Tempo"
              name={`ProfessionalExperience.${index}.tempo`}
              placeholder="Ex: 3 anos"
              type="text"
            />

            <button
              className="absolute -top-3 right-0 cursor-pointer text-destructive-foreground h-8 w-8 rounded-full flex items-center justify-center bg-destructive"
              onClick={() => remove(index)}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}

        <button
          aria-label="Adicionar Experiência"
          className="cursor-pointer text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center bg-primary"
          type="button"
          onClick={() => append({ localTrabalho: '', cargo: '', tempo: '' })}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
