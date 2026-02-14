
// DASHBOARD
export const monthlyChartData = [
  { month: 'Jan', sales: 3200, revenue: 2400 },
  { month: 'Feb', sales: 2800, revenue: 1800 },
  { month: 'Mar', sales: 4200, revenue: 3200 },
  { month: 'Apr', sales: 3800, revenue: 2900 },
  { month: 'May', sales: 4500, revenue: 3600 },
  { month: 'Jun', sales: 4100, revenue: 3300 },
  { month: 'Jul', sales: 4800, revenue: 3900 },
  { month: 'Aug', sales: 3900, revenue: 3100 },
  { month: 'Sep', sales: 4400, revenue: 3500 },
  { month: 'Oct', sales: 5100, revenue: 4200 },
  { month: 'Nov', sales: 4700, revenue: 3800 },
  { month: 'Dec', sales: 5300, revenue: 4500 },
]

export const peakDays = [
  { day: 'Mar 12', value: '$2,450', peak: true },
  { day: 'Mar 08', value: '$2,100', peak: true },
  { day: 'Mar 15', value: '$1,890', peak: false },
]

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

export const statCardsData = [
  {
    icon: 'Users',
    name: 'Total Users',
    data: '2,345',
    suffix: undefined,
    badge: 'positive',
    badgeValue: '12.3',
    badgeLabel: 'vs last month',
  },
  {
    icon: 'MousePointerClick',
    name: 'Total Clicks',
    data: '45.6',
    suffix: 'K',
    badge: 'positive',
    badgeValue: '8.2',
    badgeLabel: 'vs last month',
  },
]

// CUSTOMERS
export const customerStats = [
  {
    icon: 'Users',
    name: 'Total Customers',
    data: '6,100',
    suffix: undefined,
    badge: 'positive',
    badgeValue: '8.2',
    badgeLabel: 'vs last month',
  },
  {
    icon: 'ShoppingCart',
    name: 'Total Orders',
    data: '1,250',
    suffix: undefined,
    badge: 'positive',
    badgeValue: '12.5',
    badgeLabel: 'vs last month',
  },
  {
    icon: 'DollarSign',
    name: 'Total Revenue',
    data: '$125K',
    suffix: undefined,
    badge: 'positive',
    badgeValue: '5.3',
    badgeLabel: 'vs last month',
  },
  {
    icon: 'TrendingUp',
    name: 'Avg Order Value',
    data: '$235',
    suffix: undefined,
    badge: 'negative',
    badgeValue: '2.1',
    badgeLabel: 'vs last month',
  },
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

export const customerDemographics = [
  { country: 'United States', code: 'US', customers: 4250, percentage: 65 },
  { country: 'Germany', code: 'DE', customers: 1850, percentage: 35 },
]

export const recentOrders: Array<{
  id: string
  customer: string
  product: string
  amount: number
  status: 'delivered' | 'pending' | 'delivery' | 'canceled'
  date: string
}> = [
  { id: 'ORD-001', customer: 'John Doe', product: 'Laptop', amount: 1200, status: 'delivered', date: '2026-03-15' },
  { id: 'ORD-002', customer: 'Jane Smith', product: 'Monitor', amount: 450, status: 'pending', date: '2026-03-14' },
  { id: 'ORD-003', customer: 'Mike Johnson', product: 'Keyboard', amount: 120, status: 'delivery', date: '2026-03-14' },
  { id: 'ORD-004', customer: 'Sarah Wilson', product: 'Mouse', amount: 55, status: 'canceled', date: '2026-03-13' },
  { id: 'ORD-005', customer: 'Tom Brown', product: 'USB Cable', amount: 25, status: 'delivered', date: '2026-03-12' },
]

// ANALYTICS
export const analyticsStats = [
  {
    icon: 'Eye',
    name: 'Total Visits',
    data: '24.3K',
    suffix: undefined,
    badge: 'positive',
    badgeValue: '18.5',
    badgeLabel: 'vs last month',
  },
  {
    icon: 'Users',
    name: 'Unique Users',
    data: '8.4K',
    suffix: undefined,
    badge: 'positive',
    badgeValue: '12.3',
    badgeLabel: 'vs last month',
  },
  {
    icon: 'TrendingUp',
    name: 'Conversion Rate',
    data: '5.2%',
    suffix: undefined,
    badge: 'positive',
    badgeValue: '2.1',
    badgeLabel: 'vs last month',
  },
  {
    icon: 'BarChart3',
    name: 'Bounce Rate',
    data: '31%',
    suffix: undefined,
    badge: 'negative',  
    badgeValue: '5.2',
    badgeLabel: 'vs last month',
  },
]

export const analyticsChartData = [
  { month: 'Jan', visits: 12000, bounceRate: 45, conversionRate: 3.2 },
  { month: 'Feb', visits: 14200, bounceRate: 42, conversionRate: 3.5 },
  { month: 'Mar', visits: 16800, bounceRate: 40, conversionRate: 3.8 },
  { month: 'Apr', visits: 15400, bounceRate: 43, conversionRate: 3.6 },
  { month: 'May', visits: 18900, bounceRate: 38, conversionRate: 4.1 },
  { month: 'Jun', visits: 17600, bounceRate: 41, conversionRate: 3.9 },
  { month: 'Jul', visits: 19800, bounceRate: 37, conversionRate: 4.3 },
  { month: 'Aug', visits: 18200, bounceRate: 39, conversionRate: 4.0 },
  { month: 'Sep', visits: 20100, bounceRate: 36, conversionRate: 4.5 },
  { month: 'Oct', visits: 21400, bounceRate: 35, conversionRate: 4.7 },
  { month: 'Nov', visits: 22800, bounceRate: 33, conversionRate: 4.9 },
  { month: 'Dec', visits: 24300, bounceRate: 31, conversionRate: 5.2 },
]

export const trafficSources = [
  { source: 'Organic Search', visits: 12450, percentage: 45 },
  { source: 'Direct', visits: 8320, percentage: 30 },
  { source: 'Social Media', visits: 4180, percentage: 15 },
  { source: 'Referral', visits: 1850, percentage: 7 },
  { source: 'Paid Ads', visits: 1200, percentage: 3 },
]

export const deviceMetrics = [
  { name: 'Desktop', value: 65 },
  { name: 'Mobile', value: 28 },
  { name: 'Tablet', value: 7 },
]

// LINKS
export const linksStats = [
  {
    icon: 'Link2',
    name: 'Total Links',
    data: '340',
    suffix: undefined,
    badge: 'positive',
    badgeValue: '22.5',
    badgeLabel: 'vs last month',
  },
  {
    icon: 'MousePointerClick',
    name: 'Total Clicks',
    data: '28.4K',
    suffix: undefined,
    badge: 'positive',
    badgeValue: '18.2',
    badgeLabel: 'vs last month',
  },
  {
    icon: 'TrendingUp',
    name: 'Active Links',
    data: '320',
    suffix: undefined,
    badge: 'positive',
    badgeValue: '5.3',
    badgeLabel: 'vs last month',
  },
  {
    icon: 'Link2',
    name: 'Avg Clicks/Link',
    data: '83.5',
    suffix: undefined,
    badge: 'negative',
    badgeValue: '3.2',
    badgeLabel: 'vs last month',
  },
]

export const linksChartData = [
  { month: 'Jan', created: 120, clicks: 2400, active: 110 },
  { month: 'Feb', created: 145, clicks: 2210, active: 135 },
  { month: 'Mar', created: 180, clicks: 2290, active: 165 },
  { month: 'Apr', created: 165, clicks: 2000, active: 150 },
  { month: 'May', created: 210, clicks: 2181, active: 195 },
  { month: 'Jun', created: 195, clicks: 2500, active: 180 },
  { month: 'Jul', created: 240, clicks: 2100, active: 225 },
  { month: 'Aug', created: 220, clicks: 2100, active: 210 },
  { month: 'Sep', created: 265, clicks: 2100, active: 250 },
  { month: 'Oct', created: 290, clicks: 2100, active: 275 },
  { month: 'Nov', created: 310, clicks: 2100, active: 295 },
  { month: 'Dec', created: 340, clicks: 2100, active: 320 },
]

export const recentLinks: Array<{
  id: string
  title: string
  originalUrl: string
  shortCode: string
  clicks: number
  status: 'active' | 'inactive'
  created: string
}> = [
  { id: 'LNK-001', title: 'Google Search', originalUrl: 'https://google.com', shortCode: 'abc123', clicks: 1250, status: 'active', created: '2026-03-01' },
  { id: 'LNK-002', title: 'GitHub Profile', originalUrl: 'https://github.com/user', shortCode: 'def456', clicks: 850, status: 'active', created: '2026-02-28' },
  { id: 'LNK-003', title: 'Blog Post', originalUrl: 'https://blog.example.com/post', shortCode: 'ghi789', clicks: 420, status: 'active', created: '2026-02-25' },
  { id: 'LNK-004', title: 'Old Campaign', originalUrl: 'https://campaign.old.com', shortCode: 'jkl012', clicks: 0, status: 'inactive', created: '2026-01-15' },
  { id: 'LNK-005', title: 'Product Launch', originalUrl: 'https://product.example.com', shortCode: 'mno345', clicks: 2100, status: 'active', created: '2026-03-10' },
]

export const linkGaugeData = {
  value: 82,
  target: 350,
  current: 287,
  projected: 340,
  daysRemaining: 21,
  dailyNeed: 3,
  lastMonthChange: 15.2,
  targetChange: -18,
}

// SETTINGS/PROFILE
export const settingsStats = [
  {
    icon: 'Users',
    name: 'Account Status',
    data: 'Active',
    badge: 'positive',
    badgeValue: 'Pro',
    badgeLabel: 'Plan',
  },
  {
    icon: 'Lock',
    name: 'Security Level',
    data: 'High',
    badge: 'positive',
    badgeValue: '100',
    badgeLabel: 'Score',
  },
  {
    icon: 'Clock',
    name: 'Last Login',
    data: '2 hours',
    badge: 'positive',
    badgeValue: 'Online',
    badgeLabel: 'Now',
  },
]