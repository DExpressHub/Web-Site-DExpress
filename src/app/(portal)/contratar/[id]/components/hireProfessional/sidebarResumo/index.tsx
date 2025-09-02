'use client'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { useWatch } from 'react-hook-form'

import { useHireFormClient } from '../form/provider'

import { serviceFrequency as serviceFrequencyOptions } from '@/constants/'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProfessionalDetails } from '@/types/professional'

export function SidebarResumo({ professional }: { professional: ProfessionalDetails }) {
  const { form } = useHireFormClient()
  const requesterType = 'INDIVIDUAL'
  const serviceFrequency = useWatch({
    control: form.control,
    name: 'serviceFrequency',
  })

  const description = useWatch({
    control: form.control,
    name: 'description',
  })

  return (
    <div>
      <Card className="p-6">
        <h3 className="font-semibold text-foreground mb-4">Resumo da Solicitação</h3>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              alt={professional.fullName}
              className="w-12 h-12 rounded-full object-cover"
              height={48}
              src={professional.profileImage}
              width={48}
            />
            <div>
              <div className="font-medium text-foreground">{professional.fullName}</div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={14} />
              <span>
                {professional.location.city.name}, {professional.location.district.name}
              </span>
            </div>
          </div>

          {requesterType && (
            <div className="border-t border-border pt-4">
              <div className="text-sm text-muted-foreground mb-2">Tipo de solicitante:</div>
              <Badge variant={requesterType === 'INDIVIDUAL' ? 'default' : 'secondary'}>
                {requesterType === 'INDIVIDUAL' ? 'Pessoa Individual' : 'Empresa'}
              </Badge>
            </div>
          )}

          {serviceFrequency && (
            <div>
              <div className="text-sm text-muted-foreground mb-2">Frequência:</div>
              <div className="text-sm font-medium text-foreground">
                {serviceFrequencyOptions.find((option) => option.value === serviceFrequency)?.label}
              </div>
            </div>
          )}

          {description && (
            <div>
              <div className="text-sm text-muted-foreground mb-2">Descrição:</div>
              <div className="text-sm text-foreground line-clamp-3">{description}</div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
