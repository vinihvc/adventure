import { MultiplierValueModel } from './multiplier'

export type FactoryTypeModel =
  | 'potato'
  | 'land'
  | 'bacon'
  | 'assassin'
  | 'medicine'
  | 'rocket'
  | 'planet'
  | 'galaxy'
  | 'sorcery'
  | 'timeTravel'

export type FactoryModel = {
  type: FactoryTypeModel
  name: string
  image: string
  duration: number
  value: number
  activePrice: number
}

export type FactoryStoreModel = {
  amount: number
  automatic: boolean
  active: boolean
  multiplier: 1 | MultiplierValueModel
} & FactoryModel
