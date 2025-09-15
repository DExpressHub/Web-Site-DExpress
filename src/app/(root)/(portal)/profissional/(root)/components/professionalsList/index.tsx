'use client'

import React from 'react'
import { Frown } from 'lucide-react'

import { useFilters } from '../providers'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { ProfessionalCard } from '@/components/professionalCard'
import { mapperProfessional } from '@/utils/mappers'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export function ProfessionalsList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useFilters()

  const loadMoreRef = useIntersectionObserver(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  })

  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-72 min-w-72" />
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-5 items-center text-center">
        <p className="text-red-500 font-medium">Erro ao carregar profissionais</p>
        <Button
          className="cursor-pointer"
          disabled={isLoading || isFetching}
          onClick={() => refetch()}
        >
          Tentar novamente
        </Button>
      </div>
    )
  }

  const professionals = data?.pages.flatMap((page) => page.data) ?? []

  if (professionals.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
        <Frown className="w-12 h-12 text-gray-400" />
        <p className="text-gray-600 text-lg font-medium">Nenhum profissional disponível</p>
        <p className="text-sm text-gray-500">Tente ajustar os filtros ou faça uma nova busca.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Lista de profissionais */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {professionals.map((prof) => (
          <ProfessionalCard key={prof.id} professional={mapperProfessional(prof)} />
        ))}
      </div>

      {/* Sentinel para Intersection Observer */}
      {hasNextPage && (
        <div ref={loadMoreRef} className="h-10 flex items-center justify-center">
          {isFetchingNextPage && <p>Carregando mais...</p>}
        </div>
      )}
    </div>
  )
}
