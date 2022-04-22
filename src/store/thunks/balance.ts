import { createAsyncThunk } from '@reduxjs/toolkit'

import { FactoryTypeModel } from '@/models/factories'

export const add = createAsyncThunk(
  'balance/add',
  async (type: FactoryTypeModel, { getState }) => {
    const { factories } = getState() as any

    const factory = factories.find((f: any) => f.type === type)

    const totalToAdd = factory.value * factory.amount * factory.upgradeValue

    return { type, value: totalToAdd }
  },
)
