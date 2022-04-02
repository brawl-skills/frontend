/**
 * Randomize function
 * @param min minimal value
 * @param max max value
 * @returns Random value from min to max (included)
 */
export default function random(min: number, max: number): number {
  const minRounded = Math.ceil(min)
  const maxRounded = Math.floor(max)
  return Math.floor(Math.random() * (maxRounded - minRounded + 1)) + minRounded
}
