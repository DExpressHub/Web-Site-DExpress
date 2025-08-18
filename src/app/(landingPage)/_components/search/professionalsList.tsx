'use client'

import React from 'react'

import { useSearch } from './searchProvider'

import { ProfessionalCard } from '@/presentation/components/professionalCard'
import { Button } from '@/presentation/components/ui/button'
import { mapperProfessional } from '@/presentation/utils/mappers'

export function ProfessionalsList() {
  const { result, isFetching } = useSearch()

  if (!result || isFetching) {
    return null
  }

  return (
    <>
      {result.data.length > 0 ? (
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-5">
            {result.data.map((professional) => (
              <ProfessionalCard
                key={professional.id}
                professional={mapperProfessional(professional)}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Button className="cursor-pointer" size="lg" variant="outline">
              Ver mais profissionais
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-muted-foreground text-center">Nenhum Profissional Encontrado</p>
      )}
    </>
  )
}
