import React from 'react'

import { useListAllCities } from '@/presentation/hooks/city/useListAllCities'
import { useListAllGeneralAvailabilities } from '@/presentation/hooks/generalAvailability/useListAllGeneralAvailabilities'
import { useListAllDesiredPosition } from '@/presentation/hooks/desiredPosition/useListAllDesiredPosition'
import { useWithOptions } from '@/presentation/hooks/useWithOptions'

export function useSearchOptions() {
  const { cities } = useListAllCities()
  const { desiredPosition } = useListAllDesiredPosition()
  const { generalAvailabilities } = useListAllGeneralAvailabilities()
  const withAllOption = useWithOptions()
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
