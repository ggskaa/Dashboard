import { StatCard } from '@/features/Dashboard/StatCard'
import { Eye, Users, TrendingUp, BarChart3 } from 'lucide-react'
import { analyticsStats } from '@/mockstuff/data'

const iconMap = {
  'Eye': <Eye size={20} />,
  'Users': <Users size={20} />,
  'TrendingUp': <TrendingUp size={20} />,
  'BarChart3': <BarChart3 size={20} />,
}

export function AnalyticsStatsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {analyticsStats.map((card, i) => (
        <StatCard 
          key={i}
          icon={iconMap[card.icon as keyof typeof iconMap]}
          name={card.name}
          data={card.data}
          suffix={card.suffix}
          statBadge={card.badge as any}
          statBadgeValue={card.badgeValue}
          statBadgeLabel={card.badgeLabel}
        />
      ))}
    </div>
  )
}