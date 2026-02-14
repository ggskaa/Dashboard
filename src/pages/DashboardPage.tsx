import { StatCard } from '@/components/Dashboard/StatCard'
import { ChartCard } from '@/components/Dashboard/ChartCard'
import { GaugeChart } from '@/components/Dashboard/GaugeChart'
import { BarChartComponent } from '@/components/Dashboard/BarChart'
import { Users, MousePointerClick, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { monthlySalesData, peakDays, gaugeData, statCardsData } from '@/mockstuff/data'
import { chartConfigs } from '@/mockstuff/chartConfigs'

export default function DashboardPage() {
  const icons: Record<string, any> = {
    'Users': <Users size={20} />,
    'MousePointerClick': <MousePointerClick size={20} />,
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">March 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {statCardsData.map((card, i) => (
              <StatCard 
                key={i}
                icon={icons[card.icon]}
                name={card.name}
                data={card.data}
                suffix={card.suffix}
                statBadge={card.badge as any}
                statBadgeValue={card.badgeValue}
                statBadgeLabel={card.badgeLabel}
              />
            ))}
          </div>

          <BarChartComponent
            data={monthlySalesData}
            {...chartConfigs.monthlySales}
          />
          
        </div>

        <div>
          <ChartCard title="Monthly Target">
            <div className="flex flex-col items-center space-y-6">
              <GaugeChart value={gaugeData.value} max={100} size={160} />

              <div className="w-full space-y-4 text-sm">
                {/* <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Revenue</span>
                  <span className="font-semibold text-foreground">${gaugeData.current}K / ${gaugeData.target}K</span>
                </div> */}

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">vs Last Month</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpRight size={14} className="text-success" />
                      <span className="text-success">+{gaugeData.lastMonthChange}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">vs Target</span>
                    <div className="flex items-center gap-1">
                      <ArrowDownRight size={14} className="text-destructive" />
                      <span className="text-destructive">{gaugeData.targetChange}%</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div>
                  <p className="text-muted-foreground font-medium mb-2">Peak Days</p>
                  <div className="space-y-1.5">
                    {peakDays.map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-foreground">{item.day}</span>
                        <span className="font-medium text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">EOM Projection</span>
                  <span className="font-semibold text-foreground">${gaugeData.projected}K</span>
                </div>
              </div>
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  )
}