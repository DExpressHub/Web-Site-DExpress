import React from 'react'

import { useListAllCities } from '@/presentation/hooks/city/useListAllCities'
import { useListAllGeneralAvailabilities } from '@/presentation/hooks/generalAvailability/useListAllGeneralAvailabilities'
import { useListAllSpecialties } from '@/presentation/hooks/specialty/useAllSpecialties'

export function useSearchOptions() {
  const { cities } = useListAllCities()
  const { specialties } = useListAllSpecialties()
  const { generalAvailabilities } = useListAllGeneralAvailabilities()

  const withAllOption = React.useCallback(
    <T extends { id: string; name?: string; label?: string }>(
      items: T[],
      getLabel: (item: T) => string,
    ) => [
      { value: 'all', label: 'Todas' },
      ...items.map((i) => ({ value: i.id, label: getLabel(i) })),
    ],
    [],
  )

  const citiesOptions = React.useMemo(
    () => withAllOption(cities, (c) => c.name),
    [cities, withAllOption],
  )
  const specialtiesOptions = React.useMemo(
    () => withAllOption(specialties, (s) => s.name),
    [specialties, withAllOption],
  )
  const generalAvailabilitiesOptions = React.useMemo(
    () => withAllOption(generalAvailabilities, (g) => g.label),
    [generalAvailabilities, withAllOption],
  )

  return {
    citiesOptions,
    specialtiesOptions,
    generalAvailabilitiesOptions,
  }
}
