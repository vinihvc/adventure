import { AllianceDialog } from '@/components/dialog/alliances'
import { ManagersDialog } from '@/components/dialog/managers'
import { StatisticsDialog } from '@/components/dialog/statistics'
import { UpgradesDialog } from '@/components/dialog/upgrades'
import { cn } from '@/utils/cn'

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
