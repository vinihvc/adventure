import { CogIcon } from '@heroicons/react/solid'

import { toggleMusic, toggleSfx } from '@/store/reducers/setting'

import { useAppDispatch, useAppSelector } from '@/hooks/use-redux'
import { useDisclosure } from '@/hooks/use-disclosure'

import { Modal } from '@/components/modal'
import { Switch } from '@/components/switch'

export const Settings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch = useAppDispatch()

  const { music, sfx } = useAppSelector((state) => state.setting)

  return (
    <>
      <button type="button" onClick={onOpen} aria-label="Open Settings">
        <CogIcon className="w-7 h-7" aria-hidden />
      </button>

      <Modal title="Settings" isOpen={isOpen} onClose={onClose}>
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">Music</div>

            <Switch
              checked={music}
              ariaLabel="Toggle music"
              onChange={() => dispatch(toggleMusic())}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">SFX</div>

            <Switch
              checked={sfx}
              ariaLabel="Toggle SFX"
              onChange={() => dispatch(toggleSfx())}
            />
          </div>
        </div>
      </Modal>
    </>
  )
}
