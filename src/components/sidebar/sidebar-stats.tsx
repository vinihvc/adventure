import { useDisclosure } from '@/hooks/use-disclosure'
import { useAppSelector } from '@/hooks/use-redux'

import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { Modal } from '@/components/modal'

export const SidebarStats = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { balance } = useAppSelector((state) => state)

  return (
    <>
      <div className="relative bg-gray-900 rounded-full p-1">
        <Avatar
          name="Vinicius"
          image="https://avatars.dicebear.com/api/personas/vinicius.svg?r=50"
        />

        <div className="absolute flex justify-center bottom-0 left-0 right-0">
          <Button
            className="h-[30px] bg-blue-500 hover:bg-blue-600 rounded-full w-[100px]"
            onClick={onOpen}
          >
            Stats
          </Button>
        </div>
      </div>

      <Modal title="Stats" isOpen={isOpen} onClose={onClose}>
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Total</span>

            <span className="text-4xl font-extrabold">
              $ {Intl.NumberFormat().format(balance.total.cash)}
            </span>
          </div>

          <hr className="border-gray-700" />

          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Potatos</span>

            <span className="text-4xl font-extrabold">
              $ {Intl.NumberFormat().format(balance.total.potato)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Lands</span>

            <span className="text-4xl font-extrabold">
              $ {Intl.NumberFormat().format(balance.total.land)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Ores</span>

            <span className="text-4xl font-extrabold">
              $ {Intl.NumberFormat().format(balance.total.ore)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Weapons</span>

            <span className="text-4xl font-extrabold">
              $ {Intl.NumberFormat().format(balance.total.weapon)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Medicines</span>

            <span className="text-4xl font-extrabold">
              $ {Intl.NumberFormat().format(balance.total.medicine)}
            </span>
          </div>
        </div>
      </Modal>
    </>
  )
}
