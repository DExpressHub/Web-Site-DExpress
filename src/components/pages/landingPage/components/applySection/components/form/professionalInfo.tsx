import { Checkbox, CheckboxGroup, DateInput, Select, SelectItem, Textarea } from '@heroui/react'
import { Briefcase } from 'lucide-react'
import React from 'react'

const positionOptions = [
  { key: 'COOK', label: 'Cozinheiro(a)' },
  { key: 'CLEANER', label: 'Faxineiro(a)' },
  { key: 'BABYSITTER', label: 'Babá' },
  { key: 'CAREGIVER', label: 'Cuidador(a)' },
  { key: 'DRIVER', label: 'Motorista' },
  { key: 'GARDENER', label: 'Jardineiro(a)' },
  { key: 'HOUSEKEEPER', label: 'Empregada Doméstica' },
  { key: 'IRONING', label: 'Passadeira' },
  { key: 'CLEANING_ASSISTANT', label: 'Auxiliar de Limpeza' },
  { key: 'OTHER', label: 'Outro (especificar)' },
]

const languageOptions = [
  'Português',
  'Inglês',
  'Francês',
  'Espanhol',
  'Kimbundu',
  'Umbundu',
  'Kikongo',
]

const skillsOptions = [
  'Responsável',
  'Proativo',
  'Boa comunicação',
  'Organizado',
  'Pontual',
  'Flexível',
  'Cuidadoso',
  'Confiável',
]

export function ProfessionalInfo() {
  return (
    <section className="flex-col flex gap-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Informações Profissionais</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          isRequired
          items={positionOptions}
          label="Posição Desejada"
          labelPlacement="outside"
          name="desiredPosition"
          placeholder="Selecione a posição"
        >
          {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
        </Select>
        <DateInput
          isRequired
          id="availabilityDate"
          label="Data de Disponibilidade"
          labelPlacement="outside"
          lang="pt"
          name="availabilityDate"
        />
      </div>

      <Textarea
        isRequired
        id="professionalExperience"
        label="Experiência Profissional"
        name="professionalExperience"
        placeholder="Descreva sua experiência profissional relevante..."
      />

      <CheckboxGroup
        isRequired
        defaultValue={['Português']}
        label="Idiomas"
        name="languages"
        orientation="horizontal"
      >
        {languageOptions.map((lang) => (
          <Checkbox key={lang} value={lang}>
            {lang}
          </Checkbox>
        ))}
      </CheckboxGroup>

      <CheckboxGroup
        isRequired
        label="Habilidades e Qualidades"
        name="skillsAndQualities"
        orientation="horizontal"
      >
        {skillsOptions.map((skill) => (
          <Checkbox key={skill} value={skill}>
            {skill}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </section>
  )
}
