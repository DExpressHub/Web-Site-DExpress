import { z } from 'zod'

export const locationSchema = z.object({
  cityId: z.string().min(1, 'Selecione uma opção'),
  districtId: z.string().min(1, 'Selecione uma opção'),
  street: z.string().min(1, 'Endereço é obrigatório'),
})
export const defaultValuesLocation = {
  cityId: '',
  districtId: '',
  street: '',
} as const
