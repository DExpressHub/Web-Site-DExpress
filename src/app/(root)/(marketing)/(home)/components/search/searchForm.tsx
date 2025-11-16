'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle, Search } from 'lucide-react'

import { useSearch } from './searchProvider'
import { SearchFormData, searchFormSchema } from './searchFormSchema'
import { useSearchOptions } from './useSearchOptions'

import { Form } from '@/components/ui/form'
import { SelectFormField } from '@/components/SelectFormField'
import { Button } from '@/components/ui/button'

export function SearchForm() {
  const { citiesOptions, desiredPositions, generalAvailabilitiesOptions } = useSearchOptions()
  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      city: undefined,
      desiredPosition: undefined,
      availability: undefined,
    },
  })
  const { onSubmit, isFetching } = useSearch()

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          {/* Campos */}
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
              items={desiredPositions}
              label="Função a contratar"
              name="desiredPosition"
              placeholder="Selecione a Função"
            />
            <SelectFormField<SearchFormData>
              control={form.control}
              items={generalAvailabilitiesOptions}
              label="Disponibilidade"
              name="availability"
              placeholder="Selecione a Disponibilidade"
            />
          </div>

          {/* Botão */}
          <div className="justify-center flex">
            <Button
              aria-label="Buscar candidatos"
              className="cursor-pointer w-full md:w-1/3 mt-6 flex items-center gap-2
                         transition-all duration-200 ease-in-out
                         hover:scale-[1.03] hover:shadow-md active:scale-95"
              disabled={isFetching}
              type="submit"
            >
              {isFetching ? (
                <>
                  <LoaderCircle className="w-5 h-5 animate-spin" />
                  <span>Buscando...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Filtrar professional</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
