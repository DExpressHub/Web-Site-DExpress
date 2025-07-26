'use client'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
} from '@heroui/react'
import { Search } from 'lucide-react'
import { useState } from 'react'

export function ProfessionalsSection({ id }: { id?: string }) {
  const specialty = [
    {
      key: 'all',
      name: 'Todas as especialidades',
    },
    {
      key: 'cleaning',
      name: 'Limpeza',
    },
    {
      key: 'cooking',
      name: 'Culinária',
    },
    {
      key: 'specialCare',
      name: 'Cuidados Especiais',
    },
  ]

  const availability = [
    {
      key: 'all',
      name: 'Todas as disponibilidades',
    },
    {
      key: 'fullTime',
      name: 'Tempo integral',
    },
    {
      key: 'PartTime',
      name: 'Meio Período',
    },
    {
      key: 'Daily',
      name: 'Diária',
    },
    {
      key: 'weekends',
      name: 'Fins de semana',
    },
  ]
  const [searchResults, setSearchResults] = useState<any[]>([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Mock search results
    const mockResults = [
      {
        id: 1,
        name: 'Cláudia Oliveira',
        specialties: 'Limpeza, Babá',
        location: 'Golf II',
        experience:
          '5 anos de experiência em limpeza e cuidados infantis. Referências verificadas.',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      },
      {
        id: 2,
        name: 'Fernanda Costa',
        specialties: 'Culinária, Passadoria',
        location: 'Cacuaco',
        experience: 'Especialista em culinária brasileira com 3 anos de experiência.',
        avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
      },
      {
        id: 3,
        name: 'Beatriz Souza',
        specialties: 'Cuidados Especiais',
        location: 'Capolo II',
        experience: 'Cuidadora com 7 anos de experiência. Disponível para tempo integral.',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      },
      {
        id: 4,
        name: 'Beatriz Souza',
        specialties: 'Cuidados Especiais',
        location: 'Capolo II',
        experience: 'Cuidadora com 7 anos de experiência. Disponível para tempo integral.',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      },
      {
        id: 5,
        name: 'Beatriz Souza',
        specialties: 'Cuidados Especiais',
        location: 'Capolo II',
        experience: 'Cuidadora com 7 anos de experiência. Disponível para tempo integral.',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      },
      {
        id: 6,
        name: 'Beatriz Souza',
        specialties: 'Cuidados Especiais',
        location: 'Capolo II',
        experience: 'Cuidadora com 7 anos de experiência. Disponível para tempo integral.',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      },
    ]

    setSearchResults(mockResults)
  }

  return (
    <section className="py-20 bg-content2" id={id}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 ">Encontre a Profissional Ideal</h2>
          <p className="text-base text-foreground-600">
            Use filtros para localizar profissionais que atendam suas necessidades.
          </p>
        </div>

        <Card className="max-w-7xl mx-auto mb-12">
          <CardBody className="p-10">
            <form
              className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end"
              onSubmit={handleSearch}
            >
              <Input
                color="primary"
                label="Localização"
                labelPlacement="outside"
                placeholder="Cidade ou Bairro"
                type="text"
                variant="underlined"
              />
              <Select
                classNames={{ label: 'text-foreground' }}
                color="primary"
                items={specialty}
                label="Especialidade"
                labelPlacement="outside"
                placeholder="Especialidade"
                variant="underlined"
              >
                {(item) => (
                  <SelectItem key={item.key} variant="flat">
                    {item.name}
                  </SelectItem>
                )}
              </Select>
              <Select
                classNames={{ label: 'text-foreground' }}
                color="primary"
                items={availability}
                label="Disponibilidade"
                labelPlacement="outside"
                placeholder="Disponibilidade"
                variant="underlined"
              >
                {(item) => (
                  <SelectItem key={item.key} variant="flat">
                    {item.name}
                  </SelectItem>
                )}
              </Select>

              <Button
                className="w-full"
                color="primary"
                startContent={<Search size={16} />}
                type="submit"
              >
                Buscar
              </Button>
            </form>
          </CardBody>
        </Card>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((professional) => (
              <Card key={professional.id} isHoverable className="card-hover p-6">
                <CardHeader className="flex justify-center flex-col items-center gap-4">
                  <Avatar
                    isBordered
                    showFallback
                    className="w-20 h-20 text-large"
                    color="primary"
                    fallback="/placeholder.svg"
                    size="lg"
                    src={professional.avatar}
                  />

                  <h4 className="text-lg font-semibold text-foreground-800">{professional.name}</h4>
                  <p className="text-sm text-center text-foreground-600">
                    {professional.specialties} | {professional.location}
                  </p>
                </CardHeader>
                <CardBody className="justify-center flex flex-col items-center">
                  <p className="text-sm text-foreground-600 text-center mb-4">
                    {professional.experience}
                  </p>
                  <Button fullWidth color="secondary" size="sm">
                    Ver Perfil
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
