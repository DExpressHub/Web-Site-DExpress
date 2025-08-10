'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle, Search } from 'lucide-react'

import { useSearch } from './searchProvider'
import { SearchFormData, searchFormSchema } from './searchFormSchema'
import { useSearchOptions } from './useSearchOptions'

import { Form } from '@/presentation/components/ui/form'
import { SelectFormField } from '@/presentation/components/SelectFormField'
import { Button } from '@/presentation/components/ui/button'

export function SearchForm() {
  const { citiesOptions, specialtiesOptions, generalAvailabilitiesOptions } = useSearchOptions()
  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      city: undefined,
      specialty: undefined,
      availability: undefined,
    },
  })
  const { onSubmit, isFetching } = useSearch()

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex  flex-col md:flex-row md:justify-between items-baseline-last gap-6">
          <div className="grid flex-1 md:grid-cols-3 gap-6">
            <SelectFormField<SearchFormData>
              control={form.control}
              items={citiesOptions}
              label="Cidade"
              name="city"
              placeholder="Selecione a cidade"
            />
            <SelectFormField<SearchFormData>
              control={form.control}
              items={specialtiesOptions}
              label="Especialidade"
              name="specialty"
              placeholder="Selecione a especialidade"
            />
            <SelectFormField<SearchFormData>
              control={form.control}
              items={generalAvailabilitiesOptions}
              label="Disponibilidade"
              name="availability"
              placeholder="Selecione a Disponibilidade"
            />
          </div>

          <Button
            aria-label="Buscar"
            className="cursor-pointer w-full md:w-auto"
            disabled={isFetching}
            type="submit"
          >
            {isFetching ? (
              <>
                <LoaderCircle className="w-5 h-5 animate-spin" />
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
