'use client'
import { Menu } from 'lucide-react'
import React from 'react'

import { MenuItemMobile } from './menuItem'
import { MobileActions } from './actions'
import { Logo } from './logo'

import { ThemeToggle } from '@/presentation/components/toggleTheme'
import { Button } from '@/presentation/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/presentation/components/ui/sheet'
import { cn } from '@/utils'

export function MobileMenu({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className={cn('xl:hidden flex items-center space-x-2', className)}>
      <ThemeToggle />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild aria-label="Abrir menu mobile" className="cursor-pointer">
          <Button size="icon" variant="ghost">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-64 " side="right">
          <SheetHeader>
            <Logo />
            <SheetTitle className="sr-only">Menu principal</SheetTitle>
            <SheetDescription className="sr-only">
              Menu lateral responsivo para navegação em dispositivos móveis
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col space-y-6 mt-6">
            <MenuItemMobile onClose={() => setIsOpen(false)} />
            <MobileActions />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
