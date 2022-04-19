import { useState } from 'react'

import { Item } from './components/item'

import potato from './assets/img/potato.png'
import land from './assets/img/land.png'
import ore from './assets/img/ore.png'
import weapon from './assets/img/weapon.png'
import medicine from './assets/img/medicine.png'

export const App = () => {
  const items = [
    {
      title: 'Potato',
      duration: 2,
      value: 1,
      total: 1,
      image: potato,
    },
    {
      title: 'Land',
      duration: 4,
      value: 2,
      total: 1,
      image: land,
    },
    {
      title: 'Ore',
      duration: 6,
      value: 3,
      total: 1,
      image: ore,
    },
    {
      title: 'Weapons',
      duration: 8,
      value: 4,
      total: 1,
      image: weapon,
    },
    {
      title: 'Medicine',
      duration: 9,
      value: 5,
      total: 1,
      image: medicine,
    },
  ]

  const [balance, setBalance] = useState(0)

  return (
    <div className="flex flex-col h-screen column items-center justify-center text-lg font-semibold">
      <div className="w-full max-w-2xl space-y-5">
        <h2 className="text-2xl">Balance: {balance}</h2>

        <div className="grid grid-cols-1 gap-5">
          {items.map((item) => (
            <Item
              key={item.title}
              title={item.title}
              image={item.image}
              value={item.value}
              total={item.total}
              duration={item.duration}
              onFinish={(e) => setBalance(balance + e)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
