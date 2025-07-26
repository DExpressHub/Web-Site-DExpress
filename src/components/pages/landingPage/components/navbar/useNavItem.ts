'use client'

import React from 'react'

export type NavItem = {
  name: string
  href: string
  id: string
}

export function useNavItem(): NavItem[] {
  const navItems = React.useMemo(
    () => [
      { name: 'Como Funciona', href: '#how-it-works', id: 'how-it-works' },
      { name: 'Planos', href: '#plans', id: 'plans' },
      { name: 'Profissionais', href: '#professionals', id: 'professionals' },
      { name: 'Trabalhe Connosco', href: '#work-with-us', id: 'work-with-us' },
      { name: 'Depoimentos', href: '#testimonials', id: 'testimonials' },
      { name: 'Contacto', href: '#contact', id: 'contact' },
    ],
    [],
  )

  return navItems
}
