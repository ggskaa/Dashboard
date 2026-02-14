import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartCard } from '@/features/Dashboard/ChartCard'
import { analyticsChartData } from '@/mockstuff/data'
import { chartConfigs } from '@/mockstuff/chartConfigs'

export function VisitsConversionChart() {
  const config = chartConfigs.visitsConversion

  return (
    <ChartCard title={config.title}>
      <ResponsiveContainer width="100%" height={config.height}>
        <LineChart data={analyticsChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey={config.xAxisKey} stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
          <YAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
          <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '0.375rem' }} />
          <Line type="monotone" dataKey={config.dataKey} stroke="var(--chart-3)" strokeWidth={2} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}