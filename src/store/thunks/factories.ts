import { createAsyncThunk } from '@reduxjs/toolkit'

import { FactoryTypeModel } from '@/models/factories'

type UpdateAmountParams = {
  type: FactoryTypeModel
  amount: number
}

export const amount = createAsyncThunk(
  'factories/updateAmount',
  async ({ type, amount }: UpdateAmountParams, { getState }) => {
    const { balance, factories } = getState() as any

    const factory = factories.find((f: any) => f.type === type)

    const amountCost = factory.amountCost * factory.amount

    if (balance.current >= amountCost) {
      return {
        type,
        amount,
        toDecrease: amountCost,
      }
    }
  },
)

export const automatic = createAsyncThunk(
  'factories/automatic',
  async (type: FactoryTypeModel, { getState }) => {
    const { balance, factories } = getState() as any

    const factory = factories.find((f: any) => f.type === type)

    if (balance.current >= factory.amountCost) {
      return type
    }
  },
)

export const upgrade = createAsyncThunk(
  'factories/upgrade',
  async (type: FactoryTypeModel, { getState }) => {
    const { balance, factories } = getState() as any

    const factory = factories.find((f: any) => f.type === type)

    if (balance.current >= factory.upgradeCost) {
      return type
    }
  },
)
