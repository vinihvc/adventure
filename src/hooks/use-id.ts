/**
 * Custom hook to generate unique ids
 *
 * @example
 * ```js
 * const id = useId('component-name');
 * ```
 */
export const useId = (initial: string) => {
  return `${initial}_${Math.random().toString(36).substring(2, 9)}`
}
