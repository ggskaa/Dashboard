import { PieChart, Pie, ResponsiveContainer } from 'recharts'

interface CircularProgressProps {
  value: number
  max?: number
  size?: number
}

export function GaugeChart({
  value,
  max = 100,
  size = 200,
}: CircularProgressProps) {
  const percentage = Math.min(value / max, 1)

  const data = [
    { name: 'Progress', value: percentage * 100, fill: 'var(--chart-3)' },
    { name: 'Remaining', value: (1 - percentage) * 100, fill: 'var(--muted)' },
  ]

  return (
    <div className="relative mx-auto flex items-center justify-center" style={{ width: size, height: size / 2 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={57}
            outerRadius={size * 0.45}
            dataKey="value"
            stroke='none'
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-center">
        <div className="text-2xl font-bold text-foreground leading-none">
          {value}%
        </div>
      </div>
    </div>
  )
}
