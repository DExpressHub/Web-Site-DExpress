'use client'

import { Control } from 'react-hook-form'

import { SearchFormData } from './searchFormSchema'

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
export const GeneralAvailability = [
  {
    value: 'FULL_TIME',
    name: 'Tempo Integral',
  },
  {
    value: 'PART_TIME',
    name: 'Meio Período',
  },
  {
    value: 'DAILY',
    name: 'Diária',
  },
  {
    value: 'WEEKENDS',
    name: 'Fins de Semana',
  },
  {
    value: 'ANY',
    name: 'Qualquer disponibilidade',
  },
] as const

export function AvailabilitySelectField({ control }: Props) {
  return (
    <FormField
      control={control}
      name="availability"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Disponibilidade</FormLabel>
          <Select value={field.value} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Selecione a Disponibilidade" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {GeneralAvailability.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.name}
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
