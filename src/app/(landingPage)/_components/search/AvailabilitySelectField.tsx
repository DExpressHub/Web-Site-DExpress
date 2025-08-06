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

export function AvailabilitySelectField({ control }: Props) {
  return (
    <FormField
      control={control}
      name="availability"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Disponibilidade</FormLabel>
          <Select defaultValue="all" value={field.value} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Qualquer disponibilidade" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="tempo-integral">Tempo Integral</SelectItem>
              <SelectItem value="meio-periodo">Meio Período</SelectItem>
              <SelectItem value="diaria">Diária</SelectItem>
              <SelectItem value="fins-de-semana">Fins de Semana</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
