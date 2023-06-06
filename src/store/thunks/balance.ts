import { createAsyncThunk } from '@reduxjs/toolkit'

import { FactoryModel, FactoryStoreModel } from '@/models/factory'

const add = createAsyncThunk(
  'balance/add',
  async (factory: FactoryStoreModel) => {
    const { type } = factory

    const totalToAdd = factory.value * factory.amount

    return { type, value: totalToAdd }
  },
)

export const balanceThunk = {
  add,
}
