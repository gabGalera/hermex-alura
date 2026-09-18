import fiatCronos from '@/assets/cars/fiat-cronos.png'
import fiatMobi from '@/assets/cars/fiat-mobi.png'
import gmSpin from '@/assets/cars/gm-spin.png'
import hb20 from '@/assets/cars/hb20.png'
import hondaCity from '@/assets/cars/honda-city.png'
import hondaCitySedan from '@/assets/cars/honda-city-sedan.png'
import onix from '@/assets/cars/onix.png'
import renegade from '@/assets/cars/renegade.png'
import vwTCross from '@/assets/cars/vw-t-cross.png'
import type { Vehicle } from '@/types/vehicle'

const hb20Features = [
  'ac',
  'lock',
  'electric',
  'abs',
  'bags-3',
  'manual',
  'steering',
  'people-5',
] as const

export const vehicles: Vehicle[] = [
  {
    id: 'hyundai-hb20-10',
    name: 'Hyundai HB20 1.0',
    category: 'Hatch Manual',
    description:
      'Intermediário Hatch Manual.\nGrupo C - Econômico Sedan com ar condicionado.',
    dailyRate: 120,
    image: hb20,
    gallery: [hb20, hondaCity, onix],
    features: [...hb20Features],
  },
  {
    id: 'honda-city',
    name: 'Honda City',
    category: 'Hatch Automático',
    description:
      'Intermediário Hatch Automático.\nGrupo C - Econômico Sedan com ar condicionado.',
    dailyRate: 130,
    image: hondaCity,
    gallery: [hondaCity, hb20, onix],
    features: ['ac', 'lock', 'abs', 'bags-3', 'steering', 'people-5'],
  },
  {
    id: 'jeep-renegade-13',
    name: 'Jeep Renegade 1.3',
    category: 'Suv Automático',
    description:
      'SUV Automático.\nGrupo C - Econômico Sedan com ar condicionado.',
    dailyRate: 140,
    image: renegade,
    gallery: [renegade, vwTCross, gmSpin],
    features: ['ac', 'lock', 'abs', 'bags-3', 'steering', 'people-5'],
  },
  {
    id: 'fiat-cronos',
    name: 'Fiat Cronos',
    category: 'Sedan Manual',
    description:
      'Sedan Manual.\nGrupo C - Econômico Sedan com ar condicionado.',
    dailyRate: 130,
    image: fiatCronos,
    gallery: [fiatCronos, hondaCitySedan, hb20],
    features: ['ac', 'lock', 'abs', 'bags-3', 'manual', 'steering', 'people-5'],
  },
  {
    id: 'onix-ltz-10',
    name: 'Onix LTZ 1.0',
    category: 'Hatch Automático',
    description:
      'Hatch Automático.\nGrupo C - Econômico Sedan com ar condicionado.',
    dailyRate: 130,
    image: onix,
    gallery: [onix, hondaCity, hb20],
    features: ['ac', 'lock', 'abs', 'bags-3', 'steering', 'people-5'],
  },
  {
    id: 'gm-spin-18',
    name: 'GM Spin 1.8',
    category: 'Minivan Automática 7 Lugares',
    description:
      'Minivan Automática 7 Lugares.\nGrupo C - Econômico Sedan com ar condicionado.',
    dailyRate: 320,
    image: gmSpin,
    gallery: [gmSpin, vwTCross, renegade],
    features: ['ac', 'lock', 'abs', 'bags-3', 'steering', 'people-5'],
  },
  {
    id: 'vw-t-cross-10-turbo',
    name: 'VW T-Cross 1.0 Turbo',
    category: 'Suv Automático',
    description:
      'SUV Automático.\nGrupo C - Econômico Sedan com ar condicionado.',
    dailyRate: 150,
    image: vwTCross,
    gallery: [vwTCross, renegade, gmSpin],
    features: ['ac', 'lock', 'abs', 'bags-3', 'steering', 'people-5'],
  },
  {
    id: 'honda-city-sedan-at',
    name: 'Honda City Sedan AT',
    category: 'Intermediário Automático',
    description:
      'Intermediário Automático.\nGrupo C - Econômico Sedan com ar condicionado.',
    dailyRate: 150,
    image: hondaCitySedan,
    gallery: [hondaCitySedan, fiatCronos, hondaCity],
    features: ['ac', 'lock', 'abs', 'bags-3', 'steering', 'people-5'],
  },
  {
    id: 'fiat-mobi-10',
    name: 'Fiat Mobi 1.0',
    category: 'Compacto com Ar',
    description:
      'Compacto com Ar.\nGrupo C - Econômico Sedan com ar condicionado.',
    dailyRate: 100,
    image: fiatMobi,
    gallery: [fiatMobi, hb20, onix],
    features: ['ac', 'lock', 'abs', 'bags-2', 'manual', 'steering', 'people-4'],
  },
]

export function getVehicleById(id: string) {
  return vehicles.find((vehicle) => vehicle.id === id)
}

export function getVehicleCategories() {
  return [...new Set(vehicles.map((vehicle) => vehicle.category))]
}
