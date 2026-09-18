import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import arrowBack from '@/assets/icons/arrow-back.svg'
import arrowForward from '@/assets/icons/arrow-forward.svg'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Button } from '@/components/Button'
import { FeatureChip } from '@/components/FeatureChip'
import { useAuthStore } from '@/stores/useAuthStore'
import { useUiStore } from '@/stores/useUiStore'
import { formatDailyRate } from '@/utils/formatPrice'
import { getVehicleById } from '@/utils/vehicles'

export function VehicleDetails() {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const vehicle = getVehicleById(id)
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const openAuthModal = useUiStore((state) => state.openAuthModal)
  const setPendingReservationId = useUiStore((state) => state.setPendingReservationId)
  const [photoIndex, setPhotoIndex] = useState(0)

  if (!vehicle) {
    return (
      <p className="mx-auto max-w-[1200px] px-4 py-10">Veículo não encontrado.</p>
    )
  }

  const selectedVehicle = vehicle

  const photo = selectedVehicle.gallery[photoIndex] ?? selectedVehicle.image

  function goToReservation() {
    if (!isLoggedIn) {
      setPendingReservationId(selectedVehicle.id)
      openAuthModal('login')
      return
    }
    navigate(`/reserva/${selectedVehicle.id}`)
  }

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8 md:px-6">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Detalhes' },
        ]}
      />

      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        <div className="relative flex h-[409px] w-full items-center justify-between bg-neutral-details px-2 lg:w-[586px]">
          <img
            src={photo}
            alt={vehicle.name}
            className="absolute inset-0 size-full object-contain"
          />
          <button
            type="button"
            className="relative z-10 flex size-8 items-center justify-center rounded-full bg-brand-primary-pure p-3"
            aria-label="Foto anterior"
            onClick={() =>
              setPhotoIndex((index) =>
                index === 0 ? vehicle.gallery.length - 1 : index - 1,
              )
            }
          >
            <img src={arrowBack} alt="" width={24} height={24} />
          </button>
          <button
            type="button"
            className="relative z-10 flex size-8 items-center justify-center rounded-full bg-brand-primary-pure p-3"
            aria-label="Próxima foto"
            onClick={() =>
              setPhotoIndex((index) => (index + 1) % vehicle.gallery.length)
            }
          >
            <img src={arrowForward} alt="" width={24} height={24} />
          </button>
        </div>

        <div className="flex w-full flex-col gap-4 lg:w-[588px]">
          <h1 className="font-heading text-[39px] font-bold leading-[1.25] text-neutral-black">
            {vehicle.name}
          </h1>
          <p className="whitespace-pre-line text-base text-neutral-black">
            {vehicle.description}
          </p>
          <p className="flex items-center text-neutral-black">
            <span className="font-heading text-[25px] font-bold leading-[1.25]">
              {formatDailyRate(vehicle.dailyRate)}
            </span>
            <span className="text-xl">/diária</span>
          </p>
          <Button className="w-fit" onClick={goToReservation}>
            Reservar o veículo
          </Button>
          <div className="flex flex-wrap gap-2">
            {vehicle.features.map((feature) => (
              <FeatureChip key={feature} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
