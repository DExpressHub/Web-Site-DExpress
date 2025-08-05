'use client'
import { useState } from 'react'
import { MapPin, Search, Filter } from 'lucide-react'

import { Button } from '@/presentation/components/ui/button'
import { Input } from '@/presentation/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/presentation/components/ui/select'
import { Label } from '@/presentation/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card'
import { Specialty } from '@/core/types/specialty'
type SearchSectionProps = {
  specialties: Specialty[]
}
export function SearchSection({ specialties }: SearchSectionProps) {
  const [location, setLocation] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [availability, setAvailability] = useState('')

  const handleSearch = () => {
    console.log('Searching with:', { location, specialty, availability })
    // Implement search logic here
  }

  return (
    <section className="py-20 bg-background" id="search">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Encontre a Profissional Ideal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Use filtros para localizar profissionais que atendam suas necessidades.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-elegant border-0">
          <CardHeader className="bg-linear-to-r from-primary/5 to-accent/5">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Search className="w-5 h-5 text-primary" />
              Buscar Profissionais
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2" htmlFor="location">
                  <MapPin className="w-4 h-4 text-primary" />
                  Localização
                </Label>
                <Input
                  className="h-12"
                  id="location"
                  placeholder="Digite sua cidade..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Filter className="w-4 h-4 text-primary" />
                  Especialidade
                </Label>
                <Select defaultValue="all" value={specialty} onValueChange={setSpecialty}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Todas as especialidades" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty.id} value={specialty.id}>
                        {specialty.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Disponibilidade</Label>
                <Select value={availability} onValueChange={setAvailability}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Qualquer disponibilidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tempo-integral">Tempo Integral</SelectItem>
                    <SelectItem value="meio-periodo">Meio Período</SelectItem>
                    <SelectItem value="diaria">Diária</SelectItem>
                    <SelectItem value="fins-de-semana">Fins de Semana</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              className="w-full cursor-pointer md:w-auto px-12 py-6 text-lg"
              size="lg"
              onClick={handleSearch}
            >
              <Search className="w-5 h-5 mr-2" />
              Buscar Profissionais
            </Button>
          </CardContent>
        </Card>

        {/* Search Results Preview */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Encontramos <span className="font-bold text-primary">247 profissionais</span> na sua
            região
          </p>
        </div>
      </div>
    </section>
  )
}
