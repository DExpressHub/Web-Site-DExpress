'use client'
import { useState, useEffect } from 'react'
import { Menu, UserPlus, LogIn } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/toggleTheme'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Buscar', href: '#search' },
    { label: 'Cadastrar', href: '#apply' },
    { label: 'Como Funciona', href: '#how-it-works' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-xs border-b shadow-xs' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-linear-to-r from-primary to-primary-variant rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">D</span>
            </div>
            <span className="font-bold text-xl text-foreground">D-Express</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="text-foreground" size="sm" variant="ghost">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm">
              <UserPlus className="w-4 h-4 mr-2" />
              Cadastrar
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
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

                  <div className="flex flex-col space-y-3 pt-4 border-t">
                    <Button className="justify-start" variant="ghost">
                      <LogIn className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                    <Button className="justify-start">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Cadastrar
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
