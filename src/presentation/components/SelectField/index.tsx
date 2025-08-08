'use client'
import { FieldValues } from 'react-hook-form'

import { SelectFieldProps } from './type'

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

export function SelectField<T extends FieldValues>(props: SelectFieldProps<T>) {
  const { control, name, placeholder, label, items } = props

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select value={field.value} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger className="h-12 cursor-pointer">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item, index) => (
                <SelectItem
                  key={`${item.value}-{${index}-${name}}`}
                  className="cursor-pointer"
                  value={item.value}
                >
                  {item.label}
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
