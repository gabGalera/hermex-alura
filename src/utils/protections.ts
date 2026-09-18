import type { ProtectionPlan } from '@/types/reservation'

export const protectionPlans: ProtectionPlan[] = [
  {
    id: 'basic',
    name: 'Básica',
    dailyRate: 45,
    items: [
      'Proteção contra furto',
      'Proteção contra incêndio',
      'Perda total do veículo',
    ],
  },
  {
    id: 'standard',
    name: 'Padrão',
    dailyRate: 80,
    items: [
      'Proteção contra furto',
      'Proteção contra incêndio',
      'Perda total do veículo',
      'Danos e/ou avarias causados por colisões e/ou eventos adversos',
      'Redução de Coparticipação',
    ],
  },
  {
    id: 'advanced',
    name: 'Avançada',
    dailyRate: 120,
    items: [
      'Proteção contra roubo',
      'Proteção contra furto',
      'Proteção contra incêndio',
      'Perda total do veículo',
      'Danos e/ou avarias causados por colisões e/ou eventos adversos',
      'Danos a vidros e pneus',
      'Proteção contra Terceiros',
      'Isenção total de Coparticipação',
    ],
  },
]
