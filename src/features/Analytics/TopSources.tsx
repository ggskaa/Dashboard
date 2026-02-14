import { ChartCard } from '@/features/Dashboard/ChartCard'
import { trafficSources } from '@/mockstuff/data'

export function TopSources() {
  return (
    <ChartCard title="Top Sources">
      <div className="space-y-3">
        {trafficSources.map((source) => (
          <div key={source.source} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground font-medium">{source.source}</span>
              <span className="text-muted-foreground">{source.percentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-chart-3 rounded-full" 
                style={{ width: `${source.percentage}%` }} 
              />
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  )
}