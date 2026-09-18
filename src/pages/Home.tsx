import { useState } from 'react'
import { CarCard } from '@/components/CarCard'
import { HeroBanner } from '@/components/HeroBanner'
import { SelectField } from '@/components/Field'
import { useUiStore } from '@/stores/useUiStore'
import { getVehicleCategories, vehicles } from '@/utils/vehicles'

export function Home() {
  const headerQuery = useUiStore((state) => state.headerQuery)
  const [category, setCategory] = useState('')
  const categories = getVehicleCategories()

  const query = headerQuery.trim().toLowerCase()
  const filtered = vehicles.filter((vehicle) => {
    const matchesQuery =
      !query ||
      vehicle.name.toLowerCase().includes(query) ||
      vehicle.category.toLowerCase().includes(query)
    const matchesCategory = !category || vehicle.category === category
    return matchesQuery && matchesCategory
  })

  return (
    <>
      <HeroBanner />
      <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 py-10 md:px-6">
        <SelectField
          className="w-full max-w-[219px]"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Selecione a categoria"
        >
          <option value="">Selecione a categoria</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </SelectField>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {filtered.map((vehicle) => (
            <CarCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>
    </>
  )
}
