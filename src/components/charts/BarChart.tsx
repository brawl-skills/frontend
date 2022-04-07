import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function BarChart({
  dataset,
  data1Name,
  data2Name,
}: BarChartProps) {
  const defaultOptions = {
    title: {
      display: true,
      color: '#ffffff',
      font: {
        family:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        weight: '600',
      },
    },
    ticks: {
      color: '#ffffff',
      font: {
        family:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      },
    },
  }
  const options = {
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
          ...defaultOptions.title,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#fff',
        },
      },
    },
  }

  const labels = dataset.map((e) => e.name)

  const data = {
    labels,
    datasets: [
      {
        label: data1Name,
        data: dataset.map((e) => e.data1),
        backgroundColor: '#FC8181',
      },
      {
        label: data2Name,
        data: dataset.map((e) => e.data2),
        backgroundColor: '#63B3ED',
      },
    ],
  }

  return <Bar options={options} data={data} />
}

export interface BarDataType {
  data1: number
  data2: number
  name: string
}

interface BarChartProps {
  data1Name: string
  data2Name: string
  dataset: Array<BarDataType>
}
