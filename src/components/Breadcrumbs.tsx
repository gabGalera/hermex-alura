import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

type Crumb = {
  label: string
  to?: string
}

type BreadcrumbsProps = {
  items: Crumb[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap gap-1 text-base">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={item.label} className="flex gap-1">
            {item.to && !isLast ? (
              <Link to={item.to} className="text-neutral-text">
                {item.label}
              </Link>
            ) : (
              <span className={cn(isLast ? 'text-brand-primary-pure' : 'text-neutral-text')}>
                {item.label}
              </span>
            )}
            {isLast ? null : <span className="text-neutral-text">/</span>}
          </span>
        )
      })}
    </nav>
  )
}
