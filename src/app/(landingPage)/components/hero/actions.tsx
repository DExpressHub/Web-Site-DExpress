'use client'
import { Briefcase, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { links } from '@/config/links'

export function Actions() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        className="text-lg px-8 cursor-pointer py-6"
        size="lg"
        onClick={() => scrollToSection(`#${links.buscar}`)}
      >
        <Search className="w-5 h-5 mr-2" />
        Buscar
      </Button>
      <Button
        className="text-lg px-8 cursor-pointer py-6"
        size="lg"
        variant="outline"
        onClick={() => scrollToSection(`#${links.trabalheConosco}`)}
      >
        <Briefcase className="w-5 h-5 mr-2" />
        Trabalhe Conosco
      </Button>
    </div>
  )
}
