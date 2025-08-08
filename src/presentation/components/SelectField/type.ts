import { Control, FieldValues, Path } from 'react-hook-form'

export type SelectFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  placeholder?: string
  label?: string
  items: { value: string; label: string }[]
}
