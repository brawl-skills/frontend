import random from './random'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

/**
 * Random color for Pie Chart
 * @returns color name
 */
export default function randPieColor():
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple' {
  // @ts-ignore
  return colors[random(0, colors.length - 1)]
}
