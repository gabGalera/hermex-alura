import { type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { SelectField, TextField } from '@/components/Field'
import { useReservationStore } from '@/stores/useReservationStore'
import { cn } from '@/utils/cn'

const times = ['08:00', '09:00', '10:00', '11:00', '12:00', '14:00', '16:00', '18:00']

type CarSearchBarProps = {
  expanded?: boolean
}

export function CarSearchBar({ expanded = false }: CarSearchBarProps) {
  const navigate = useNavigate()
  const trip = useReservationStore((state) => state.trip)
  const setTrip = useReservationStore((state) => state.setTrip)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    navigate('/')
  }

  return (
    <section className="bg-brand-primary-dark">
      <form
        onSubmit={handleSubmit}
        className={cn(
          'mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-10 md:flex-row md:items-start md:px-6',
          expanded ? 'md:py-10' : 'md:py-10',
        )}
      >
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <TextField
              inverted
              icon={<Icon name="location_on" />}
              placeholder="Local de retirada"
              value={trip.pickupLocation}
              onChange={(event) => setTrip({ pickupLocation: event.target.value })}
            />
            <TextField
              inverted
              type="date"
              className="md:w-[128px]"
              icon={<Icon name="calendar_month" />}
              value={trip.pickupDate}
              onChange={(event) => setTrip({ pickupDate: event.target.value })}
            />
            <SelectField
              inverted
              className="md:w-[128px]"
              value={trip.pickupTime}
              onChange={(event) => setTrip({ pickupTime: event.target.value })}
              aria-label="Horário de retirada"
            >
              {times.map((time) => (
                <option key={time} value={time} className="text-neutral-text">
                  {time}
                </option>
              ))}
            </SelectField>
          </div>

          {expanded ? (
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <TextField
                inverted
                icon={<Icon name="location_on" />}
                placeholder="Local de devolução"
                value={trip.returnLocation}
                onChange={(event) => setTrip({ returnLocation: event.target.value })}
              />
              <TextField
                inverted
                type="date"
                className="md:w-[128px]"
                icon={<Icon name="calendar_month" />}
                value={trip.returnDate}
                onChange={(event) => setTrip({ returnDate: event.target.value })}
              />
              <SelectField
                inverted
                className="md:w-[128px]"
                value={trip.returnTime}
                onChange={(event) => setTrip({ returnTime: event.target.value })}
                aria-label="Horário de devolução"
              >
                {times.map((time) => (
                  <option key={`return-${time}`} value={time} className="text-neutral-text">
                    {time}
                  </option>
                ))}
              </SelectField>
            </div>
          ) : null}
        </div>

        <Button variant="secondary" type="submit" className="shrink-0">
          Buscar
        </Button>
      </form>
    </section>
  )
}
