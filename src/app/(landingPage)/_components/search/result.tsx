'use client'

import { toast } from 'sonner'
import React from 'react'

import { useSearch } from './searchProvider'

import { ProfessionalCard } from '@/presentation/components/professionalCard'
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
export function Result() {
  const [favorites, setFavorites] = React.useState<number[]>([])

  const professionals: Professional[] = [
    {
      id: 1,
      name: 'Maria Santos',
      photo: '/user-1.webp',
      specialties: ['Limpeza', 'Organização'],
      rating: 4.9,
      reviewCount: 127,
      location: 'Vila Madalena, SP',
      distance: '2.3 km',
      experience: '8 anos',
      priceRange: 'R$ 45-60/hora',
      availability: ['Manhã', 'Tarde'],
      verified: true,
      favorited: false,
      responseTime: '~15 min',
      description:
        'Profissional experiente com foco em limpeza residencial e organização de ambientes.',
    },
    {
      id: 2,
      name: 'Ana Silva',
      photo: '/user-2.webp',
      specialties: ['Culinária', 'Limpeza'],
      rating: 5.0,
      reviewCount: 89,
      location: 'Pinheiros, SP',
      distance: '1.8 km',
      experience: '5 anos',
      priceRange: 'R$ 50-70/hora',
      availability: ['Integral', 'Meio Período'],
      verified: true,
      favorited: true,
      responseTime: '~5 min',
      description: 'Especialista em culinária caseira e limpeza detalhada. Referências excelentes.',
    },
    {
      id: 3,
      name: 'Carla Oliveira',
      photo: '/user-3.webp',
      specialties: ['Cuidados Especiais', 'Babá'],
      rating: 4.8,
      reviewCount: 203,
      location: 'Itaim Bibi, SP',
      distance: '3.1 km',
      experience: '12 anos',
      priceRange: 'R$ 40-55/hora',
      availability: ['Integral', 'Fins de Semana'],
      verified: true,
      favorited: false,
      responseTime: '~30 min',
      description:
        'Experiência com cuidados especiais e babá. Certificações em primeiros socorros.',
    },
    {
      id: 4,
      name: 'Lucia Costa',
      photo: '/user-1.webp',
      specialties: ['Limpeza', 'Passadoria'],
      rating: 4.7,
      reviewCount: 156,
      location: 'Jardins, SP',
      distance: '4.2 km',
      experience: '6 anos',
      priceRange: 'R$ 35-50/hora',
      availability: ['Diária', 'Meio Período'],
      verified: true,
      favorited: false,
      responseTime: '~20 min',
      description: 'Especialista em limpeza doméstica e passadoria. Muito cuidadosa e pontual.',
    },
    {
      id: 5,
      name: 'Patricia Lima',
      photo: '/user-2.webp',
      specialties: ['Babá', 'Cuidados Especiais'],
      rating: 4.9,
      reviewCount: 94,
      location: 'Moema, SP',
      distance: '5.5 km',
      experience: '4 anos',
      priceRange: 'R$ 55-75/hora',
      availability: ['Integral', 'Noturno'],
      verified: true,
      favorited: true,
      responseTime: '~10 min',
      description:
        'Babá experiente com formação em pedagogia. Ótima com crianças de todas as idades.',
    },
    {
      id: 6,
      name: 'Rosa Ferreira',
      photo: '/user-3.webp',
      specialties: ['Culinária', 'Organização'],
      rating: 4.6,
      reviewCount: 178,
      location: 'Brooklin, SP',
      distance: '6.8 km',
      experience: '10 anos',
      priceRange: 'R$ 42-58/hora',
      availability: ['Manhã', 'Tarde'],
      verified: true,
      favorited: false,
      responseTime: '~25 min',
      description:
        'Cozinheira experiente e organizadora. Especialista em culinária caseira brasileira.',
    },
  ]

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }
  const { result, isError } = useSearch()

  React.useEffect(() => {
    if (isError) {
      toast.error('Erro ao buscar profissionais. Tente novamente mais tarde')
    }
  }, [isError])
  if (!result) {
    return null
  }
  if (!result.success) {
    return null
  }

  return (
    <>
      {result.data.data.length > 0 ? (
        <></>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-5">
          {professionals.map((professional, index) => (
            <ProfessionalCard
              key={professional.id}
              animationDelay={index * 0.1}
              isFavorited={favorites.includes(professional.id)}
              professional={professional}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
        // <p className="text-muted-foreground text-center">Nenhum Profissional Encontrado</p>
      )}
    </>
  )
}
