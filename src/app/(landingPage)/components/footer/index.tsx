'use client'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

import { useNavItem } from '../navbar/useNavItem'
import { Logo } from '../logo'

import { Newsletter } from './newsletter'

import { Button } from '@/components/ui/button'
import { useScrollTo } from '@/hooks/useScrollTo'

export function Footer() {
  const navItems = useNavItem()
  const scrollToSection = useScrollTo()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-transparent border-t">
      <div className="max-w-[120rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Conectando empregadores a profissionais domésticas qualificadas, com segurança e
              eficiência.
            </p>
            <div className="flex space-x-2">
              <Button
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                size="icon"
                variant="ghost"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                size="icon"
                variant="ghost"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                size="icon"
                variant="ghost"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                size="icon"
                variant="ghost"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">Navegação</h3>
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="block text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200 text-left"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">Suporte</h3>
            <div className="space-y-3">
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left">
                Central de Ajuda
              </button>
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left">
                Perguntas Frequentes
              </button>
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left">
                Termos de Uso
              </button>
              <button className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left">
                Política de Privacidade
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 break-all"
                  href="mailto:contato@d-express.com"
                >
                  contato@d-express.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                  href="tel:999999999"
                >
                  999 999 999
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Luanda, Angola</span>
              </div>
              <Newsletter />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {currentYear} D-Express. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="text-center sm:text-right">
                Feito com <span className="text-red-500 animate-pulse">❤️</span> para conectar
                pessoas
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
