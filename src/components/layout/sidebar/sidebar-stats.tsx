import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import { Button } from '../../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../../ui/dialog'

export const SidebarStats = () => {
  return (
    <>
      <div className="relative bg-gray-900 rounded-full p-1">
        <Avatar className="size-40">
          <AvatarImage
            src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Pumpkin"
            alt="Vinicius"
          />
          <AvatarFallback>VV</AvatarFallback>
        </Avatar>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-[30px] bg-blue-500 hover:bg-blue-600 rounded-full w-[100px]">
            Stats
          </Button>
        </DialogTrigger>

        <DialogContent>
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total</span>

              <span className="text-4xl font-extrabold">
                {/* $ {Intl.NumberFormat().format(balance.total)} */}
              </span>
            </div>

            <hr className="border-gray-700" />

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Potatos</span>

              <span className="text-4xl font-extrabold">
                {/* $ {Intl.NumberFormat().format(balance.factories.potato)} */}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Lands</span>

              <span className="text-4xl font-extrabold">
                {/* $ {Intl.NumberFormat().format(balance.factories.land)} */}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Ores</span>

              <span className="text-4xl font-extrabold">
                {/* $ {Intl.NumberFormat().format(balance.factories.ore)} */}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Weapons</span>

              <span className="text-4xl font-extrabold">
                {/* $ {Intl.NumberFormat().format(balance.factories.weapon)} */}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Medicines</span>

              <span className="text-4xl font-extrabold">
                {/* $ {Intl.NumberFormat().format(balance.factories.medicine)} */}
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
