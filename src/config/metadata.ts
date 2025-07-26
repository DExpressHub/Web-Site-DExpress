import { Metadata } from 'next'

export const root: Metadata = {
  title: {
    default: 'Inzoteq',
    template: '%s | Inzoteq',
  },
  description:
    'A Inzoteq é uma plataforma imobiliária inteligente voltada para Angola. Encontre, compre ou alugue imóveis em Luanda e outras regiões com segurança e agilidade.',
  icons: {
    icon: '/logo.svg',
  },
  creator: 'Inzoteq Tecnologia',
  applicationName: 'Inzoteq',
  keywords: [
    'imobiliária Angola',
    'imóveis Angola',
    'compra de casas em Luanda',
    'arrendamento Angola',
    'Inzoteq',
    'plataforma imobiliária angolana',
    'casas em Angola',
    'apartamentos Luanda',
  ],
  authors: [{ name: 'Inzoteq', url: 'https://inzoteq.com' }],
  openGraph: {
    title: 'Inzoteq | Imobiliária Digital em Angola',
    description:
      'Encontre imóveis em Angola com a Inzoteq — sua plataforma de compra, venda e arrendamento com foco em Luanda e nas principais províncias.',
    url: 'https://inzoteq.com',
    siteName: 'Inzoteq',
    // images: [
    //   {
    //     url: '/opengraph.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Inzoteq Angola - Plataforma Imobiliária',
    //   },
    // ],
    locale: 'pt_AO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inzoteq | Imóveis em Angola',
    description:
      'Compre, arrende ou encontre o imóvel ideal em Angola com a Inzoteq. Plataforma segura e fácil de usar.',
    // images: ['/opengraph.jpg'],
    creator: '@inzoteq',
  },
}
