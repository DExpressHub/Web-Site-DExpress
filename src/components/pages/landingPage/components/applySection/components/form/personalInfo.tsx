import { DateInput, Input, Select, SelectItem } from '@heroui/react'
import { User } from 'lucide-react'
import React from 'react'

// Dados de opções
const maritalStatusOptions = [
  { key: 'SINGLE', label: 'Solteiro(a)' },
  { key: 'MARRIED', label: 'Casado(a)' },
  { key: 'DIVORCED', label: 'Divorciado(a)' },
  { key: 'WIDOWED', label: 'Viúvo(a)' },
  { key: 'SEPARATED', label: 'Separado(a)' },
  { key: 'STABLE_UNION', label: 'União Estável' },
]

export function PersonalInfo() {
  return (
    <section className="flex-col flex gap-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <User className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Informações Pessoais</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Input
          isRequired
          label="Nome Completo"
          labelPlacement="outside"
          name="fullName"
          placeholder="Seu nome"
          type="text"
        />
        <Input
          isRequired
          label="Bilhete de identidade"
          labelPlacement="outside"
          name="identityNumber"
          placeholder="Bilhete de identidade"
          type="text"
        />
        <DateInput
          isRequired
          label="Data de Nascimento"
          labelPlacement="outside"
          lang="pt"
          name="idade"
        />
        <Input
          isRequired
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Seu email"
          type="email"
        />
        <Input
          isRequired
          label="Telefone"
          labelPlacement="outside"
          name="phoneNumber"
          placeholder="(244) 999 999 999"
          type="tel"
        />
        <Input
          label="Telefone Optional"
          labelPlacement="outside"
          name="optionalPhoneNumber"
          placeholder="(244) 999 999 999"
          type="tel"
        />
        <Select
          isRequired
          items={maritalStatusOptions}
          label="Estado Civil"
          labelPlacement="outside"
          name="maritalStatus"
          placeholder="Estado Civil"
        >
          {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
        </Select>
        <Select
          isRequired
          label="Tem filhos?"
          labelPlacement="outside"
          name="hasChildren"
          placeholder="Tem filhos?"
        >
          <SelectItem key="NO">Sim</SelectItem>
          <SelectItem key="YES">Não</SelectItem>
        </Select>
      </div>

      <div className="space-y-2">
        <Input
          isRequired
          id="knownDiseases"
          label="Doenças ou condições médicas conhecidas"
          labelPlacement="outside"
          name="knownDiseases"
          placeholder="Ex: Diabetes, Asma, Nenhuma"
          type="text"
        />
      </div>
    </section>
  )
}
