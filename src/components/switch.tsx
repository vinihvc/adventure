import { useState } from 'react'

import { Switch as BaseSwitch } from '@headlessui/react'
import clsx from 'clsx'

type SwitchProps = {
  checked?: boolean
  ariaLabel: string
  onChange?: (checked: boolean) => void
}

export const Switch = ({ checked, ariaLabel, onChange }: SwitchProps) => {
  const [enabled, setEnabled] = useState(checked || false)

  const handleChange = () => {
    setEnabled((e) => !e)

    !!onChange && onChange(enabled)
  }

  return (
    <BaseSwitch
      checked={enabled}
      onChange={handleChange}
      className={clsx(
        'relative inline-flex flex-shrink-0 h-[30px] w-[58px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
        enabled ? 'bg-blue-500' : 'bg-gray-500',
      )}
    >
      <span className="sr-only">{ariaLabel}</span>
      <span
        aria-hidden="true"
        className={clsx(
          'pointer-events-none inline-block h-[26px] w-[26px] rounded-full bg-white shadow-lg transform translate-y-[1px] ring-0 transition ease-in-out duration-200',
          enabled ? 'translate-x-[29px]' : 'translate-x-[1px]',
        )}
      />
    </BaseSwitch>
  )
}
