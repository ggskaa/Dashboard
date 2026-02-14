import { BarChartComponent } from '@/features/Dashboard/BarChart'
import { linksChartData } from '@/mockstuff/data'
import { chartConfigs } from '@/mockstuff/chartConfigs'

export function LinksChart() {
  const config = chartConfigs.linksCreated

  return (
    <BarChartComponent
      data={linksChartData}
      title={config.title}
      dataKey={config.dataKey}
      xAxisKey={config.xAxisKey}
      height={config.height}
    />
  )
}