'use client'

import { useFilters } from '../providers'

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useListAllExperienceLevels } from '@/hooks/experienceLevels/useListAllExperienceLevels'

export function ExperienceLevels() {
  const { experienceLevels, isLoading } = useListAllExperienceLevels()
  const { handleChange } = useFilters()

  return (
    <div className="flex flex-col gap-1 ">
      <Label className="cursor-pointer" htmlFor="experienceLevels">
        Experiencia Professional
      </Label>
      <Select
        defaultValue="all"
        disabled={isLoading}
        name="desiredPositionId"
        onValueChange={(value) => handleChange({ value, name: 'experienceLevelId' })}
      >
        <SelectTrigger className="cursor-pointer" id="experienceLevels">
          <SelectValue placeholder="Experiencia Professional" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          {experienceLevels.map(({ id, label }) => (
            <SelectItem key={id} value={id}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
