/* eslint-disable react/require-default-props */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ChartData,
  ChartOptions,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

export default function LineChart({
  textColor,
  yTitle: yLabelText,
  xTitle: xLableText,
  yShortTitle,
  dataset,
  labels = dataset.map((e) => e.x),
}: LineChartProps) {
  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: yShortTitle,
        // @ts-ignore
        data: dataset,
        borderColor: textColor,
        backgroundColor: `${textColor}80`,
        tension: 0.3,
        pointHitRadius: 12,
        pointRadius: 4,
      },
    ],
  }

  const defaultOptions = {
    title: {
      display: true,
      color: textColor,
      font: {
        family:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        weight: '600',
      },
    },
    ticks: {
      color: textColor,
      font: {
        family:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      },
    },
  }

  const options: ChartOptions<'line'> = {
    aspectRatio: 1,
    parsing: {
      xAxisKey: 'x',
      yAxisKey: 'y',
    },
    scales: {
      x: {
        grid: {
          borderWidth: 0,
          display: false,
        },
        ...defaultOptions,
        title: {
          text: xLableText,
          ...defaultOptions.title,
        },
      },
      y: {
        grid: {
          borderWidth: 0,
          display: false,
        },
        ...defaultOptions,
        title: {
          text: yLabelText,
          ...defaultOptions.title,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  return <Line options={options} data={data} />
}

export interface LineDataType {
  x: number | string
  y: number | string
}

interface LineChartProps {
  yTitle: string
  xTitle: string
  yShortTitle: string
  dataset: Array<LineDataType>
  labels?: Array<unknown>
  textColor: string
}
