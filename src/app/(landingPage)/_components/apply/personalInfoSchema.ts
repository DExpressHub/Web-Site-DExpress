import { z } from 'zod'

const phoneRegex = /^(?:\+244|244)?\s?9\d{8}$/

const birthDateSchema = z
  .string()
  .min(1, 'Data de nascimento é obrigatória')
  .refine(
    (value) => {
      // Garante formato YYYY-MM-DD
      const isValidFormat = /^\d{4}-\d{2}-\d{2}$/.test(value)

      if (!isValidFormat) return false

      const date = new Date(value)

      if (isNaN(date.getTime())) return false

      const today = new Date()
      let age = today.getFullYear() - date.getFullYear()

      const birthdayThisYear = new Date(today.getFullYear(), date.getMonth(), date.getDate())

      if (today < birthdayThisYear) {
        age--
      }

      return age >= 18 && age <= 45
    },
    {
      message: 'Idade deve ser entre 18 e 45 anos',
    },
  )

export const biSchema = z
  .string()
  .trim()
  .length(13, { message: 'O BI deve ter exatamente 13 caracteres.' })
  .refine((val) => /^\d{8}/.test(val), {
    message: 'O BI deve começar com 8 dígitos.',
  })
  .refine((val) => /^\d{8}[A-Z]{2}/.test(val), {
    message: 'Após os 8 dígitos, devem vir 2 letras maiúsculas.',
  })
  .refine((val) => /^\d{8}[A-Z]{2}\d{3}$/.test(val), {
    message: 'Os últimos 3 caracteres devem ser dígitos.',
  })

const fullNameSchema = z
  .string()
  .trim()
  .min(1, { message: 'O nome não pode estar vazio.' })
  .refine((value) => value.split(/\s+/).length >= 2, {
    message: 'Digite pelo menos nome e sobrenome.',
  })
  .refine((value) => value.split(/\s+/).every((word) => /^[A-ZÀ-Ý]/.test(word)), {
    message: 'Cada palavra deve começar com letra maiúscula.',
  })
  .refine((value) => value.split(/\s+/).every((word) => /^[A-ZÀ-Ý][a-zà-ÿ]+$/.test(word)), {
    message: 'Depois da inicial maiúscula, use apenas letras minúsculas.',
  })

export const personalInfoSchema = z.object({
  fullName: fullNameSchema,
  identityNumber: biSchema,
  email: z.string({ required_error: 'Email é obrigatório' }).email('Email inválido'),
  birthDate: birthDateSchema,
  phoneNumber: z
    .string()
    .regex(phoneRegex, 'Número de telefone angolano inválido')

    .or(z.literal('')),
  optionalPhoneNumber: z
    .string()
    .regex(phoneRegex, 'Número de telefone angolano inválido')
    .optional()
    .or(z.literal('')),
  maritalStatus: z.string().min(1, 'Selecione uma opção'),
  gender: z.string().min(1, 'Selecione uma opção'),
  nationality: z.string().min(1, 'Selecione uma opção'),
  hasChildren: z.string({ required_error: 'Selecione uma opção' }),
  knownDiseases: z.string().or(z.literal('')),
})
