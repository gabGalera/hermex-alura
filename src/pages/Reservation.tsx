import type { ReactNode } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { ProtectionCard } from '@/components/ProtectionCard'
import { useReservationStore } from '@/stores/useReservationStore'
import { countRentalDays, formatDateInput, formatMoney } from '@/utils/formatPrice'
import { protectionPlans } from '@/utils/protections'
import { getVehicleById } from '@/utils/vehicles'

export function Reservation() {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const vehicle = getVehicleById(id)
  const trip = useReservationStore((state) => state.trip)
  const protectionId = useReservationStore((state) => state.protectionId)
  const setProtection = useReservationStore((state) => state.setProtection)

  if (!vehicle) {
    return (
      <p className="mx-auto max-w-[1200px] px-4 py-10">Veículo não encontrado.</p>
    )
  }

  const days = countRentalDays(trip.pickupDate, trip.returnDate)
  const selectedPlan = protectionPlans.find((plan) => plan.id === protectionId)
  const dailyTotal = vehicle.dailyRate * days
  const protectionTotal = (selectedPlan?.dailyRate ?? 0) * days
  const total = dailyTotal + protectionTotal

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8 md:px-6">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Detalhes', to: `/veiculos/${vehicle.id}` },
          { label: 'Reserva' },
        ]}
      />

      <div className="mt-[35px] flex flex-col gap-6 lg:flex-row">
        <aside className="w-full rounded-lg bg-neutral-details pb-6 lg:w-[384px]">
          <div className="bg-brand-secondary-pure px-6 py-8">
            <h1 className="font-heading text-[39px] font-bold leading-[1.25] text-neutral-white">
              Adicione mais segurança
            </h1>
          </div>
          <div className="flex flex-col gap-8 px-6 pt-8">
            <p className="text-base text-neutral-text">
              Para uma viagem mais segura, escolha uma proteção para o seu aluguel
              (opcional):
            </p>
            <div className="flex flex-col gap-6">
              {protectionPlans.map((plan) => (
                <ProtectionCard
                  key={plan.id}
                  plan={plan}
                  selected={protectionId === plan.id}
                  onSelect={() => setProtection(plan.id)}
                  onRemove={() => setProtection(null)}
                />
              ))}
            </div>
          </div>
        </aside>

        <div className="flex w-full flex-col overflow-hidden rounded-lg bg-neutral-white shadow-elevation-2 lg:w-[792px]">
          <div className="bg-brand-primary-pure px-6 py-6">
            <h2 className="font-heading text-[39px] font-bold leading-[1.25] text-neutral-white">
              Resumo da sua reserva
            </h2>
          </div>

          <div className="flex flex-col gap-8 px-6 py-8">
            <SummaryBlock
              title="Veículo"
              actionLabel="Editar"
              icon="edit"
              onAction={() => navigate(`/veiculos/${vehicle.id}`)}
            >
              <p className="font-heading text-[25px] font-bold leading-[1.25]">
                {vehicle.name}
              </p>
              <p className="whitespace-pre-line text-base">{vehicle.description}</p>
            </SummaryBlock>

            <SummaryBlock
              title="Retirada"
              actionLabel="Editar"
              icon="edit"
              onAction={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <InfoRow label="Data:" value={formatDateInput(trip.pickupDate)} />
              <InfoRow label="Horário:" value={trip.pickupTime} />
              <InfoRow label="Local:" value={trip.pickupLocation} />
            </SummaryBlock>

            <SummaryBlock
              title="Devolução"
              actionLabel="Editar"
              icon="edit"
              onAction={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <InfoRow label="Data:" value={formatDateInput(trip.returnDate)} />
              <InfoRow label="Horário:" value={trip.returnTime} />
              <InfoRow label="Local:" value={trip.returnLocation} />
            </SummaryBlock>

            <div className="flex flex-col gap-2.5 border-t border-neutral-details pt-8">
              <h3 className="font-heading text-[31px] font-bold leading-[1.25]">
                Diárias
              </h3>
              <div className="flex justify-between text-base">
                <span>
                  {days}x{formatMoney(vehicle.dailyRate)}
                </span>
                <span>{formatMoney(dailyTotal)}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 border-t border-neutral-details pt-8">
              <div className="flex items-start justify-between">
                <h3 className="font-heading text-[31px] font-bold leading-[1.25]">
                  Proteção
                </h3>
                {selectedPlan ? (
                  <Button variant="ghost" onClick={() => setProtection(null)}>
                    <Icon name="delete" />
                    Remover
                  </Button>
                ) : null}
              </div>
              {selectedPlan ? (
                <>
                  <p className="font-heading text-[25px] font-bold leading-[1.25]">
                    {selectedPlan.name}
                  </p>
                  <div className="flex justify-between text-base">
                    <span>
                      {days}x{formatMoney(selectedPlan.dailyRate)}
                    </span>
                    <span>{formatMoney(protectionTotal)}</span>
                  </div>
                </>
              ) : (
                <p className="text-base">Nenhuma proteção selecionada</p>
              )}
            </div>
          </div>

          <button
            type="button"
            className="flex items-center justify-between bg-brand-primary-pure px-6 py-6 text-left font-heading text-[39px] font-bold leading-[1.25] text-neutral-white"
            onClick={() => navigate(`/confirmacao/${vehicle.id}`)}
          >
            <span>Valor total:</span>
            <span>{formatMoney(total)}</span>
          </button>
        </div>
      </div>
    </section>
  )
}

function SummaryBlock({
  title,
  actionLabel,
  icon,
  onAction,
  children,
}: {
  title: string
  actionLabel: string
  icon: string
  onAction: () => void
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 border-t border-neutral-details pt-8 first:border-t-0 first:pt-0">
      <div className="flex items-start justify-between">
        <h3 className="font-heading text-[31px] font-bold leading-[1.25]">{title}</h3>
        <Button variant="ghost" onClick={onAction}>
          <Icon name={icon} />
          {actionLabel}
        </Button>
      </div>
      <div className="flex flex-col gap-0 text-neutral-text">{children}</div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex items-center gap-2.5">
      <span className="font-heading text-[25px] font-bold leading-[1.25]">{label}</span>
      <span className="text-base">{value}</span>
    </p>
  )
}
