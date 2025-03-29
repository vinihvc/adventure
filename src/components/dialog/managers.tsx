import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogImage,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FACTORIES, type FactoryType } from '@/content/factories'
import { upgradeAuto } from '@/store/atoms/factories'
import { UserSearch } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { UpgradeCard } from '../ui/upgrade-card'

const ManagersDialog = () => {
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button className="max-sm:w-full" variant="white" size="icon">
              <span className="sr-only">Open Managers</span>
              <UserSearch />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>

        <TooltipContent>Managers</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogImage src="/images/managers/manager.webp" alt="Manager" />

        <DialogHeader className="mt-12 sm:mt-10">
          <DialogTitle>Managers</DialogTitle>

          <DialogDescription>
            Hire managers to automate your factories.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-3">
          {Object.entries(FACTORIES).map(([key]) => (
            <UpgradeCard
              key={key}
              type="manager"
              factoryType={key as FactoryType}
              icon={UserSearch}
              image={`/images/managers/${key}.webp`}
              onUpgrade={() => upgradeAuto(key as FactoryType)}
            />
          ))}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button size="xl">Close Managers</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ManagersDialog
