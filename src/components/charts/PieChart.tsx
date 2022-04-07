/* eslint-disable react/require-default-props */
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart({
  dataset,
  tooltipAfter = '',
}: PieChartProps) {
  const bgColors = dataset.map((e) => {
    switch (e.color) {
      case 'blue':
        return '#63B3ED'
      case 'green':
        return '#68D391'
      case 'orange':
        return '#F6AD55'
      case 'purple':
        return '#B794F4'
      case 'red':
        return '#FC8181'
      case 'yellow':
        return '#F6E05E'
      default:
        return '#000'
    }
  })
  const data: ChartData<'pie', Array<number>, unknown> = {
    labels: dataset.map((e) => e.title),
    datasets: [
      {
        data: dataset.map((e) => e.count),
        backgroundColor: dataset.map((e, i) => bgColors[i]),
        borderColor: '#171923',
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  }

  const options: ChartOptions<'pie'> = {
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
      tooltip: {
        callbacks: {
          label: ({ label, parsed }) => `${label}: ${parsed}${tooltipAfter}`,
        },
      },
    },
  }

  return <Pie options={options} data={data} />
}

export interface PieDataType {
  title: string
  count: number
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple'
}

interface PieChartProps {
  dataset: Array<PieDataType>
  tooltipAfter?: string
}
