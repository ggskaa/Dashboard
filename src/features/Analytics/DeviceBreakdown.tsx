import { PieChart, Pie, ResponsiveContainer, Legend } from 'recharts'
import { ChartCard } from '@/features/Dashboard/ChartCard'
import { deviceMetrics } from '@/mockstuff/data'

export function DeviceBreakdown() {
  const data = deviceMetrics.map((item, index) => ({
    name: item.name,
    value: item.value,
    fill: index === 0 ? 'var(--chart-1)' : index === 1 ? '--ring' : '--ring',
  }))

  return (
    <ChartCard title="Device Breakdown">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie 
            data={data}
            cx="50%" 
            cy="45%" 
            outerRadius={90} 
            dataKey="value"
            label={({ value }) => `${value}%`}
            labelLine={false}
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}