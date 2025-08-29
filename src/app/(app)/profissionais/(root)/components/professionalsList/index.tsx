'use client'

import React from 'react'

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

  if (isLoading)
    return (
      <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} className="h-72 min-w-72" />
        ))}
      </div>
    )
  if (isError)
    return (
      <div className=" flex flex-col gap-5 items-center justify-center">
        <p>Erro ao carregar</p>
        <Button
          className="cursor-pointer"
          disabled={isLoading || isFetching}
          onClick={() => refetch()}
        >
          Tentar Novamente
        </Button>
      </div>
    )

  const professionals = data?.pages.flatMap((page) => page.data) ?? []

  return (
    <div className="space-y-4">
      <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
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
