import { cn } from '../../lib/utils'

interface ChartCardProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function ChartCard({ title, children, className }: ChartCardProps) {
  return (
    <div className={cn("bg-card border border-border rounded-lg p-6", className)}>
      {title && <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>}
      {children}
    </div>
  )
}