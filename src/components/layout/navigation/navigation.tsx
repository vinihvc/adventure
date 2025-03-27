import { cn } from '@/utils/cn'
import React from 'react'

const AllianceDialog = React.lazy(() => import('@/components/dialog/alliances'))
const ManagersDialog = React.lazy(() => import('@/components/dialog/managers'))
const StatisticsDialog = React.lazy(
  () => import('@/components/dialog/statistics'),
)
const UpgradesDialog = React.lazy(() => import('@/components/dialog/upgrades'))

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navigation = (props: NavigationProps) => {
  const { className, ...rest } = props

  return (
    <nav className={cn('z-10 flex items-center gap-2', className)} {...rest}>
      <StatisticsDialog />

      <UpgradesDialog />

      <ManagersDialog />

      <AllianceDialog />
    </nav>
  )
}
