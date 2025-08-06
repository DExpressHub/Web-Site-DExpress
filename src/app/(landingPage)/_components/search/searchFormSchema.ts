// src/presentation/schemas/searchFormSchema.ts
import * as z from 'zod'

export const searchFormSchema = z.object({
  location: z.string().min(1, 'Informe a localização'),
  specialty: z.string().optional().default('all'),
  availability: z.string().optional().default('all'),
})

export type SearchFormData = z.infer<typeof searchFormSchema>
