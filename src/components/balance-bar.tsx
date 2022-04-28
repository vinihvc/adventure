import { PropsWithChildren } from 'react'

import clsx from 'clsx'

import {
  CurrencyDollarIcon,
  LightningBoltIcon,
  SparklesIcon,
  TrendingUpIcon,
} from '@heroicons/react/solid'

import { useAppSelector } from '@/hooks/use-redux'

import { Tooltip } from '@/components/tooltip'

import { formatValue } from '@/utils/format-value'

const BalanceItem = ({
  title,
  className,
  children,
}: PropsWithChildren<{ title: string; className?: string }>) => {
  return (
    <Tooltip message={title}>
      <div
        className={clsx(
          'flex justify-between items-center w-[110px] text-sm space-x-2 bg-opacity-90 px-3 py-1 rounded-full whitespace-nowrap',
          className,
        )}
      >
        {children}
      </div>
    </Tooltip>
  )
}

export const BalanceBar = () => {
  const { balance } = useAppSelector((state) => state)

  return (
    <div className="flex space-x-5">
      <BalanceItem title="Cash" className="bg-green-500">
        <CurrencyDollarIcon className="w-5 h-5" />

        <div>{formatValue(balance.current.cash, '')}</div>
      </BalanceItem>

      <BalanceItem title="Angel" className="bg-blue-500">
        <SparklesIcon className="w-5 h-5" />

        <div>{formatValue(balance.current.angel, '')}</div>
      </BalanceItem>

      <BalanceItem title="Magic" className="bg-yellow-500">
        <LightningBoltIcon className="w-5 h-5" />
        <div>{formatValue(balance.current.magic, '')}</div>
      </BalanceItem>

      <BalanceItem title="Reset" className="bg-red-500">
        <TrendingUpIcon className="w-5 h-5" />
        <div>{formatValue(balance.current.reset, '')}</div>
      </BalanceItem>
    </div>
  )
}
