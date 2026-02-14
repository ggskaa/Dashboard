import { useState } from 'react'
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartCard } from './ChartCard'

interface SalesRevenueChartProps {
  data: Array<{ month: string; sales: number; revenue: number }>
  title?: string
  height?: number
}

export function SalesRevenueChart({ data, title = 'Sales & Revenue', height = 320 }: SalesRevenueChartProps) {
  const [viewMode, setViewMode] = useState<'sales' | 'revenue' | 'both'>('both')

  return (
    <ChartCard title={title}>
      <div className="space-y-4">
        <div className="flex gap-2">
          {(['sales', 'revenue', 'both'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={cn(
                'px-3 py-1 text-xs font-medium rounded transition-all',
                viewMode === mode
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent'
              )}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>

        <ResponsiveContainer width="100%" height={height}>
          <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="month" stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
            <YAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
            <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '0.375rem' }} />
            
            {(viewMode === 'sales' || viewMode === 'both') && (
              <Bar dataKey="sales" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
            )}
            {(viewMode === 'revenue' || viewMode === 'both') && (
              <Line type="monotone" dataKey="revenue" stroke="var(--chart-2)" strokeWidth={2} isAnimationActive={false} />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

import { cn } from '@/lib/utils'