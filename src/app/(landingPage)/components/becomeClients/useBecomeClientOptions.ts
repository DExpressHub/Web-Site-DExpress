'use client'
import React from 'react'

import { useWithOptions } from '@/hooks/useWithOptions'
import { useListAllCities } from '@/hooks/city/useListAllCities'
import { useListAllSectores } from '@/hooks/sector/useListAllSectores'

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
