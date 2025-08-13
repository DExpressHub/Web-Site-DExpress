import { z } from 'zod'

export const educationSchema = z.object({
  highestDegreeId: z.string().min(1, 'Selecione uma opção'),
  courses: z.array(z.string()).min(1, 'Selecione pelo menos um curso'),
})
export const defaultValuesEducation = {
  highestDegreeId: '',
  courses: [] as string[],
} as const
