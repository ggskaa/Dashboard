import { StatCard } from '@/features/Dashboard/StatCard'
import { SalesRevenueChart } from '@/features/Dashboard/SalesRevenueChart'
import { CustomerDemographics } from '@/features/Dashboard/CustomerGeo'
import { RecentOrdersTable } from '@/features/Dashboard/RecentOrdersTable'
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react'
import { customerStats, yearlyChartData, customerDemographics, recentOrders } from '@/mockstuff/data'

export default function CustomersPage() {
  const icons: Record<string, any> = {
    'Users': <Users size={20} />,
    'ShoppingCart': <ShoppingCart size={20} />,
    'DollarSign': <DollarSign size={20} />,
    'TrendingUp': <TrendingUp size={20} />,
  }

  return (
    <div className="p-4 md:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Customers</h1>
        <p className="text-muted-foreground mt-1">Sales and customer analytics</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {customerStats.map((card, i) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesRevenueChart data={yearlyChartData} />
        </div>

        <div>
          <CustomerDemographics data={customerDemographics} />
        </div>
      </div>

      <div>
        <RecentOrdersTable orders={recentOrders} />
      </div>
    </div>
  )
}