export const chartConfigs = {
  monthlySales: {
    title: 'Monthly Sales',
    dataKey: 'sales',
    xAxisKey: 'month',
    color: 'var(--chart-3)',
    height: 300,
  },
  
  monthlyRevenue: {
    title: 'Monthly Revenue',
    dataKey: 'revenue',
    xAxisKey: 'month',
    color: 'var(--chart-1)',
    height: 300,
  },
  
  dailyUsers: {
    title: 'Daily Active Users',
    dataKey: 'users',
    xAxisKey: 'day',
    color: 'var(--chart-2)',
    height: 280,
  },
  
  weeklyClicks: {
    title: 'Weekly Clicks',
    dataKey: 'clicks',
    xAxisKey: 'week',
    color: 'var(--success)',
    height: 280,
  },
  
  quarterlyGrowth: {
    title: 'Quarterly Growth',
    dataKey: 'growth',
    xAxisKey: 'quarter',
    color: 'var(--chart-3)',
    height: 250,
  },

  productSales: {
    title: 'Product Performance',
    dataKey: 'amount',
    xAxisKey: 'product',
    color: 'var(--destructive)',
    height: 300,
  },
}

export type ChartConfigKey = keyof typeof chartConfigs