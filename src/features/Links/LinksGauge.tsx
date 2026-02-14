import { ChartCard } from '@/features/Dashboard/ChartCard'
import { GaugeChart } from '@/features/Dashboard/GaugeChart'
import { ArrowUpRight } from 'lucide-react'
import { linkGaugeData } from '@/mockstuff/data'

export function LinksGauge() {
  return (
    <ChartCard title="Links Target">
      <div className="flex flex-col items-center space-y-6">
        <GaugeChart value={linkGaugeData.value} max={100} size={160} />

        <div className="w-full space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Created</span>
            <span className="font-semibold text-foreground">{linkGaugeData.current} / {linkGaugeData.target}</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">vs Last Month</span>
              <div className="flex items-center gap-1">
                <ArrowUpRight size={14} className="text-success" />
                <span className="text-success">+{linkGaugeData.lastMonthChange}%</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Days Remaining</span>
            <span className="font-semibold text-foreground">{linkGaugeData.daysRemaining}</span>
          </div>
        </div>
      </div>
    </ChartCard>
  )
}