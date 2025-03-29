export type FactoryType = keyof typeof FACTORIES

export const FACTORIES = {
  potato: {
    name: 'Potato',
    description: 'Produces potatoes to feed your people.',
    time: 2, // 2 seconds
    value: 25,
    buyCost: 50,
    autoCost: 5_000,
    moneyToUnlock: 0,
  },
  peasant: {
    name: 'Peasant',
    description: 'Peasant of the Kingdom start to harvesting food',
    time: 3, // 3 seconds
    value: 125,
    buyCost: 250,
    autoCost: 25_000,
    moneyToUnlock: 5_000,
  },
  knight: {
    name: 'Knight',
    description: 'Knight are necessary to protect the kingdom.',
    time: 4, // 4 seconds
    value: 600,
    buyCost: 1_200,
    autoCost: 120_000,
    moneyToUnlock: 25_000,
  },
  archer: {
    name: 'Archer',
    description: 'Archer provide the escort on the walls of the kingdom.',
    time: 5, // 5 seconds
    value: 3_000,
    buyCost: 6_000,
    autoCost: 600_000,
    moneyToUnlock: 120_000,
  },
  engineer: {
    name: 'Engineer',
    description: 'Engineer repair and research new technologies.',
    time: 6, // 6 seconds
    value: 15_000,
    buyCost: 30_000,
    autoCost: 3_000_000,
    moneyToUnlock: 600_000,
  },
  mage: {
    name: 'Mage',
    description: 'Mage generate respect and power for the kingdom.',
    time: 7, // 7 seconds
    value: 75_000,
    buyCost: 150_000,
    autoCost: 15_000_000,
    moneyToUnlock: 3_000_000,
  },
}
