'use client'

import { GraduationCap } from 'lucide-react'

import { useApplyOptions } from './useApplyOptions'
import { useApplyForm } from './applyFormProvider'

import { SelectFormField } from '@/presentation/components/SelectFormField'
import { InputFormField } from '@/presentation/components/inputFormField'
import { useListAllDistrictsByIdCity } from '@/presentation/hooks/district/useListAllDistrictsByCityId'
import { District } from '@/core/types/district'

const districtOption = (array: District[]) => {
  return array.map((item) => ({ value: item.id, label: item.name }))
}

export function Location() {
  const { form } = useApplyForm()
  const { citiesOptions } = useApplyOptions()
  const selectedCityId = form.watch('cityId')

  const { districts, isFetching } = useListAllDistrictsByIdCity(selectedCityId, !!selectedCityId)

  return (
    <section className="flex-col flex gap-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Endereço</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectFormField
          control={form.control}
          items={citiesOptions}
          label="Cidade"
          name="cityId"
          placeholder="Cidade"
        />
        <SelectFormField
          control={form.control}
          disabled={!selectedCityId || isFetching}
          items={districtOption(districts)}
          label="Distrito"
          name="districtId"
          placeholder={isFetching ? 'Carregando...' : 'Distrito'}
        />
        <InputFormField control={form.control} label="Rua" name="street" placeholder="Rua" />
      </div>
    </section>
  )
}
