import { createAsyncThunk } from '@reduxjs/toolkit'

import { FactoryStoreModel } from '@/models/factory'

import { MultiplierValueModel } from '@/models/multiplier'

import { AUTOMATIC } from '@/constants/automatic'
import { UPGRADES } from '@/constants/upgrades'
import { AMOUNT } from '@/constants/amount'

import { multiplierMap } from '@/utils/multiplier-map'

const amount = createAsyncThunk(
  'factories/amount',
  async (factory: FactoryStoreModel, { getState }) => {
    const { type } = factory

    const { balance } = getState() as any

    const amountCost = AMOUNT[type] * factory.amount

    if (balance.current < amountCost) {
      return { error: 'Not enough money' }
    }

    return {
      type,
      amount: 1,
      toDecrease: amountCost,
    }
  },
)

const automatic = createAsyncThunk(
  'factories/automatic',
  async (factory: FactoryStoreModel, { getState }) => {
    const { type } = factory

    const price = AUTOMATIC[type]

    const { balance } = getState() as any

    if (balance.current < price) {
      return { error: 'Not enough money' }
    }

    return { type }
  },
)

const upgrade = createAsyncThunk(
  'factories/upgrade',
  async (factory: FactoryStoreModel, { getState }) => {
    const { type, multiplier } = factory

    const { balance } = getState() as any

    const multiplierName = multiplierMap[multiplier as MultiplierValueModel]!

    const price = UPGRADES[multiplierName][type]

    if (balance.current < price) {
      return { error: 'Not enough money' }
    }

    return { type, toDecrease: price }
  },
)

export const factoriesThunk = {
  amount,
  automatic,
  upgrade,
}
