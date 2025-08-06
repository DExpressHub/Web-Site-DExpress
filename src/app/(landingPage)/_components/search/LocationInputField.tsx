'use client'
import { MapPin } from 'lucide-react'
import { Control } from 'react-hook-form'

import { SearchFormData } from './searchFormSchema'

import { Input } from '@/presentation/components/ui/input'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/presentation/components/ui/form'

type Props = {
  control: Control<SearchFormData>
}

export function LocationInputField({ control }: Props) {
  return (
    <FormField
      control={control}
      name="location"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Localização
          </FormLabel>
          <FormControl>
            <Input {...field} className="h-12" placeholder="Digite sua cidade..." />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
