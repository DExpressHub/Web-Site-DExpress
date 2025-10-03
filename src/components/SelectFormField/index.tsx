import { FieldValues } from 'react-hook-form'

import { SelectFormFieldProps } from './type'

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SelectFormField<T extends FieldValues>(props: SelectFormFieldProps<T>) {
  const { control, name, placeholder, label, items, disabled } = props

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select disabled={disabled} value={field.value} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger className="cursor-pointer">
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
