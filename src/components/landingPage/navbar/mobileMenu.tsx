import { Menu } from 'lucide-react'

import { MenuItemMobile } from './menuItem'
import { MobileActions } from './actions'

import { ThemeToggle } from '@/components/toggleTheme'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/utils'

export function MobileMenu({ className }: { className?: string }) {
  return (
    <div className={cn('md:hidden flex items-center space-x-2', className)}>
      <ThemeToggle />
      <Sheet>
        <SheetTrigger asChild aria-label="Abrir menu mobile">
          <Button size="icon" variant="ghost">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[280px] sm:w-[350px]" side="right">
          <div className="flex flex-col space-y-6 mt-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-linear-to-r from-primary to-primary-variant rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-xl">D-Express</span>
            </div>
            <MenuItemMobile />
            <MobileActions />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
