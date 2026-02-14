  import { StatCard } from '@/features/Dashboard/StatCard'
import { Link2, MousePointerClick, TrendingUp } from 'lucide-react'
import { linksStats } from '@/mockstuff/data'

const iconMap = {
  'Link2': <Link2 size={20} />,
  'MousePointerClick': <MousePointerClick size={20} />,
  'TrendingUp': <TrendingUp size={20} />,
}

export function LinksStatsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {linksStats.map((card, i) => (
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