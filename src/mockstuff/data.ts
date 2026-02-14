// -- diff datasets for BarChart
export const monthlySalesData = [
  { month: 'Jan', sales: 3200, revenue: 2400, clicks: 2400 },
  { month: 'Feb', sales: 2800, revenue: 1800, clicks: 1800 },
  { month: 'Mar', sales: 4200, revenue: 3200, clicks: 3200 },
  { month: 'Apr', sales: 3800, revenue: 2900, clicks: 2900 },
  { month: 'May', sales: 4500, revenue: 3600, clicks: 3600 },
  { month: 'Jun', sales: 4100, revenue: 3300, clicks: 3300 },
  { month: 'Jul', sales: 4800, revenue: 3900, clicks: 3900 },
  { month: 'Aug', sales: 3900, revenue: 3100, clicks: 3100 },
  { month: 'Sep', sales: 4400, revenue: 3500, clicks: 3500 },
  { month: 'Oct', sales: 5100, revenue: 4200, clicks: 4200 },
  { month: 'Nov', sales: 4700, revenue: 3800, clicks: 3800 },
  { month: 'Dec', sales: 5300, revenue: 4500, clicks: 4500 },
]

export const yearlyChartData = [
  { month: 'Jan', sales: 4000, revenue: 2400 },
  { month: 'Feb', sales: 3800, revenue: 2210 },
  { month: 'Mar', sales: 5200, revenue: 2290 },
  { month: 'Apr', sales: 4800, revenue: 2000 },
  { month: 'May', sales: 5500, revenue: 2181 },
  { month: 'Jun', sales: 4200, revenue: 2500 },
  { month: 'Jul', sales: 5800, revenue: 2100 },
  { month: 'Aug', sales: 5100, revenue: 2100 },
  { month: 'Sep', sales: 4900, revenue: 2100 },
  { month: 'Oct', sales: 5400, revenue: 2100 },
  { month: 'Nov', sales: 5800, revenue: 2100 },
  { month: 'Dec', sales: 6200, revenue: 2100 },
]

export const dailyUsersData = [
  { day: 'Mon', users: 1240, active: 890 },
  { day: 'Tue', users: 1850, active: 1240 },
  { day: 'Wed', users: 1520, active: 1100 },
  { day: 'Thu', users: 2780, active: 1890 },
  { day: 'Fri', users: 1890, active: 1350 },
  { day: 'Sat', users: 2390, active: 1680 },
  { day: 'Sun', users: 2490, active: 1770 },
]

export const weeklyClicksData = [
  { week: 'Week 1', clicks: 2400, impressions: 1800 },
  { week: 'Week 2', clicks: 3210, impressions: 2400 },
  { week: 'Week 3', clicks: 2290, impressions: 1700 },
  { week: 'Week 4', clicks: 2000, impressions: 1500 },
]

export const quarterlyGrowthData = [
  { quarter: 'Q1', growth: 12.5, revenue: 45000 },
  { quarter: 'Q2', growth: 18.3, revenue: 62000 },
  { quarter: 'Q3', growth: 15.8, revenue: 58000 },
  { quarter: 'Q4', growth: 22.1, revenue: 75000 },
]

export const productSalesData = [
  { product: 'Product A', amount: 4000, orders: 240 },
  { product: 'Product B', amount: 3000, orders: 140 },
  { product: 'Product C', amount: 2000, orders: 220 },
  { product: 'Product D', amount: 2780, orders: 290 },
  { product: 'Product E', amount: 1890, orders: 200 },
  { product: 'Product F', amount: 2390, orders: 221 },
]


export const peakDays = [
  { day: 'Mar 12', value: '$2,450', peak: true },
  { day: 'Mar 08', value: '$2,100', peak: true },
  { day: 'Mar 15', value: '$1,890', peak: false },
]

// ---- data for  Gauge
export const gaugeData = {
  value: 77,
  target: 50000,
  current: 38500,
  projected: 47200,
  daysRemaining: 14,
  dailyNeed: 821,
  lastMonthChange: 8.2,
  targetChange: -23,
}

// card data, but can be insert manualy (safe time with this for visual preview)

export const statCardsData = [
  {
    icon: 'Users',
    name: 'Total Customers',
    data: '1,767',
    badge: 'positive',
    badgeValue: '7.2',
    badgeLabel: 'vs last month',
  },
  {
    icon: 'MousePointerClick',
    name: 'Total Clicks',
    data: '45.6',
    suffix: 'K',
    badge: 'negative',
    badgeValue: '8.2',
    badgeLabel: 'vs last month',
  },
]



export const customerDemographics = [
  { country: 'United States', code: 'US', customers: 4250, percentage: 65 },
  { country: 'Germany', code: 'DE', customers: 1850, percentage: 35 },
]

export const recentOrders = [
  { id: 'ORD-001', customer: 'John Doe', product: 'Laptop', amount: 1200, status: 'delivered', date: '2026-03-15' },
  { id: 'ORD-002', customer: 'Jane Smith', product: 'Monitor', amount: 450, status: 'pending', date: '2026-03-14' },
  { id: 'ORD-003', customer: 'Mike Johnson', product: 'Keyboard', amount: 120, status: 'delivery', date: '2026-03-14' },
  { id: 'ORD-004', customer: 'Sarah Wilson', product: 'Mouse', amount: 55, status: 'canceled', date: '2026-03-13' },
  { id: 'ORD-005', customer: 'Tom Brown', product: 'USB Cable', amount: 25, status: 'delivered', date: '2026-03-12' },
]