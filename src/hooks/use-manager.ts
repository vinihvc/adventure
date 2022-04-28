import { useAppSelector } from './use-redux'

/**
 * Custom hook to wrap managers on redux store
 */
export const useManager = () => {
  const { balance } = useAppSelector((state) => state)
}
