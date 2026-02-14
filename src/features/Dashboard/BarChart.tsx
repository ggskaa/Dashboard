import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartCard }  from './ChartCard'

interface ChartData {
  [key: string]: string | number
}

interface BarChartComponentProps {
  data: ChartData[]
  title?: string
  dataKey?: string
  height?: number
  color?: string
  showLegend?: boolean
  showGrid?: boolean
  xAxisKey?: string
  margin?: { top: number; right: number; left: number; bottom: number }
}

export function BarChartComponent({
  data,
  title = 'Chart',
  dataKey = 'value',
  height = 300,
  color = 'var(--chart-3)',
  showLegend = false,
  showGrid = true,
  xAxisKey = 'name',
  margin = { top: 10, right: 30, left: 0, bottom: 0 },
}: BarChartComponentProps) {
  return (
    <ChartCard title={title}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={margin}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />}
          <XAxis 
            dataKey={xAxisKey} 
            stroke="var(--muted-foreground)" 
            style={{ fontSize: '12px' }} 
          />
          <YAxis 
            stroke="var(--muted-foreground)" 
            style={{ fontSize: '12px' }} 
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--card)', 
              border: '1px solid var(--border)', 
              borderRadius: '0.375rem' 
            }} 
          />
          <Bar dataKey={dataKey} fill={color} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}