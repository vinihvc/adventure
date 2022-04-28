import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FactoryModel, FactoryStoreModel } from '@/models/factory'

import { factoriesThunk } from '@/store/thunks/factories'

import { FACTORIES } from '@/constants/factories'

const initialState: FactoryStoreModel[] = Object.keys(FACTORIES).map(
  (type) => ({
    // @ts-ignore
    ...FACTORIES[type],
    amount: 1,
    automatic: true,
    active: false,
    multiplier: 1,
  }),
)

const factorySlice = createSlice({
  name: 'factories',
  initialState,
  reducers: {},
  extraReducers: {
    [factoriesThunk.amount.fulfilled.type]: (
      state,
      action: PayloadAction<{ type: FactoryModel; amount: number }>,
    ) => {
      const { type, amount } = action.payload

      const factory = state.find((f: any) => f.type === type)

      if (factory) {
        factory.amount += amount
      }
    },
    [factoriesThunk.automatic.fulfilled.type]: (
      state,
      action: PayloadAction<{ type: FactoryModel }>,
    ) => {
      const { type } = action.payload

      const factory = state.find((f: any) => f.type === type)

      if (factory) factory.automatic = true
    },
    [factoriesThunk.upgrade.fulfilled.type]: (
      state,
      action: PayloadAction<{ type: FactoryModel }>,
    ) => {
      const factory = state.find((f: any) => f.type === action.payload.type)

      if (factory) {
        factory.multiplier = 3
      }
    },
  },
})

export default factorySlice.reducer
