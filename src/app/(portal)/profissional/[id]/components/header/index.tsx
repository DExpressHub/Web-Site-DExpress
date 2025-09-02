import { Clock, MapPin, Shield, Star } from 'lucide-react'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

type ProfessionalHeaderProps = {
  professional: {
    fullName: string
    profileImage: string
    rating?: number
    reviewCount?: number
    location: {
      district: { name: string }
      city: { name: string }
    }
    experienceLevel: { label: string }
    expectedSalary: number
    description: string
    professionalCourses: Array<{ course: { label: string } }>
  }
}

export function ProfessionalHeader({ professional }: ProfessionalHeaderProps) {
  const specialties = professional.professionalCourses.map((pc) => pc.course.label)
  const rating = professional.rating || 0
  const reviewCount = professional.reviewCount || 0

  return (
    <>
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
          <h2 className="text-2xl font-bold text-foreground mb-2">{professional.fullName}</h2>

          {rating > 0 && (
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                <span className="font-semibold text-foreground">{rating}</span>
                <span className="text-muted-foreground">({reviewCount} avaliações)</span>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {specialties.map((specialty) => (
              <Badge key={specialty} variant="secondary">
                {specialty}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={14} />
              <span>
                {professional.location.district.name}, {professional.location.city.name}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock size={14} />
              <span>Nível {professional.experienceLevel.label}</span>
            </div>
          </div>
        </div>
      </div>

      {professional.description && (
        <div className="border-t border-border pt-6">
          <h3 className="font-semibold text-foreground mb-3">Sobre</h3>
          <p className="text-muted-foreground leading-relaxed">{professional.description}</p>
        </div>
      )}
    </>
  )
}
