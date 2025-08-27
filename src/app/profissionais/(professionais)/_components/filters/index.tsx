'use client'
import { SlidersHorizontal } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/presentation/components/ui/card'
import { cn } from '@/presentation/utils'
import { Input } from '@/presentation/components/ui/input'

type PropertySearchFiltersProps = {
  className?: string
}

export function ProfessionalsFilters({ className }: PropertySearchFiltersProps) {
  return (
    <Card className={cn('h-fit max-h-[calc(100vh-5rem)] border overflow-hidden', className)}>
      <CardHeader className="pb-4 flex-shrink-0">
        <h3 className="flex font-bold items-center gap-2 text-lg">
          <SlidersHorizontal className="h-5 w-5" />
          Filtros
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 overflow-y-auto pt-2">
        <Input
          id="search"
          name="search"
          placeholder="Pesquisar por nome ou palavra-chave..."
          type="text"
        />

        {/* <div className="space-y-2">
          <Label className="font-medium">Finalidade</Label>
          <Select>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Finalidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sale">Venda</SelectItem>
              <SelectItem value="rent">Aluguel</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="font-medium">Tipo de Imóvel</Label>
          <Select>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Tipo de Imóvel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="house">Casa</SelectItem>
              <SelectItem value="apartment">Apartamento</SelectItem>
              <SelectItem value="land">Terreno</SelectItem>
              <SelectItem value="commercial">Comercial</SelectItem>
              <SelectItem value="industrial">Industrial</SelectItem>
              <SelectItem value="rural">Rural</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="font-medium">Província</Label>
          <Select>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Província" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="luanda">Luanda</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

        {/* <div className="space-y-2">
          <Label className="font-medium">Município</Label>
          <Select>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Município" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="luanda">Luanda</SelectItem>
              <SelectItem value="cacuaco">Cacuaco</SelectItem>
              <SelectItem value="viana">Viana</SelectItem>
              <SelectItem value="belas">Belas</SelectItem>
              <SelectItem value="cazenga">Cazenga</SelectItem>
              <SelectItem value="kilamba-kiaxi">Kilamba Kiaxi</SelectItem>
              <SelectItem value="talatona">Talatona</SelectItem>
              <SelectItem value="quicama">Quiçama</SelectItem>
              <SelectItem value="icolo-e-bengo">Icolo-e-Bengo</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

        {/* <div className="flex items-end gap-4">
          <div className="flex-1 space-y-2">
            <Label className="font-medium">Preço Mínimo</Label>
            <Input className="h-9" placeholder="Preço Mínimo" type="number" />
          </div>
          <div className="flex-1 space-y-2">
            <Label className="font-medium">Preço Máximo</Label>
            <Input className="h-9" placeholder="Preço Máximo" type="number" />
          </div>
        </div> */}

        {/* <div className="space-y-2">
          <Label className="font-medium">Quartos</Label>
          <Select>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Quartos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">+1 Quarto</SelectItem>
              <SelectItem value="2">+2 Quartos</SelectItem>
              <SelectItem value="3">+3 Quartos</SelectItem>
              <SelectItem value="4">+4 Quartos</SelectItem>
              <SelectItem value="5">+5 Quartos</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

        {/* <div className="space-y-2">
          <Label className="font-medium">Banheiros</Label>
          <Select>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Banheiros" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">+1 Banheiro</SelectItem>
              <SelectItem value="2">+2 Banheiros</SelectItem>
              <SelectItem value="3">+3 Banheiros</SelectItem>
              <SelectItem value="4">+4 Banheiros</SelectItem>
              <SelectItem value="5">+5 Banheiros</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
      </CardContent>
    </Card>
  )
}
