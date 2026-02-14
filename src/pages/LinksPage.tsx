import { LinksHeader } from '@/features/Links/LinksHeader'
import { LinksStatsSection } from '@/features/Links/LinksStats'
import { LinksChart } from '@/features/Links/LinksChart'
import { LinksGauge } from '@/features/Links/LinksGauge'
import { RecentLinksTable } from '@/features/Links/RecentLinksTable'

export default function LinksPage() {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <LinksHeader />
      <LinksStatsSection />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LinksChart />
        </div>

        <div>
          <LinksGauge />
        </div>
      </div>

      <div>
        <RecentLinksTable />
      </div>
    </div>
  )
}