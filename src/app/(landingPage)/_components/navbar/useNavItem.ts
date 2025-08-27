'use client'

import React from 'react'

export function useNavItem() {
  const navItems = React.useMemo(
    () => [
      { label: 'Como Funciona', href: 'how-it-works' },
      { label: 'Buscar', href: 'search' },
      { label: 'Trabalhe Connosco', href: 'apply' },
      { label: 'Depoimentos', href: 'testimonials' },
    ],
    [],
  )

  return navItems
}
