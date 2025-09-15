'use client'
import React from 'react'
import { SlidersHorizontal } from 'lucide-react'

import { ProfessionalsFilters } from '../filters'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/utils/cn'

export function FiltersMobile({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className={cn('xl:hidden flex items-center space-x-2', className)}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild aria-label="Abrir menu mobile" className="cursor-pointer">
          <Button className={className} size="icon" variant="default">
            <SlidersHorizontal className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-64 px-1 " side="right">
          <SheetHeader>
            <SheetTitle className="sr-only">Filtro</SheetTitle>
            <SheetDescription className="sr-only">
              Menu lateral responsivo para filtros
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col space-y-6 mt-6">
            <ProfessionalsFilters className="max-w-2xs w-full" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
