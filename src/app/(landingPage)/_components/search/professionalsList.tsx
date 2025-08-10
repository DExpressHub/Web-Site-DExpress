'use client'

import React from 'react'

import { useSearch } from './searchProvider'

import { ProfessionalCard } from '@/presentation/components/professionalCard'
import { Button } from '@/presentation/components/ui/button'
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
const professionals = [
  {
    id: 1,
    name: 'Maria Santos',
    photo: '/user-1.webp',
    position: 'Diarista e Organizadora',
    experienceYears: 8,
    age: 35,
    location: 'Vila Madalena, SP',
    verified: true,
  },
  {
    id: 2,
    name: 'Ana Silva',
    photo: '/user-2.webp',
    position: 'Cozinheira e Doméstica',
    experienceYears: 5,
    age: 28,
    location: 'Pinheiros, SP',
    verified: true,
  },
  {
    id: 3,
    name: 'Carla Oliveira',
    photo: '/user-3.webp',
    position: 'Cuidadora e Babá',
    experienceYears: 12,
    age: 42,
    location: 'Itaim Bibi, SP',
    verified: true,
  },
]

export function ProfessionalsList() {
  const { result, isFetching } = useSearch()

  if (!result || isFetching) {
    return null
  }

  return (
    <>
      {result.data.length > 0 ? (
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-5">
            {professionals.map((professional, index) => (
              <ProfessionalCard
                key={professional.id}
                animationDelay={index * 0.1}
                professional={professional}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Button className="cursor-pointer" size="lg" variant="outline">
              Ver mais profissionais
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-muted-foreground text-center">Nenhum Profissional Encontrado</p>
      )}
    </>
  )
}
