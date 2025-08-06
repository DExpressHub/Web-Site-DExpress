'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'

import { LocationInputField } from './LocationInputField'
import { SpecialtySelectField } from './SpecialtySelectField'
import { SearchFormData, searchFormSchema } from './searchFormSchema'
import { AvailabilitySelectField } from './AvailabilitySelectField'

import { Form } from '@/presentation/components/ui/form'
import { Button } from '@/presentation/components/ui/button'

export function SearchForm() {
  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      location: '',
      specialty: 'all',
      availability: 'all',
    },
  })

  const onSubmit = (data: SearchFormData) => {
    console.log('🔍 Dados de busca:', data)
  }

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-3 gap-6">
          <LocationInputField control={form.control} />
          <SpecialtySelectField control={form.control} />
          <AvailabilitySelectField control={form.control} />
        </div>

        <Button className="w-full cursor-pointer md:w-auto px-12 py-6 text-lg" type="submit">
          <Search className="w-5 h-5 mr-2" />
          Buscar Profissionais
        </Button>
      </form>
    </Form>
  )
}
