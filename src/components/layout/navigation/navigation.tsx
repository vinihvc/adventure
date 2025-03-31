import { cn } from '@/lib/cn'
import React from 'react'

const AllianceDialog = React.lazy(() => import('@/components/dialog/alliances'))
const ManagersDialog = React.lazy(
  () => import('@/components/dialog/managers/managers'),
)
const StatisticsDialog = React.lazy(
  () => import('@/components/dialog/statistics'),
)
const UpgradesDialog = React.lazy(
  () => import('@/components/dialog/upgrades/upgrades'),
)

interface NavigationProps extends React.ComponentProps<'nav'> {}

export const Navigation = (props: NavigationProps) => {
  const { className, ...rest } = props

  return (
    <nav
      className={cn(
        'z-10 flex items-center gap-2 max-sm:[&>button]:border-transparent max-sm:[&>button]:bg-transparent max-sm:[&>button]:text-background max-sm:[&>button]:shadow-none max-sm:[&>button]:hover:bg-transparent',
        className,
      )}
      {...rest}
    >
      <UpgradesDialog />

      <ManagersDialog />

      <AllianceDialog />

      <StatisticsDialog />
    </nav>
  )
}
