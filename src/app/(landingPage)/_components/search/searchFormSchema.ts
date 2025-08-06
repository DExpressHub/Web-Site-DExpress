// src/presentation/schemas/searchFormSchema.ts
import * as z from 'zod'

export const searchFormSchema = z.object({
  location: z.string().min(1, 'Selecione a cidade'),
  specialty: z.string().min(1, 'Selecione a especialidade'),
  availability: z.string().min(1, 'Selecione a disponibilidade'),
})

export type SearchFormData = z.infer<typeof searchFormSchema>
