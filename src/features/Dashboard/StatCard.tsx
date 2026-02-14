import { cn } from '../../lib/utils'

interface StatCardProps {
  icon?: React.ReactNode
  name?: string
  data?: number | string
  prefix?: string
  suffix?: string
  statBadge?: 'positive' | 'negative'
  statBadgeValue?: string | number
  statBadgeLabel?: string
  className?: string
}

export function StatCard({
  icon,
  name = 'Untitled',
  data,
  prefix = '',
  suffix = '',
  statBadge = 'positive',
  statBadgeValue,
  statBadgeLabel = 'vs last month',
  className
}: StatCardProps) {
  return (
    <div className={cn(
      "bg-card border-2 border-border/80 rounded-xl p-5 md:p-6",
      "hover:border-primary/30 hover:shadow-xl transition-all",
      "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        {icon && (
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-primary w-5 h-5">{icon}</span>
          </div>
        )}
        {statBadgeValue && (
          <span className={cn(
            "flex items-center justify-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
            statBadge === 'positive'
              ? "bg-success/10 text-success"
              : "bg-destructive/10 text-destructive"
          )}>
            {statBadge === 'positive' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 11V5H11"/><path d="M5 5L19 19"/>
              </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-down-right-icon lucide-move-down-right"><path d="M19 13V19H13" /><path d="M5 5L19 19" />
                </svg>
            )}
            <span>{statBadgeValue}%</span>
          </span>
        )}
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground/80 font-medium">{name}</p>
        <div className="flex items-baseline gap-1.5">
          {prefix && <span className="text-lg text-muted-foreground/70">{prefix}</span>}
          <span className="text-3xl font-bold text-foreground tracking-tight">
            {data}
          </span>
          {suffix && <span className="text-sm text-muted-foreground/60">{suffix}</span>}
        </div>
        {statBadgeLabel && statBadgeValue && (
          <p className="text-xs text-muted-foreground/50">
            {statBadgeLabel}
          </p>
        )}
      </div>
    </div>
  )
}