import { User } from 'lucide-react'
import { z } from 'zod'

import { useApplyForm } from './applyFormProvider'

import { InputFormField } from '@/presentation/components/inputFormField'
import { SelectFormField } from '@/presentation/components/SelectFormField'

// Regex para telefone angolano: 9 dígitos, iniciando com 9
const phoneRegex = /^(?:\+244|244)?\s?9\d{8}$/

// Regex para BI angolano: 9 números + 3 letras + 1 número
const biRegex = /^[0-9]{9}[A-Z]{3}[0-9]$/

export const personalInfoSchema = z.object({
  fullName: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Digite um email válido'),
  birthDate: z
    .string()
    .min(1, 'Data de nascimento é obrigatória')
    .refine(
      (value) => {
        const date = new Date(value)

        return !isNaN(date.getTime())
      },
      { message: 'Data inválida' },
    ),
  identityNumber: z
    .string()
    .regex(biRegex, 'Número de BI inválido. Formato: 9 dígitos, 3 letras e 1 dígito final'),
  phoneNumber: z
    .string()
    .regex(phoneRegex, 'Número de telefone angolano inválido')
    .optional()
    .or(z.literal('')),
  optionalPhoneNumber: z
    .string()
    .regex(phoneRegex, 'Número de telefone angolano inválido')
    .optional()
    .or(z.literal('')),
  maritalStatus: z.enum(['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED', 'SEPARATED', 'STABLE_UNION'], {
    errorMap: () => ({ message: 'Selecione um estado civil' }),
  }),
  hasChildren: z.enum(['YES', 'NO'], {
    errorMap: () => ({ message: 'Selecione se tem filhos' }),
  }),
  knownDiseases: z.string().optional().or(z.literal('')),
})

export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>

const maritalStatusOptions: { value: string; label: string }[] = [
  { value: 'SINGLE', label: 'Solteiro(a)' },
  { value: 'MARRIED', label: 'Casado(a)' },
  { value: 'DIVORCED', label: 'Divorciado(a)' },
  { value: 'WIDOWED', label: 'Viúvo(a)' },
  { value: 'SEPARATED', label: 'Separado(a)' },
  { value: 'STABLE_UNION', label: 'União Estável' },
]
const childrenOptions = [
  {
    value: 'NO',
    label: 'Não',
  },
  {
    value: 'YES',
    label: 'Sim',
  },
]

export function PersonalInfo() {
  const { form } = useApplyForm()

  return (
    <section className="flex-col flex gap-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <User className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Informações Pessoais</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputFormField
          control={form.control}
          label="Nome Completo*"
          name="name"
          placeholder="Digite seu nome completo *"
          type="text"
        />
        <InputFormField
          control={form.control}
          label="Email *"
          name="email"
          placeholder="Digite seu email"
          type="email"
        />
        <InputFormField
          control={form.control}
          label="Data de Nascimento *"
          name="birthDate"
          placeholder="Digite sua data de nascimento"
          type="date"
        />
        <InputFormField
          control={form.control}
          label="Email *"
          name="identityNumber"
          placeholder="Digite seu email"
          type="email"
        />
        <InputFormField
          control={form.control}
          label="Telefone"
          name="phoneNumber"
          placeholder="(244) 999 999 999"
          type="tel"
        />
        <InputFormField
          control={form.control}
          label="Telefone Optional"
          name="optionalPhoneNumber"
          placeholder="(244) 999 999 999"
          type="tel"
        />
        <SelectFormField
          control={form.control}
          items={maritalStatusOptions}
          label="Estado Civil"
          name="maritalStatus"
          placeholder="Estado Civil"
        />

        <SelectFormField
          control={form.control}
          items={childrenOptions}
          label="Tem filhos?"
          name="hasChildren"
          placeholder="Tem filhos?"
        />
      </div>
      <div className="space-y-2">
        <InputFormField
          control={form.control}
          label="Doenças ou condições médicas conhecidas"
          name="knownDiseases"
          placeholder="Ex: Diabetes, Asma, Nenhuma"
          type="text"
        />
      </div>
    </section>
  )
}
