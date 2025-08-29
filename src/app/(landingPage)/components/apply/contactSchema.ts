import { z } from 'zod'

const phoneRegex = /^(?:\+244|244)?\s?9\d{8}$/
const phoneNumber = z.string().regex(phoneRegex, 'Número inválido')
const optionalPhoneNumber = z
  .string()
  .refine((value) => value === '' || phoneRegex.test(value), { message: 'Número inválido' })
  .optional()

export const contactSchema = z.object({
  email: z.string({ required_error: 'Email é obrigatório' }).email('Email inválido'),
  phoneNumber: phoneNumber,
  optionalPhoneNumber: optionalPhoneNumber,
})
export const defaultValuesContact = {
  email: '',
  phoneNumber: '',
  optionalPhoneNumber: '',
} as const
