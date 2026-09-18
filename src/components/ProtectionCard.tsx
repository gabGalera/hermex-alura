import { Button } from '@/components/Button'
import type { ProtectionPlan } from '@/types/reservation'
import { formatDailyRate } from '@/utils/formatPrice'

type ProtectionCardProps = {
  plan: ProtectionPlan
  selected: boolean
  onSelect: () => void
  onRemove: () => void
}

export function ProtectionCard({
  plan,
  selected,
  onSelect,
  onRemove,
}: ProtectionCardProps) {
  return (
    <article className="flex w-full flex-col gap-4 rounded bg-neutral-white p-4 shadow-elevation-1">
      <div className="flex flex-col gap-2 text-neutral-text">
        <h3 className="font-heading text-[25px] font-bold leading-[1.25]">{plan.name}</h3>
        <ul className="list-disc space-y-0 pl-[19.5px] text-[13px]">
          {plan.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <p className="flex items-center text-neutral-text">
        <span className="font-heading text-[25px] font-bold leading-[1.25]">
          {formatDailyRate(plan.dailyRate)}
        </span>
        <span className="text-xl">/diária</span>
      </p>
      {selected ? (
        <Button variant="secondary" className="w-full" onClick={onRemove}>
          Remover
        </Button>
      ) : (
        <Button className="w-full" onClick={onSelect}>
          Adicionar
        </Button>
      )}
    </article>
  )
}
