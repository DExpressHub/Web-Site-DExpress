'use client'

import React from 'react'

import { useFilters } from '../providers'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useListAllCities } from '@/hooks/city/useListAllCities'
import { useListAllDistrictsByIdCity } from '@/hooks/district/useListAllDistrictsByCityId'

export function Location() {
  const [selectedCityId, setSelectedCityId] = React.useState<string>('all')

  const { handleChange } = useFilters()
  const { cities, isLoading: isLoadingCities } = useListAllCities()
  const { districts, isFetching } = useListAllDistrictsByIdCity(
    selectedCityId,
    selectedCityId !== 'all',
  )

  const handleChangeCity = React.useCallback(
    (value: string) => {
      setSelectedCityId(value)
      handleChange({ name: 'cityId', value })
    },
    [handleChange],
  )

  const handleChangeDistrict = React.useCallback(
    (value: string) => {
      handleChange({ name: 'districtId', value })
    },
    [handleChange],
  )

  return (
    <>
      <Select
        defaultValue="all"
        disabled={isLoadingCities}
        name="cityId"
        onValueChange={handleChangeCity}
      >
        <SelectTrigger>
          <SelectValue placeholder="Cidade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          {cities.map((city) => (
            <SelectItem key={city.id} value={city.id}>
              {city.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        disabled={selectedCityId === 'all' || isFetching}
        name="districtId"
        onValueChange={handleChangeDistrict}
      >
        <SelectTrigger>
          <SelectValue placeholder={isFetching ? 'Carregando distritos...' : 'Distrito'} />
        </SelectTrigger>
        <SelectContent>
          {districts.map((district) => (
            <SelectItem key={district.id} value={district.id}>
              {district.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}
