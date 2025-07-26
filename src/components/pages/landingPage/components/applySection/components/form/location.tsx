import React from 'react'
import { MapPin } from 'lucide-react'
import { Input, Select, SelectItem } from '@heroui/react'

import { useApplyForm } from '../../hooks'

import { District } from '@/types'
import { getDistrictsByCityIdService } from '@/services'

export function Location() {
  const [districts, setDistricts] = React.useState<District[]>([])
  const { citiesOptions } = useApplyForm()

  const districtOptions = React.useMemo(
    () => districts.map(({ id, name }) => ({ key: id, label: name })),
    [districts],
  )

  const fetchDistricts = React.useCallback(async (cityId: string | undefined) => {
    if (!cityId) {
      setDistricts([])

      return
    }

    const response = await getDistrictsByCityIdService({ cityId })

    if (response.success) {
      setDistricts(response.data)
    } else {
      setDistricts([])
    }
  }, [])

  return (
    <section className="flex flex-col gap-6 w-full">
      <header className="flex items-center gap-2 mb-4">
        <MapPin className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Localização</h3>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Select
          isRequired
          items={citiesOptions}
          label="Cidade"
          labelPlacement="outside"
          name="cityId"
          placeholder="Selecione a cidade"
          onChange={(e) => fetchDistricts(e.target.value)}
        >
          {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
        </Select>

        <Select
          isRequired
          isDisabled={districtOptions.length === 0}
          items={districtOptions}
          label="Distrito"
          labelPlacement="outside"
          name="districtId"
          placeholder="Selecione o distrito"
        >
          {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
        </Select>
      </div>

      <Input
        fullWidth
        isRequired
        id="street"
        label="Endereço"
        name="street"
        placeholder="Rua, número, referências..."
      />
    </section>
  )
}
