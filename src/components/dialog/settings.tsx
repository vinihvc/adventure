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
import { Switch } from '@/components/ui/switch'
import { toggleMusic, toggleSfx, useSettings } from '@/store/atoms/settings'
import { Menu } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

const SettingDialog = () => {
  const settings = useSettings()

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button variant="white" size="icon">
              <span className="sr-only">Open Settings</span>
              <Menu />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>

        <TooltipContent>Settings</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogImage src="/images/msc/setting.webp" alt="Settings" />

        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>

          <DialogDescription>
            Change the game settings to fit your preferences.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5">
          <div className="flex items-center justify-between">
            <label htmlFor="toggle-music" className="font-semibold">
              Music
            </label>

            <Switch
              id="toggle-music"
              checked={settings.music}
              onCheckedChange={toggleMusic}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="toggle-sfx" className="font-semibold">
              SFX
            </label>

            <Switch
              id="toggle-sfx"
              checked={settings.sfx}
              onCheckedChange={toggleSfx}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button size="xl">Close Settings</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SettingDialog
