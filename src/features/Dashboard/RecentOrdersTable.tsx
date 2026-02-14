import { ChartCard } from './ChartCard'
import { StatusBadge } from '@/components/common/StatusBadge'
import { Package, Truck, CheckCircle2, XCircle } from 'lucide-react'

interface Order {
  id: string
  customer: string
  product: string
  amount: number
  status: 'delivered' | 'pending' | 'delivery' | 'canceled'
  date: string
}

interface RecentOrdersTableProps {
  orders: Order[]
  title?: string
}

const productIcons: Record<string, React.ReactNode> = {
  'Laptop': <Package size={16} />,
  'Monitor': <Package size={16} />,
  'Keyboard': <Package size={16} />,
  'Mouse': <Package size={16} />,
  'USB Cable': <Package size={16} />,
}

export function RecentOrdersTable({ orders, title = 'Recent Orders' }: RecentOrdersTableProps) {
  return (
    <ChartCard title={title}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-3 font-medium text-muted-foreground">Order</th>
              <th className="text-left py-3 px-3 font-medium text-muted-foreground">Customer</th>
              <th className="text-left py-3 px-3 font-medium text-muted-foreground">Product</th>
              <th className="text-right py-3 px-3 font-medium text-muted-foreground">Amount</th>
              <th className="text-center py-3 px-3 font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                <td className="py-3 px-3 text-foreground font-medium">{order.id}</td>
                <td className="py-3 px-3 text-foreground">{order.customer}</td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    {productIcons[order.product] || <Package size={16} />}
                    <span className="text-foreground">{order.product}</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-right font-medium text-foreground">${order.amount}</td>
                <td className="py-3 px-3 text-center">
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartCard>
  )
}