import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'google'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  children: ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary-pure text-neutral-white hover:bg-brand-primary-dark',
  secondary:
    'bg-brand-secondary-pure text-neutral-white hover:bg-brand-secondary-light',
  ghost: 'bg-neutral-white text-neutral-text hover:text-brand-primary-pure',
  google:
    'border border-neutral-details bg-neutral-white text-neutral-text hover:border-brand-primary-pure',
}

export function Button({
  variant = 'primary',
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded px-4 py-3 text-base leading-[1.2] transition-colors disabled:opacity-60',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
