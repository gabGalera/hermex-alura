import { cn } from '@/utils/cn'

type IconProps = {
  name: string
  className?: string
  size?: number
}

export function Icon({ name, className, size = 16 }: IconProps) {
  return (
    <span
      className={cn('material-icons select-none', className)}
      style={{ fontSize: size }}
      aria-hidden
    >
      {name}
    </span>
  )
}
