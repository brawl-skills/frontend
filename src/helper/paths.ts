/**
 * Correct path to pages.
 * @param path default path
 * @returns modified path
 */
export default function paths(path: string): string {
  if (process.env.NODE_ENV === 'production') {
    return `/frontend${path}`
  }
  return path
}
