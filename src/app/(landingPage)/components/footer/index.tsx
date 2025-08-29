'use client'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

import { useNavItem } from '../navbar/useNavItem'
import { Logo } from '../logo'

import { Button } from '@/components/ui/button'
import { useScrollTo } from '@/hooks/useScrollTo'

export function Footer() {
  const navItems = useNavItem()
  const scrollToSection = useScrollTo()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-transparent border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4 max-w-xs w-full">
            <Logo />
            <p className="text-muted-foreground">
              Conectando empregadores a profissionais domésticas qualificadas, com segurança e
              eficiência.
            </p>
            <div className="flex space-x-2">
              <Button
                className="text-muted-foreground hover:text-primary"
                size="icon"
                variant="ghost"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                className="text-muted-foreground hover:text-primary"
                size="icon"
                variant="ghost"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                className="text-muted-foreground hover:text-primary"
                size="icon"
                variant="ghost"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                className="text-muted-foreground hover:text-primary"
                size="icon"
                variant="ghost"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navegação</h3>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="block text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Suporte</h3>
            <div className="space-y-2">
              <button className="block text-muted-foreground hover:text-primary transition-colors">
                Central de Ajuda
              </button>
              <button className="block text-muted-foreground hover:text-primary transition-colors">
                Perguntas Frequentes
              </button>
              <button className="block text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </button>
              <button className="block text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </button>
            </div>
          </div> */}

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">contato@d-express.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">999 999 999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">Luanda</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} D-Express. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Feito com ❤️ para conectar pessoas</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
