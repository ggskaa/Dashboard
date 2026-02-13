import { StatCard } from '../components/common/StatCard'
import { 
  Users, 
  MousePointerClick, 
  TrendingUp, 
  Link2,
  DollarSign,
  Target,
  Zap,
  Activity
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Хедер страницы */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back, John! Here's your overview.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
            <span className="text-sm text-muted-foreground">Last 30 days</span>
            <span className="text-xs text-foreground">▼</span>
          </div>
        </div>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<Users size={20} />}
          name="Total Users"
          data="2,345"
          statBadge="positive"
          statBadgeValue="12.3"
          statBadgeLabel="vs last month"
        />
        
        <StatCard 
          icon={<MousePointerClick size={20} />}
          name="Total Clicks"
          data="45.6"
          suffix="K"
          statBadge="positive"
          statBadgeValue="8.2"
          statBadgeLabel="vs last month"
        />
        
        <StatCard 
          icon={<TrendingUp size={20} />}
          name="CTR"
          data="3.7"
          suffix="%"
          statBadge="negative"
          statBadgeValue="0.4"
          statBadgeLabel="vs last month"
        />
        
        <StatCard 
          icon={<Link2 size={20} />}
          name="Active Links"
          data="234"
          statBadge="positive"
          statBadgeValue="15"
          statBadgeLabel="vs last month"
        />
      </div>

      {/* Revenue Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard 
          icon={<DollarSign size={20} />}
          name="Revenue"
          prefix="$"
          data="12,345"
          suffix="USD"
          statBadge="positive"
          statBadgeValue="8.2"
          statBadgeLabel="vs last month"
        />
        
        <StatCard 
          icon={<Target size={20} />}
          name="Conversion Rate"
          data="3.2"
          suffix="%"
          statBadge="positive"
          statBadgeValue="0.7"
          statBadgeLabel="vs last month"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Activity size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
              <p className="text-sm text-muted-foreground">Your latest link clicks and events</p>
            </div>
          </div>
          <button className="text-sm text-primary hover:text-primary/80 transition-colors">
            View all
          </button>
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Zap size={14} className="text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Summer Sale 2026</p>
                  <p className="text-xs text-muted-foreground">Clicked by user@example.com</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-foreground">{Math.floor(Math.random() * 60) + 1} mins ago</p>
                <p className="text-xs text-success">+{Math.floor(Math.random() * 10)}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}