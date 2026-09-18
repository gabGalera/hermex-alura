import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  icon?: ReactNode
  trailing?: ReactNode
  inverted?: boolean
}

export function TextField({
  label,
  icon,
  trailing,
  inverted = false,
  className,
  ...props
}: FieldProps) {
  return (
    <label className={cn('flex w-full flex-col gap-1', className)}>
      {label ? <span className="text-base text-neutral-text">{label}</span> : null}
      <span
        className={cn(
          'flex items-center gap-2 rounded border px-4 py-3 text-base leading-[1.2]',
          inverted
            ? 'border-neutral-white text-neutral-white'
            : 'border-neutral-text text-neutral-text',
        )}
      >
        {icon}
        <input
          className={cn(
            'min-w-0 flex-1 bg-transparent outline-none placeholder:text-current',
            inverted && 'placeholder:text-neutral-white',
          )}
          {...props}
        />
        {trailing}
      </span>
    </label>
  )
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  inverted?: boolean
}

export function SelectField({
  inverted = false,
  className,
  children,
  ...props
}: SelectFieldProps) {
  return (
    <select
      className={cn(
        'h-[43px] w-full appearance-none rounded border bg-transparent bg-[length:16px] bg-[right_16px_center] bg-no-repeat px-4 py-3 pr-10 text-base leading-[1.2] outline-none',
        inverted
          ? 'border-neutral-white text-neutral-white'
          : 'border-brand-secondary-pure text-brand-secondary-pure',
        className,
      )}
      style={{
        backgroundImage: inverted
          ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E")`
          : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%231d2f40' viewBox='0 0 16 16'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E")`,
      }}
      {...props}
    >
      {children}
    </select>
  )
}
