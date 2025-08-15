import { z } from 'zod'

export const languagesAndSkillsSchema = z.object({
  languages: z.array(z.string()).min(1, 'Selecione pelo menos um idioma'),
  skills: z.array(z.string()).min(1, 'Selecione pelo menos uma habilidade'),
})
export const defaultValuesLanguagesAndSkills = {
  languages: [] as string[],
  skills: [] as string[],
} as const
