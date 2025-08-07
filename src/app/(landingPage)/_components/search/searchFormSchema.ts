import * as z from 'zod'

export const searchFormSchema = z.object({
  city: z.string().optional(),
  specialty: z.string().optional(),
  availability: z.string().optional(),
})

export type SearchFormData = z.infer<typeof searchFormSchema>
