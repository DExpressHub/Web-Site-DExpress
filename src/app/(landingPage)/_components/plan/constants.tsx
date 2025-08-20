import { Crown, Sparkles, Star } from 'lucide-react'

export const plans = [
  {
    name: 'Individual',
    price: '426 000 KZ',
    period: '/mês',
    description: 'Ideal para escritórios pequenos, lojas ou residências empresariais',
    features: [
      'Equipa de até 5 profissionais',
      'Uniformes incluídos',
      'Supervisão periódica',
      'Gestão administrativa completa dos funcionários',
    ],
    popular: false,
    icon: Star,
  },
  {
    name: 'Profissional',
    price: '1 011 750 KZ',
    period: '/mês',
    description: 'Ideal para médias empresas, clínicas, showrooms ou escritórios de médio porte',
    features: [
      'Equipa de até 10 profissionais',
      'Uniformes incluídos',
      'Supervisão semanal',
      'Equipamento básico de limpeza',
      'Substituição em caso de falta',
      'Gestão administrativa completa dos funcionários',
      'Plano de fidelização com descontos progressivos',
    ],
    popular: true,
    icon: Crown,
  },
  {
    name: 'Premium',
    price: '1 917 000 KZ',
    period: '/mês',
    description:
      'Ideal para grandes empresas, edifícios corporativos, hotéis, escolas e clínicas maiores',
    features: [
      'Equipa de até 15 profissionais',
      'Uniformes incluídos',
      'Supervisão dedicada',
      'Gestão administrativa completa dos funcionários',
      'Relatório detalhado mensal',
      'Substituição imediata',
      'Equipamento de limpeza',
      'Produtos de limpeza incluídos',
      'Plano de fidelização com descontos progressivos',
    ],
    popular: false,
    icon: Sparkles,
  },
]
