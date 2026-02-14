import { Link2 } from 'lucide-react'
import { ChartCard } from '@/features/Dashboard/ChartCard'
import { recentLinks } from '@/mockstuff/data'

export function RecentLinksTable() {
  return (
    <ChartCard title="Recent Links">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-3 font-medium text-muted-foreground">Link</th>
              <th className="text-right py-3 px-3 font-medium text-muted-foreground">Clicks</th>
              <th className="text-center py-3 px-3 font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentLinks.map((link) => (
              <tr key={link.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <Link2 size={16} className="text-muted-foreground shrink-0" />
                    <div className="min-w-0">
                      <p className="text-foreground font-medium text-xs md:text-sm truncate">{link.title}</p>
                      <p className="text-xs text-muted-foreground truncate">/{link.shortCode}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-3 text-right font-semibold text-foreground whitespace-nowrap">{link.clicks.toLocaleString()}</td>
                <td className="py-3 px-3 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${
                    link.status === 'active' 
                      ? 'bg-success/10 text-success' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {link.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartCard>
  )
}