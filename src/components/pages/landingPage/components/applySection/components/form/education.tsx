import { Select, SelectItem, Textarea } from '@heroui/react'
import { GraduationCap } from 'lucide-react'
import React from 'react'

// Componente de Educação
export function Education() {
  return (
    <section className="flex-col flex gap-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Educação</h3>
      </div>

      <div className="space-y-2">
        <Select
          isRequired
          label="Maior Grau de Escolaridade"
          labelPlacement="outside"
          name="highestDegree"
          placeholder="Selecione o grau de escolaridade"
        >
          <SelectItem key="elementary">Ensino Primário</SelectItem>
          <SelectItem key="middle">Ensino Básico</SelectItem>
          <SelectItem key="Ensino Médio Completo">Ensino Médio Completo</SelectItem>
          <SelectItem key="technical">Ensino Técnico</SelectItem>
        </Select>
      </div>

      <Textarea
        isRequired
        id="courses"
        label="Cursos e Certificações"
        labelPlacement="outside"
        name="courses"
        placeholder="Liste seus cursos e certificações separados por vírgula..."
      />
    </section>
  )
}
