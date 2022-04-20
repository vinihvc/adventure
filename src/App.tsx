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
      cost: 3,
      image: potato,
    },
    {
      title: 'Land',
      duration: 4,
      value: 2,
      total: 1,
      cost: 6,
      image: land,
    },
    {
      title: 'Ore',
      duration: 6,
      value: 3,
      total: 1,
      cost: 9,
      image: ore,
    },
    {
      title: 'Weapons',
      duration: 8,
      value: 4,
      total: 1,
      cost: 12,
      image: weapon,
    },
    {
      title: 'Medicine',
      duration: 9,
      value: 5,
      total: 1,
      cost: 15,
      image: medicine,
    },
  ]

  const [balance, setBalance] = useState(0)

  return (
    <div className="flex flex-col h-screen column items-center justify-center text-lg font-semibold">
      <div className="flex text-white w-full max-w-2xl space-y-5 bg-gray-800 rounded-md p-5 space-x-2">
        <div className="flex flex-col justify-center items-center  w-[200px] p-5">
          {/* avatar generator */}
          <div className="space-y-10">
            <img
              className="aspect-square w-[100px] h-[100px] "
              src="https://avatars.dicebear.com/api/personas/vinicius.svg?r=50"
              alt="Avatar"
              loading="lazy"
            />

            <button className="flex justify-center text-sm w-full bg-gray-500 text-white font-bold py-2 px-4 rounded uppercase">
              Unlocks
            </button>
            <button className="flex justify-center text-sm w-full bg-gray-500 text-white font-bold py-2 px-4 rounded uppercase">
              Upgrades
            </button>
            <button className="flex justify-center text-sm w-full bg-gray-500 text-white font-bold py-2 px-4 rounded uppercase">
              Managers
            </button>
            <button className="flex justify-center text-sm w-full bg-gray-500 text-white font-bold py-2 px-4 rounded uppercase">
              Investors
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-5xl text-center font-black">$ {balance}</h2>

          <div className="grid grid-cols-1 gap-5 mt-10">
            {items.map((item) => (
              <Item
                key={item.title}
                title={item.title}
                image={item.image}
                value={item.value}
                total={item.total}
                cost={item.cost}
                duration={item.duration}
                onFinish={(e) => setBalance(balance + e)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
