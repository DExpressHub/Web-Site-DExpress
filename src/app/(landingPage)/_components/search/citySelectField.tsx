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
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/presentation/components/ui/select'
import { useCitiesQuery } from '@/presentation/hooks/useCitiesQuery'

type Props = {
  control: Control<SearchFormData>
}

export function CitySelectField({ control }: Props) {
  const { cities } = useCitiesQuery()

  return (
    <FormField
      control={control}
      name="city"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Cidade</FormLabel>
          <Select value={field.value} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Selecione a cidade" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city.id} value={city.id}>
                  {city.name}
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
