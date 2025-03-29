export type FactoryType = keyof typeof FACTORIES

export const FACTORIES = {
  potato: {
    name: 'Potato',
    description: 'Produces potatoes to feed your people.',
    productionTime: 2, // 2 seconds
    productionValue: 25,
    buyCost: 50,
    automatedCost: 5_000,
    upgradeCost: 10_000,
    unlockPrice: 0,
  },
  peasant: {
    name: 'Peasant',
    description: 'Peasant of the Kingdom start to harvesting food',
    productionTime: 3, // 3 seconds
    productionValue: 125,
    buyCost: 250,
    automatedCost: 25_000,
    upgradeCost: 50_000,
    unlockPrice: 5_000,
  },
  knight: {
    name: 'Knight',
    description: 'Knight are necessary to protect the kingdom.',
    productionTime: 4, // 4 seconds
    productionValue: 600,
    buyCost: 1_200,
    automatedCost: 120_000,
    upgradeCost: 250_000,
    unlockPrice: 25_000,
  },
  archer: {
    name: 'Archer',
    description: 'Archer provide the escort on the walls of the kingdom.',
    productionTime: 5, // 5 seconds
    productionValue: 3_000,
    buyCost: 6_000,
    automatedCost: 600_000,
    upgradeCost: 1_200_000,
    unlockPrice: 120_000,
  },
  engineer: {
    name: 'Engineer',
    description: 'Engineer repair and research new technologies.',
    productionTime: 6, // 6 seconds
    productionValue: 15_000,
    buyCost: 30_000,
    automatedCost: 3_000_000,
    upgradeCost: 6_000_000,
    unlockPrice: 600_000,
  },
  mage: {
    name: 'Mage',
    description: 'Mage generate respect and power for the kingdom.',
    productionTime: 7, // 7 seconds
    productionValue: 75_000,
    buyCost: 150_000,
    automatedCost: 15_000_000,
    upgradeCost: 30_000_000,
    unlockPrice: 3_000_000,
  },
}
