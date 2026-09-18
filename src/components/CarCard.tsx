import { Link } from 'react-router-dom'
import type { Vehicle } from '@/types/vehicle'
import { formatDailyRate } from '@/utils/formatPrice'

type CarCardProps = {
  vehicle: Vehicle
}

export function CarCard({ vehicle }: CarCardProps) {
  return (
    <article className="flex w-full max-w-[360px] flex-col items-center gap-4 rounded bg-neutral-white p-8 shadow-elevation-2">
      <div className="relative h-40 w-[280px] overflow-hidden bg-neutral-details">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="absolute inset-0 size-full object-contain"
        />
      </div>
      <div className="flex w-[278px] flex-col gap-4">
        <div className="flex flex-col gap-2 text-neutral-black">
          <h2 className="text-xl leading-[1.25]">{vehicle.name}</h2>
          <p className="text-base">{vehicle.category}</p>
        </div>
        <p className="flex items-center text-neutral-black">
          <span className="font-heading text-[25px] font-bold leading-[1.25]">
            {formatDailyRate(vehicle.dailyRate)}
          </span>
          <span className="text-xl">/diária</span>
        </p>
        <Link
          to={`/veiculos/${vehicle.id}`}
          className="inline-flex w-full items-center justify-center rounded bg-brand-primary-pure px-4 py-3 text-base text-neutral-white hover:bg-brand-primary-dark"
        >
          Ver detalhes
        </Link>
      </div>
    </article>
  )
}
