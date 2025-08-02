'use client'
import { useNavItem } from './useNavItem'

import { useScrollTo } from '@/hooks'

export function MenuItem() {
  const navItems = useNavItem()
  const scrollToSection = useScrollTo()

  return (
    <nav className="hidden md:flex items-center space-x-8">
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

export function MenuItemMobile() {
  const navItems = useNavItem()
  const scrollToSection = useScrollTo()

  return (
    <nav className="flex flex-col space-y-4">
      {navItems.map((item) => (
        <button
          key={item.label}
          className="text-left text-foreground hover:text-primary transition-colors font-medium"
          onClick={() => scrollToSection(item.href)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
