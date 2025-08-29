import { MapPin, User, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '../ui/button'
import { Card, CardContent, CardHeader } from '../ui/card'

interface ProfessionalCardProps {
  professional: {
    id: string
    fullName: string
    desiredPosition: string
    isAvailable: boolean
    age: number
    location: string
    photo: string
  }
}

export function ProfessionalCard(props: ProfessionalCardProps) {
  const { professional } = props

  return (
    <Card className="hover:shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              alt={professional.fullName}
              className="w-16 h-16 rounded-full object-cover"
              height={64}
              src={professional.photo}
              width={64}
            />
            {professional.isAvailable && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="text-white" size={12} />
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground">{professional.fullName}</h3>
            <p className="text-primary font-medium">{professional.desiredPosition}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3 mb-4">
          {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={14} />
            <span>{professional.id} anos de experiência</span>
          </div> */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User size={14} />
            <span>{professional.age} anos</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} />
            <span>{professional.location}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            className={buttonVariants({ className: 'text-xs cursor-pointer', size: 'sm' })}
            href={`/profissionais/${professional.id}`}
          >
            Ver Perfil
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
