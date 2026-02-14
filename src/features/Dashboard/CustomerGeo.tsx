import { ChartCard } from './ChartCard'

interface GeoData {
  country: string
  code: string
  customers: number
  percentage: number
}

interface CustomerGeoProps {
  data: GeoData[]
  title?: string
}

export function CustomerDemographics({ data, title = 'Customer Demographics' }: CustomerGeoProps) {
  const countryCoords: Record<string, { x: number; y: number }> = {
    'US': { x: 25, y: 35 },
    'DE': { x: 55, y: 25 },
  }

  return (
    <ChartCard title={title}>
      <div className="space-y-6">
        <div className="w-full h-40 bg-muted/30 rounded-lg relative overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* todo: make normal map some photo and use zlayers*/}
            <circle cx="25" cy="35" r="3" fill="var(--chart-3)" />
            <circle cx="55" cy="25" r="3" fill="var(--chart-3)" />
            
            <text x="25" y="45" textAnchor="middle" fontSize="8" fill="var(--muted-foreground)" className="pointer-events-none">
              USA
            </text>
            <text x="55" y="35" textAnchor="middle" fontSize="8" fill="var(--muted-foreground)" className="pointer-events-none">
              DE
            </text>
          </svg>
        </div>

        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.code} className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-xs font-bold">
                  {item.code}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.country}</p>
                  <p className="text-xs text-muted-foreground">{item.customers} customers</p>
                </div>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-chart-3 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-foreground w-8">{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  )
}