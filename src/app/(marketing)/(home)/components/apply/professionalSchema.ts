import { z } from 'zod'
import { isAfter } from 'date-fns'
const availabilityDate = z
  .string({
    required_error: 'A data de disponibilidade é obrigatória',
    invalid_type_error: 'A data de disponibilidade é obrigatória',
  })
  .min(1, 'A data de disponibilidade é obrigatória')
  .refine(
    (value) => {
      const isValidFormat = /^\d{4}-\d{2}-\d{2}$/.test(value)

      if (!isValidFormat) return false

      const date = new Date(value)

      if (isNaN(date.getTime())) return false
      const today = new Date()

      return isAfter(date, today)
    },
    {
      message: 'A data de disponibilidade deve ser maior que a data atual',
    },
  )
const experienceSchema = z.object({
  localTrabalho: z.string().min(1, 'Local de trabalho obrigatório'),
  cargo: z.string().min(1, 'Cargo obrigatório'),
  tempo: z.string().min(1, 'Tempo obrigatório'),
})

export const professionalSchema = z.object({
  desiredPositionId: z.string().min(1, 'Selecione uma opção'),
  availabilityDate: availabilityDate,
  ProfessionalExperience: z.array(experienceSchema).min(1, 'Adicione pelo menos uma experiência'),
  experienceLevelId: z.string().min(1, 'Selecione uma opção'),
})

export const defaultValuesProfessional = {
  desiredPositionId: '',
  availabilityDate: '',
  experienceLevelId: '',
  ProfessionalExperience: [{ cargo: '', localTrabalho: '', tempo: '' }] as {
    localTrabalho: string
    cargo: string
    tempo: string
  }[],
}
