import { z } from 'zod'

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
  .min(1, { message: 'O BI é obrigatório' })
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

export const personalSchema = z.object({
  fullName: fullNameSchema,
  identityNumber: biSchema,
  birthDate: birthDateSchema,
  knownDiseases: z
    .enum(['YES', 'NO'], {
      invalid_type_error: 'Selecione uma opção',
      required_error: 'Selecione uma opção',
      message: 'Selecione uma opção',
    })
    .or(z.string().min(1, 'Selecione uma opção')),
  maritalStatusId: z.string().min(1, 'Selecione uma opção'),
  genderId: z.string().min(1, 'Selecione uma opção'),
  hasChildren: z
    .enum(['YES', 'NO'], {
      invalid_type_error: 'Selecione uma opção',
      required_error: 'Selecione uma opção',
      message: 'Selecione uma opção',
    })
    .or(z.string().min(1, 'Selecione uma opção')),
})
export const defaultValuesPersonal = {
  fullName: '',
  identityNumber: '',
  phoneNumber: '',
  optionalPhoneNumber: '',
  maritalStatusId: '',
  hasChildren: '',
  genderId: '',
  birthDate: '',
  knownDiseases: '',
} as const
