import clsx from 'clsx'

import useSound from 'use-sound'

import { CheckIcon } from '@heroicons/react/solid'

import { useDisclosure } from '@/hooks/use-disclosure'
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux'

import { FactoryTypeModel } from '@/models/factories'

import { upgrade } from '@/store/thunks/factories'

import { Button } from '../button'
import { Modal } from '../modal'

import upgradeSfx from '@/assets/sfx/upgrade.wav'

export const SidebarUpgrades = () => {
  const dispatch = useAppDispatch()

  const { balance, factories, settings } = useAppSelector((state) => state)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [play] = useSound(upgradeSfx, { soundEnabled: settings.sfx })

  const handleUpgrade = (type: FactoryTypeModel) => {
    play()

    dispatch(upgrade(type))
  }

  const potato = factories.find((factory) => factory.type === 'potato')
  const land = factories.find((factory) => factory.type === 'land')
  const ore = factories.find((factory) => factory.type === 'ore')
  const weapon = factories.find((factory) => factory.type === 'weapon')
  const medicine = factories.find((factory) => factory.type === 'medicine')

  return (
    <>
      <Button className="bg-blue-500 hover:bg-blue-600" onClick={onOpen}>
        Upgrades
      </Button>

      <Modal title="Upgrades" isOpen={isOpen} onClose={onClose}>
        <div className="space-y-5">
          <Button
            className={clsx(
              'bg-blue-500 hover:bg-blue-600 justify-between disabled:bg-slate-500 hover:disabled:bg-slate-500',
              potato!.upgrade &&
                'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
            )}
            onClick={() => handleUpgrade('potato')}
            disabled={potato!.upgrade || potato!.upgradeCost > balance.current}
          >
            <span> Upgrade Potato</span>

            <span>
              {potato?.upgrade ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${Intl.NumberFormat().format(potato!.upgradeCost)}`
              )}
            </span>
          </Button>

          <Button
            className={clsx(
              'bg-blue-500 hover:bg-blue-600 justify-between disabled:bg-slate-500 hover:disabled:bg-slate-500',
              land!.upgrade &&
                'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
            )}
            onClick={() => handleUpgrade('land')}
            disabled={land!.upgrade || land!.upgradeCost > balance.current}
          >
            <span> Upgrade Land</span>

            <span>
              {land?.upgrade ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${Intl.NumberFormat().format(land!.upgradeCost)}`
              )}
            </span>
          </Button>

          <Button
            className={clsx(
              'bg-blue-500 hover:bg-blue-600 justify-between disabled:bg-slate-500 hover:disabled:bg-slate-500',
              ore!.upgrade &&
                'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
            )}
            onClick={() => handleUpgrade('ore')}
            disabled={ore!.upgrade || ore!.upgradeCost > balance.current}
          >
            <span> Upgrade Ore</span>

            <span>
              {ore?.upgrade ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${Intl.NumberFormat().format(ore!.upgradeCost)}`
              )}
            </span>
          </Button>

          <Button
            className={clsx(
              'bg-blue-500 hover:bg-blue-600 justify-between disabled:bg-slate-500 hover:disabled:bg-slate-500',
              weapon!.upgrade &&
                'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
            )}
            onClick={() => handleUpgrade('weapon')}
            disabled={weapon!.upgrade || weapon!.upgradeCost > balance.current}
          >
            <span> Upgrade Weapon</span>

            <span>
              {weapon?.upgrade ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${Intl.NumberFormat().format(weapon!.upgradeCost)}`
              )}
            </span>
          </Button>

          <Button
            className={clsx(
              'bg-blue-500 hover:bg-blue-600 justify-between disabled:bg-slate-500 hover:disabled:bg-slate-500',
              medicine!.upgrade &&
                'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
            )}
            onClick={() => handleUpgrade('medicine')}
            disabled={
              medicine!.upgrade || medicine!.upgradeCost > balance.current
            }
          >
            <span> Upgrade Medicine</span>

            <span>
              {medicine?.upgrade ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${Intl.NumberFormat().format(medicine!.upgradeCost)}`
              )}
            </span>
          </Button>
        </div>
      </Modal>
    </>
  )
}
