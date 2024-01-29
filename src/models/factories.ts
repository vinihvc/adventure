export type FactoryTypeModel =
  | 'potato'
  | 'land'
  | 'ore'
  | 'weapon'
  | 'medicine'
  | 'time-travel'

export type FactoryModel = {
  type: FactoryTypeModel
  duration: number
  value: number
  amount: number
  amountCost: number
  image: string
  auto: boolean
  upgrade: boolean
  upgradeCost: number
  upgradeValue: number
  autoCost: number
}
