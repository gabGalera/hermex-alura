import type { ReactNode } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { useReservationStore } from '@/stores/useReservationStore'
import { countRentalDays, formatDateInput, formatMoney } from '@/utils/formatPrice'
import { protectionPlans } from '@/utils/protections'
import { getVehicleById } from '@/utils/vehicles'

export function Confirmation() {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const vehicle = getVehicleById(id)
  const trip = useReservationStore((state) => state.trip)
  const protectionId = useReservationStore((state) => state.protectionId)
  const reservationCode = useReservationStore((state) => state.reservationCode)
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
    <section className="mx-auto flex max-w-[792px] flex-col items-center gap-8 px-4 py-8 md:px-6">
      <div className="w-full">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Detalhes', to: `/veiculos/${vehicle.id}` },
            { label: 'Reserva', to: `/reserva/${vehicle.id}` },
          ]}
        />
      </div>

      <div className="flex w-full items-center justify-center gap-4 rounded border-2 border-brand-secondary-pure p-6">
        <Icon name="check_circle" size={40} className="text-feedback-positive" />
        <p className="font-heading text-[31px] font-bold leading-[1.25] text-brand-secondary-pure">
          Reserva confirmada com sucesso!
        </p>
      </div>

      <div className="flex w-full flex-col gap-8 rounded-lg bg-neutral-white py-0 shadow-elevation-2">
        <div className="px-6 py-6 text-center font-heading text-[39px] font-bold leading-[1.25] text-neutral-text">
          <p>Código de reserva:</p>
          <p>{reservationCode}</p>
        </div>

        <div className="flex flex-col gap-8 px-6">
          <Section
            title="Veículo"
            action={
              <Button variant="ghost" onClick={() => navigate(`/veiculos/${vehicle.id}`)}>
                <Icon name="edit" />
                Editar
              </Button>
            }
          >
            <p className="font-heading text-[25px] font-bold leading-[1.25]">{vehicle.name}</p>
            <p className="whitespace-pre-line text-base">{vehicle.description}</p>
          </Section>

          <Section
            title="Retirada"
            action={
              <Button variant="ghost" onClick={() => navigate(`/reserva/${vehicle.id}`)}>
                <Icon name="edit" />
                Editar
              </Button>
            }
          >
            <Info label="Data:" value={formatDateInput(trip.pickupDate)} />
            <Info label="Horário:" value={trip.pickupTime} />
            <Info label="Local:" value={trip.pickupLocation} />
          </Section>

          <Section
            title="Devolução"
            action={
              <Button variant="ghost" onClick={() => navigate(`/reserva/${vehicle.id}`)}>
                <Icon name="edit" />
                Editar
              </Button>
            }
          >
            <Info label="Data:" value={formatDateInput(trip.returnDate)} />
            <Info label="Horário:" value={trip.returnTime} />
            <Info label="Local:" value={trip.returnLocation} />
          </Section>

          <Section title="Diárias">
            <div className="flex justify-between text-base">
              <span>
                {days}x{formatMoney(vehicle.dailyRate)}
              </span>
              <span>{formatMoney(dailyTotal)}</span>
            </div>
          </Section>

          <Section
            title="Proteção"
            action={
              selectedPlan ? (
                <Button variant="ghost" onClick={() => setProtection(null)}>
                  <Icon name="delete" />
                  Remover
                </Button>
              ) : null
            }
          >
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
          </Section>
        </div>

        <div className="flex items-center justify-between px-6 py-6 font-heading text-[39px] font-bold leading-[1.25] text-neutral-text">
          <span>Valor total previsto</span>
          <span>{formatMoney(total)}</span>
        </div>
      </div>

      <div className="flex w-full max-w-[384px] flex-col items-center gap-4">
        <Button className="w-full" onClick={() => navigate('/')}>
          Cancelar reserva
        </Button>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-4 py-3 text-neutral-text"
        >
          <Icon name="arrow_back" />
          Voltar para o início
        </Link>
      </div>
    </section>
  )
}

function Section({
  title,
  action,
  children,
}: {
  title: string
  action?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 border-t border-neutral-details pt-8">
      <div className="flex items-start justify-between">
        <h2 className="font-heading text-[31px] font-bold leading-[1.25]">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex items-center gap-2.5">
      <span className="font-heading text-[25px] font-bold leading-[1.25]">{label}</span>
      <span className="text-base">{value}</span>
    </p>
  )
}
