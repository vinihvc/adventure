import { useAppSelector } from './use-redux'

/**
 * Custom hook to wrap upgrades on redux store
 */
export const useUpgrade = () => {
  const { balance } = useAppSelector((state) => state)
}
