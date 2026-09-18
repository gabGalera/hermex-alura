import { Link } from 'react-router-dom'
import logoTaglineLight from '@/assets/brand/logo-tagline-light.svg'
import logoTagline from '@/assets/brand/logo-tagline.svg'
import logoWordmarkLight from '@/assets/brand/logo-wordmark-light.svg'
import logoWordmark from '@/assets/brand/logo-wordmark.svg'
import { cn } from '@/utils/cn'

type LogoProps = {
  variant?: 'default' | 'light'
  className?: string
}

export function Logo({ variant = 'default', className }: LogoProps) {
  const wordmark = variant === 'light' ? logoWordmarkLight : logoWordmark
  const tagline = variant === 'light' ? logoTaglineLight : logoTagline

  return (
    <Link
      to="/"
      aria-label="Hermex locadora"
      className={cn('relative block h-[60.472px] w-[180px] overflow-hidden', className)}
    >
      <img
        src={wordmark}
        alt=""
        width={151.392}
        height={29.3136}
        className="absolute top-[9.94%] right-[7.95%] left-[7.95%] max-w-none"
      />
      <img
        src={tagline}
        alt=""
        width={77.4797}
        height={10.7907}
        className="absolute top-[65.71%] right-[8.64%] bottom-[16.45%] left-[48.32%] max-w-none"
      />
    </Link>
  )
}
