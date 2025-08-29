'use client'
import React from 'react'

import { cn } from '@/utils/cn'

export function Header({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-colors duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur-xs border-b shadow-xs' : 'bg-transparent',
      )}
    >
      {children}
    </header>
  )
}
