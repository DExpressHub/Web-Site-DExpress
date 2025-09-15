'use client'
import { SlidersHorizontal } from 'lucide-react'

import { Location } from '../location'
import { useFilters } from '../providers'
import { DesiredPosition } from '../desiredPosition'
import { ExperienceLevels } from '../experienceLevels'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/button'

type PropertySearchFiltersProps = {
  className?: string
}

export function ProfessionalsFilters({ className }: PropertySearchFiltersProps) {
  const { resetFilters } = useFilters()

  return (
    <Card className={cn('h-fit max-h-[calc(100vh-5rem)] border overflow-hidden px-1', className)}>
      <CardHeader className="pb-4 flex-shrink-0 flex-row px-1 flex justify-between">
        <h3 className="flex font-bold items-center gap-2 text-lg">
          <SlidersHorizontal className="h-5 w-5" />
          Filtros
        </h3>
        <Button
          className="cursor-pointer"
          size="sm"
          variant="outline"
          onClick={() => resetFilters()}
        >
          Limpar o filtro
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 overflow-y-auto pt-2 px-1">
        <Location />
        <DesiredPosition />
        <ExperienceLevels />
      </CardContent>
    </Card>
  )
}
