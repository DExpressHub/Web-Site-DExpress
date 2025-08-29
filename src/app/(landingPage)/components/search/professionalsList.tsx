'use client'

import React from 'react'
import Link from 'next/link'

import { useSearch } from './searchProvider'

import { buttonVariants } from '@/components/ui/button'
import { ProfessionalCard } from '@/components/professionalCard'
import { mapperProfessional } from '@/utils/mappers'
import { cn } from '@/utils/cn'

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
            <Link
              className={cn('cursor-pointer', buttonVariants({ variant: 'outline', size: 'lg' }))}
              href="/profissionais"
            >
              Ver mais profissionais
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-muted-foreground text-center">Nenhum Profissional Encontrado</p>
      )}
    </>
  )
}
