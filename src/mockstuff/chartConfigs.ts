export const chartConfigs = {
  // DASHBOARD
  monthlySales: {
    title: 'Monthly Sales',
    dataKey: 'sales',
    xAxisKey: 'month',
    height: 300,
  },

  // CUSTOMERS
  yearlyRevenue: {
    title: 'Sales & Revenue',
    dataKey: 'sales',
    xAxisKey: 'month',
    height: 320,
  },

  // LINKS
  linksCreated: {
    title: 'Links Created & Clicks',
    dataKey: 'created',
    xAxisKey: 'month',
    height: 300,
  },

  // ANALYTICS
  visitsConversion: {
    title: 'Visits & Conversion',
    dataKey: 'visits',
    xAxisKey: 'month',
    height: 300,
  },
} as const

export type ChartConfigKey = keyof typeof chartConfigs