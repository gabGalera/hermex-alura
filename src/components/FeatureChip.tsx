import steering from '@/assets/icons/steering.svg'
import transmission from '@/assets/icons/transmission.svg'
import { Icon } from '@/components/Icon'
import type { VehicleFeature } from '@/types/vehicle'

const features: Record<
  VehicleFeature,
  { label: string; icon: 'material' | 'image'; name: string }
> = {
  ac: { label: 'Ar condicionado', icon: 'material', name: 'ac_unit' },
  lock: { label: 'Trava elétrica', icon: 'material', name: 'lock' },
  electric: { label: 'Carro elétrico', icon: 'material', name: 'electric_car' },
  abs: { label: 'Freio ABS', icon: 'material', name: 'ABS' },
  'bags-3': { label: '3 Malas', icon: 'material', name: 'card_travel' },
  'bags-2': { label: '2 Malas', icon: 'material', name: 'card_travel' },
  manual: { label: 'Câmbio manual', icon: 'image', name: transmission },
  steering: { label: 'Direção hidráulica', icon: 'image', name: steering },
  'people-4': { label: '4 pessoas', icon: 'material', name: 'groups' },
  'people-5': { label: '5 pessoas', icon: 'material', name: 'groups' },
}

type FeatureChipProps = {
  feature: VehicleFeature
}

export function FeatureChip({ feature }: FeatureChipProps) {
  const item = features[feature]
  const isAbs = feature === 'abs'

  return (
    <div className="flex h-[88px] w-[116px] flex-col items-center justify-center gap-1 rounded-lg bg-neutral-details p-2 text-center">
      {item.icon === 'image' ? (
        <img src={item.name} alt="" width={40} height={40} />
      ) : isAbs ? (
        <span className="font-heading text-[25px] font-bold leading-[1.25] text-brand-primary-pure">
          ABS
        </span>
      ) : (
        <Icon name={item.name} size={40} className="text-brand-primary-pure" />
      )}
      <span className="text-[13px] text-neutral-text">{item.label}</span>
    </div>
  )
}
