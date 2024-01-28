import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Switch } from '../ui/switch'

import { Cog } from 'lucide-react'
import { cn } from '../../utils/cn'

interface SettingDialogProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SettingDialog = (props: SettingDialogProps) => {
  const { className, ...rest } = props

  return (
    <Dialog>
      <DialogTrigger>
        <button className={cn(className)} {...rest}>
          <Cog />
          <div className="sr-only">Open Settings</div>
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">Music</div>

            <Switch
            // checked={music}
            // onChange={() => dispatch(toggleMusic())}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">SFX</div>

            <Switch
            // checked={sfx}
            // onChange={() => dispatch(toggleSfx())}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}