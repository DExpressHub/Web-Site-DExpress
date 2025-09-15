import React from 'react'

import { useListAllCities } from '@/hooks/city/useListAllCities'
import { useListAllGeneralAvailabilities } from '@/hooks/generalAvailability/useListAllGeneralAvailabilities'
import { useListAllDesiredPosition } from '@/hooks/desiredPosition/useListAllDesiredPosition'
import { useWithOptions } from '@/hooks/useWithOptions'

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
