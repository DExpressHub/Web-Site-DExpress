'use client'

import React from 'react'

import { links } from '@/config/links'

export function useNavItem() {
  const navItems = React.useMemo(
    () => [
      { label: 'Como Funciona', href: links.comoFunciona },
      { label: 'Buscar', href: links.buscar },
      { label: 'Trabalhe Connosco', href: links.trabalheConosco },
      { label: 'Planos', href: links.planos },
      { label: 'Depoimentos', href: links.depoimentos },
      { label: 'Para Empresas', href: links.paraEmpresas },
    ],
    [],
  )

  return navItems
}
