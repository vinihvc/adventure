// import useSound from 'use-sound'

import { Button } from '../../ui/button'

// import upgradeSfx from '@/assets/sfx/upgrade.wav'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog'
import { cn } from '../../../utils/cn'
import { FactoryTypeModel } from '../../../models/factories'

export const SidebarUpgrades = () => {
  // const [play] = useSound(upgradeSfx, { soundEnabled: settings.sfx })

  const handleUpgrade = (type: FactoryTypeModel) => {
    // play()
    // dispatch(upgrade(type))
  }

  // const potato = factories.find((factory) => factory.type === 'potato')
  // const land = factories.find((factory) => factory.type === 'land')
  // const ore = factories.find((factory) => factory.type === 'ore')
  // const weapon = factories.find((factory) => factory.type === 'weapon')
  // const medicine = factories.find((factory) => factory.type === 'medicine')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" size="sm">
          Upgrades
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upgrades</DialogTitle>
          <DialogDescription>
            Upgrade your factories to increase your income.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <Button
            className={
              cn('w-full')

              // potato!.upgrade &&
              //   'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
            }
            onClick={() => handleUpgrade('potato')}
            // disabled={potato!.upgrade || potato!.upgradeCost > balance.current}
          >
            <span> Upgrade Potato</span>

            {/* <span>
              {potato?.upgrade ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${Intl.NumberFormat().format(potato!.upgradeCost)}`
              )}
            </span> */}
          </Button>

          <Button
            className={
              cn('w-full')

              // land!.upgrade &&
              //   'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
            }
            onClick={() => handleUpgrade('land')}
            // disabled={land!.upgrade || land!.upgradeCost > balance.current}
          >
            <span> Upgrade Land</span>

            {/* <span>
              {land?.upgrade ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${Intl.NumberFormat().format(land!.upgradeCost)}`
              )}
            </span> */}
          </Button>

          <Button
            className={
              cn('w-full')

              // ore!.upgrade &&
              //   'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
            }
            onClick={() => handleUpgrade('ore')}
            // disabled={ore!.upgrade || ore!.upgradeCost > balance.current}
          >
            <span> Upgrade Ore</span>

            {/* <span>
              {ore?.upgrade ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${Intl.NumberFormat().format(ore!.upgradeCost)}`
              )}
            </span> */}
          </Button>

          <Button
            className={
              cn('w-full')

              // weapon!.upgrade &&
              //   'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
            }
            onClick={() => handleUpgrade('weapon')}
            // disabled={weapon!.upgrade || weapon!.upgradeCost > balance.current}
          >
            <span> Upgrade Weapon</span>

            {/* <span>
              {weapon?.upgrade ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${Intl.NumberFormat().format(weapon!.upgradeCost)}`
              )}
            </span> */}
          </Button>

          <Button
            className={
              cn('w-full')

              // medicine!.upgrade &&
              //   'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
            }
            onClick={() => handleUpgrade('medicine')}
            // disabled={
            //   medicine!.upgrade || medicine!.upgradeCost > balance.current
            // }
          >
            <span> Upgrade Medicine</span>

            {/* <span>
              {medicine?.upgrade ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${Intl.NumberFormat().format(medicine!.upgradeCost)}`
              )}
            </span> */}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
