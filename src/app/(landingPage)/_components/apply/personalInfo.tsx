import { User } from 'lucide-react'

import { useApplyForm } from './applyFormProvider'

import { InputFormField } from '@/presentation/components/inputFormField'
import { SelectFormField } from '@/presentation/components/SelectFormField'

// Regex para telefone angolano: 9 dígitos, iniciando com 9

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
          label="Nome Completo"
          name="fullName"
          placeholder="Digite seu nome completo"
          type="text"
        />
        <InputFormField
          control={form.control}
          label="Bilhete de identidade"
          name="identityNumber"
          placeholder="Bilhete de identidade"
          type="text"
        />
        <InputFormField
          control={form.control}
          label="Data de Nascimento"
          name="birthDate"
          placeholder="Data de Nascimento"
          type="date"
        />
        <InputFormField
          control={form.control}
          label="Email"
          name="email"
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
