import React from 'react'

import { useListAllCities } from '@/presentation/hooks/city/useListAllCities'
import { useListAllGeneralAvailabilities } from '@/presentation/hooks/generalAvailability/useListAllGeneralAvailabilities'
import { useListAllDesiredPosition } from '@/presentation/hooks/desiredPosition/useListAllDesiredPosition'

export function useSearchOptions() {
  const { cities } = useListAllCities()
  const { desiredPosition } = useListAllDesiredPosition()
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
  const desiredPositions = React.useMemo(
    () => withAllOption(desiredPosition, (s) => s.label),
    [desiredPosition, withAllOption],
  )
  const generalAvailabilitiesOptions = React.useMemo(
    () => withAllOption(generalAvailabilities, (g) => g.label),
    [generalAvailabilities, withAllOption],
  )

  return {
    citiesOptions,
    desiredPositions,
    generalAvailabilitiesOptions,
  }
}
