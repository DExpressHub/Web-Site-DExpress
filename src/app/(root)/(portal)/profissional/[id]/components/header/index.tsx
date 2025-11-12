import { Profissional } from '@/types/professional'
import { Clock, MapPin, Shield } from 'lucide-react'
import Image from 'next/image'

type ProfessionalHeaderProps = {
  professional: Profissional
}

export function ProfessionalHeader({ professional }: ProfessionalHeaderProps) {
  return (
    <div className="flex items-start gap-6 mb-6">
      <div className="relative">
        <Image
          alt={professional.fullName}
          className="w-24 h-24 rounded-full object-cover"
          height={96}
          src={professional.profileImage || '/public/default-man.jpeg'}
          width={96}
        />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <Shield className="text-white" size={16} />
        </div>
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {professional.fullName}
        </h2>

        <div className="grid grid-cols-1  gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={14} />
            <span>
              {professional.location.district.name},{' '}
              {professional.location.city.name}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock size={14} />
            <span>Nível {professional.experienceLevel.label}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
