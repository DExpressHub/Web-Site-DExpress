'use client'
import { useNavItem } from './useNavItem'

import { cn } from '@/presentation/utils'
import { useScrollTo } from '@/presentation/hooks'

export function MenuItem({ className }: { className?: string }) {
  const navItems = useNavItem()
  const scrollToSection = useScrollTo()

  return (
    <nav className={cn('hidden xl:flex items-center space-x-8', className)}>
      {navItems.map((item) => (
        <button
          key={item.label}
          className="text-foreground/80 hover:text-foreground cursor-pointer transition-colors font-medium"
          onClick={() => scrollToSection(item.href)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export function MenuItemMobile({ onClose }: { onClose?: () => void }) {
  const navItems = useNavItem()
  const scrollToSection = useScrollTo({ onScrollEnd: onClose })

  return (
    <nav className="flex flex-col space-y-4">
      {navItems.map((item) => (
        <button
          key={item.label}
          className="text-left text-foreground hover:text-primary cursor-pointer transition-colors font-medium"
          onClick={() => scrollToSection(item.href)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
