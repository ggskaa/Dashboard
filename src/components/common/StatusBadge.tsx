import { cn } from '@/lib/utils'

type StatusType = 'delivered' | 'pending' | 'delivery' | 'canceled'

interface StatusBadgeProps {
  status: StatusType
  className?: string
}

const statusConfig: Record<StatusType, { bg: string; text: string; label: string }> = {
  delivered: { bg: 'bg-success/10', text: 'text-success', label: 'Delivered' },
  pending: { bg: 'bg-warning/10', text: 'text-warning', label: 'Pending' },
  delivery: { bg: 'bg-primary/10', text: 'text-primary', label: 'In Delivery' },
  canceled: { bg: 'bg-destructive/10', text: 'text-destructive', label: 'Canceled' },
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span className={cn(
      'px-3 py-1 rounded-full text-xs font-medium',
      config.bg,
      config.text,
      className
    )}>
      {config.label}
    </span>
  )
}