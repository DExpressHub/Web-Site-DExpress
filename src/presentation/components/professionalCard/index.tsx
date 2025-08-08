import { Star, MapPin, Clock, Shield, MessageCircle, Heart } from 'lucide-react'
import Image from 'next/image'

import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardHeader } from '../ui/card'

interface Professional {
  id: number
  name: string
  photo: string
  specialties: string[]
  rating: number
  reviewCount: number
  location: string
  distance: string
  experience: string
  priceRange: string
  availability: string[]
  verified: boolean
  favorited: boolean
  responseTime: string
  description: string
}

interface ProfessionalCardProps {
  professional: Professional
  isFavorited: boolean
  onToggleFavorite: (id: number) => void
  animationDelay?: number
}

export function ProfessionalCard(props: ProfessionalCardProps) {
  const { isFavorited, onToggleFavorite, professional, animationDelay = 0 } = props

  return (
    <Card
      className="hover:shadow-md transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <CardHeader className="pb-3">
        {/* Header do Card */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                alt={professional.name}
                className="w-12 h-12 rounded-full object-cover"
                height={48}
                src={professional.photo}
                width={48}
              />
              {professional.verified && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="text-white" size={10} />
                </div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{professional.name}</h3>
              <div className="flex items-center gap-1 text-sm">
                <Star className="fill-yellow-400 text-yellow-400" size={12} />
                <span className="text-foreground">{professional.rating}</span>
                <span className="text-muted-foreground">({professional.reviewCount})</span>
              </div>
            </div>
          </div>

          <button
            className="p-1 rounded-full cursor-pointer hover:bg-accent transition-colors"
            onClick={() => onToggleFavorite(professional.id)}
          >
            <Heart
              className={`${
                isFavorited || professional.favorited
                  ? 'fill-red-500 text-red-500'
                  : 'text-muted-foreground'
              }`}
              size={16}
            />
          </button>
        </div>

        {/* Especialidades */}
        <div className="flex flex-wrap gap-2 mt-4">
          {professional.specialties.map((specialty) => (
            <Badge key={specialty} className="text-xs" variant="secondary">
              {specialty}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Informações principais */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} />
            <span>
              {professional.location} • {professional.distance}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock size={14} />
              <span>{professional.experience}</span>
            </div>
            <div className="font-semibold text-primary">{professional.priceRange}</div>
          </div>

          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MessageCircle size={12} />
            <span>Responde em {professional.responseTime}</span>
          </div>
        </div>

        {/* Ações */}
        <div className="flex gap-2">
          <Button className="flex-1 text-xs cursor-pointer" size="sm" variant="outline">
            Ver Perfil
          </Button>
          <Button className="flex-1 text-xs cursor-pointer" size="sm">
            Contratar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
