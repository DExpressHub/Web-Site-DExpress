import { MapPin, Clock, User, Shield } from 'lucide-react'
import Image from 'next/image'

import { Button } from '../ui/button'
import { Card, CardContent, CardHeader } from '../ui/card'

interface Professional {
  id: number
  name: string
  photo: string
  position: string // cargo
  experienceYears: number // anos de experiência
  age: number // idade
  location: string // localização
  verified?: boolean
}

interface ProfessionalCardProps {
  professional: Professional
  animationDelay?: number
}

export function ProfessionalCard(props: ProfessionalCardProps) {
  const { professional, animationDelay = 0 } = props

  return (
    <Card
      className="hover:shadow-md transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <CardHeader className="pb-4">
        {/* Header com foto e informações básicas */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              alt={professional.name}
              className="w-16 h-16 rounded-full object-cover"
              height={64}
              src={professional.photo}
              width={64}
            />
            {professional.verified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="text-white" size={12} />
              </div>
            )}
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground">{professional.name}</h3>
            <p className="text-primary font-medium">{professional.position}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Informações detalhadas */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={14} />
            <span>{professional.experienceYears} anos de experiência</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User size={14} />
            <span>{professional.age} anos</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} />
            <span>{professional.location}</span>
          </div>
        </div>

        {/* Ações */}
        <div className="flex gap-2">
          <Button className="flex-1 text-xs cursor-pointer" size="sm" variant="outline">
            Ver Perfil
          </Button>
          <Button className="flex-1 text-xs cursor-pointer" size="sm">
            Entrar em Contato
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
