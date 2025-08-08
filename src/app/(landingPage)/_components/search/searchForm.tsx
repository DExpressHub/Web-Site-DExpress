'use client'
import { LoaderCircle, Search } from 'lucide-react'
import React from 'react'

import { useSearch } from './searchProvider'
import { SearchFormData } from './searchFormSchema'

import { Form } from '@/presentation/components/ui/form'
import { Button } from '@/presentation/components/ui/button'
import { SelectField } from '@/presentation/components/SelectField'
import { GeneralAvailability } from '@/core/constants/generalAvailability'
const availabilityOptions = [
  { value: 'all', label: 'Todas' },
  ...GeneralAvailability.map((option) => ({ value: option.value, label: option.name })),
]

export function SearchForm() {
  const { isLoading, onSubmit, form, citiesOptions, specialtiesOptions } = useSearch()

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-3 gap-6">
          <SelectField<SearchFormData>
            control={form.control}
            items={citiesOptions}
            label="Cidade"
            name="city"
            placeholder="Selecione a cidade"
          />
          <SelectField<SearchFormData>
            control={form.control}
            items={specialtiesOptions}
            label="Especialidade"
            name="specialty"
            placeholder="Selecione a especialidade"
          />
          <SelectField<SearchFormData>
            control={form.control}
            items={availabilityOptions}
            label="Disponibilidade"
            name="availability"
            placeholder="Selecione a Disponibilidade"
          />
        </div>

        <Button className="text-lg px-8 cursor-pointer py-6" disabled={isLoading} type="submit">
          {isLoading ? (
            <>
              <LoaderCircle className="w-5 h-5 mr-2 animate-spin" /> Buscando Profissionais
            </>
          ) : (
            <>
              <Search className="w-5 h-5 mr-2" /> Buscar Profissionais
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
