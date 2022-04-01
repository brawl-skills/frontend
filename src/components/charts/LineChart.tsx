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

const dataset: Array<DataType> = [
  { lvl: 10, players: 1000 },
  { lvl: 20, players: 1100 },
  { lvl: 30, players: 1500 },
  { lvl: 40, players: 1600 },
  { lvl: 50, players: 1550 },
]

const data: ChartData<'line'> = {
  labels: dataset.map((e) => `${e.lvl} lvl`),
  datasets: [
    {
      label: 'Кол-во игроков',
      // @ts-ignore
      data: dataset,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.3,
    },
  ],
}

export default function LineChart({
  textColor = 'pink',
  yLabelText,
  xLableText,
}: LineChartProps) {
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
      xAxisKey: 'lvl',
      yAxisKey: 'players',
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
    plugins: {},
  }
  return <Line options={options} data={data} />
}

interface DataType {
  lvl: number
  players: number
}

interface LineChartProps {
  textColor?: string
  yLabelText: string
  xLableText: string
}
