import { FactoryStoreModel } from '@/models/factory'

import { AMOUNT } from '@/constants/amount'

export const buyAmountCalculator = (factory: FactoryStoreModel) => {
  const amountCost = factory.amount * AMOUNT[factory.type]

  return amountCost
}
