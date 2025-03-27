import { AllianceDialog } from '@/components/dialog/alliances'
import { ManagersDialog } from '@/components/dialog/managers'
import { StatisticsDialog } from '@/components/dialog/statistics'
import { UpgradesDialog } from '@/components/dialog/upgrades'
import { cn } from '@/utils/cn'

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navigation = (props: NavigationProps) => {
  const { className, ...rest } = props

  return (
    <nav
      className={cn(
        'fixed inset-x-0 bottom-0 z-10 flex h-14 items-center gap-2 border-neutral-700 border-t bg-foreground sm:hidden',
        className,
      )}
      {...rest}
    >
      <StatisticsDialog />

      <UpgradesDialog />

      <ManagersDialog />

      <AllianceDialog />
    </nav>
  )
}
