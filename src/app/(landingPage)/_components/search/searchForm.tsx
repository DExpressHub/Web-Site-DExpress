'use client'
import { LoaderCircle, Search } from 'lucide-react'
import React from 'react'

import { SpecialtySelectField } from './SpecialtySelectField'
import { AvailabilitySelectField } from './AvailabilitySelectField'
import { CitySelectField } from './citySelectField'
import { useSearch } from './searchProvider'

import { Form } from '@/presentation/components/ui/form'
import { Button } from '@/presentation/components/ui/button'

export function SearchForm() {
  const { isLoading, onSubmit, form } = useSearch()

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-3 gap-6">
          <CitySelectField control={form.control} />
          <SpecialtySelectField control={form.control} />
          <AvailabilitySelectField control={form.control} />
        </div>

        <Button className="text-lg px-8 py-6" disabled={isLoading} type="submit">
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
