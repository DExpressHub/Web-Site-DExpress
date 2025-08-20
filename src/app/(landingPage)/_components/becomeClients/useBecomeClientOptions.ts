'use client'
import React from 'react'

import { useWithOptions } from '@/presentation/hooks/useWithOptions'
import { useListAllCities } from '@/presentation/hooks/city/useListAllCities'
import { useListAllSectores } from '@/presentation/hooks/sector/useListAllSectores'

export function useBecomeClientOptions() {
  const withAllOption = useWithOptions()

  const { cities } = useListAllCities()
  const { sectores } = useListAllSectores()

  const citiesOptions = React.useMemo(
    () => withAllOption(cities, (c) => c.name, false),
    [cities, withAllOption],
  )
  const sectoresOptions = React.useMemo(
    () => withAllOption(sectores, (c) => c.label, false),
    [sectores, withAllOption],
  )

  return {
    citiesOptions,
    sectoresOptions,
  }
}
