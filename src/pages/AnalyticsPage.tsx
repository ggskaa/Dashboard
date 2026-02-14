import { AnalyticsHeader } from '@/features/Analytics/AnalyticsHeader'
import { AnalyticsStatsSection } from '@/features/Analytics/AnalyticsStats'
import { VisitsConversionChart } from '@/features/Analytics/VisitsConversionChart'
import { DeviceBreakdown } from '@/features/Analytics/DeviceBreakdown'
import { TopSources } from '@/features/Analytics/TopSources'

export default function AnalyticsPage() {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <AnalyticsHeader />
      <AnalyticsStatsSection />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <VisitsConversionChart />
          {/* <DeviceBreakdown /> */}
        </div>
        <div>
          <TopSources />
        </div>
      </div>
    </div>
  )
}
