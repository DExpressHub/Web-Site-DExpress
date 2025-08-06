'use client'

import { Filter } from 'lucide-react'
import { Control } from 'react-hook-form'

import { SearchFormData } from './searchFormSchema'

import { useSpecialtiesQuery } from '@/presentation/hooks/useSpecialtiesQuery'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/presentation/components/ui/form'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/presentation/components/ui/select'

type Props = {
  control: Control<SearchFormData>
}

export function SpecialtySelectField({ control }: Props) {
  const { specialties } = useSpecialtiesQuery()

  return (
    <FormField
      control={control}
      name="specialty"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-primary" />
            Especialidade
          </FormLabel>
          <Select defaultValue="all" value={field.value} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Todas as especialidades" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              {specialties.map((specialty) => (
                <SelectItem key={specialty.id} value={specialty.id}>
                  {specialty.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
