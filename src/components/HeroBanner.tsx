import chevronLeft from '@/assets/hero/chevron-left.svg'
import chevronRight from '@/assets/hero/chevron-right.svg'
import driver from '@/assets/hero/driver.png'
import shapes from '@/assets/hero/shapes.svg'

export function HeroBanner() {
  return (
    <section className="relative h-[420px] overflow-hidden bg-brand-secondary-dark md:h-[600px]">
      <img
        src={shapes}
        alt=""
        className="pointer-events-none absolute top-0 left-0 hidden h-full w-auto max-w-none md:block"
      />
      <img
        src={driver}
        alt=""
        className="absolute top-[-40px] right-[-80px] h-[120%] max-w-none object-cover md:right-0 md:h-[852px] md:w-[1278px]"
      />
      <img
        src={chevronRight}
        alt=""
        width={128}
        height={127}
        className="absolute top-[98px] right-[152px] hidden md:block"
      />
      <img
        src={chevronLeft}
        alt=""
        width={77.44}
        height={77}
        className="absolute top-[287px] right-[440px] hidden rotate-180 md:block"
      />
      <div className="relative mx-auto max-w-[1200px] px-4 pt-16 md:px-6 md:pt-[64px]">
        <h1 className="font-heading max-w-[672px] text-[40px] leading-[1.25] font-bold md:text-[76px]">
          <span className="text-brand-primary-pure">Encontre o carro ideal</span>{' '}
          <span className="text-neutral-white">para todas as ocasiões</span>
        </h1>
      </div>
    </section>
  )
}
