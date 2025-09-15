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
import { useListAllDesiredPosition } from '@/hooks/desiredPosition/useListAllDesiredPosition'

export function DesiredPosition() {
  const { desiredPosition, isLoading } = useListAllDesiredPosition()
  const { handleChange } = useFilters()

  return (
    <div className="flex flex-col gap-1 ">
      <Label className="cursor-pointer" htmlFor="desiredPosition">
        Função a contratar
      </Label>
      <Select
        defaultValue="all"
        disabled={isLoading}
        name="desiredPositionId"
        onValueChange={(value) => handleChange({ value, name: 'desiredPositionId' })}
      >
        <SelectTrigger className="cursor-pointer" id="desiredPosition">
          <SelectValue placeholder="Função a contratar" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          {desiredPosition.map(({ id, label }) => (
            <SelectItem key={id} value={id}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
