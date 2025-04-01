import { Button } from '@/components/ui/button'
import { toggleAmountToBuy, useMsc } from '@/store/atoms/msc'
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip'

export const AmountToBuy = () => {
  const msc = useMsc()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="w-14"
          variant="white"
          size="icon"
          onClick={toggleAmountToBuy}
        >
          <span>
            <span className="font-light text-sm">x</span>
            <span className="font-semibold text-base">{msc.amountToBuy}</span>
          </span>

          <span className="sr-only">
            {`You are buying ${msc.amountToBuy} of the selected item`}
          </span>
        </Button>
      </TooltipTrigger>

      <TooltipContent>{`Buy ${msc.amountToBuy} at once`}</TooltipContent>
    </Tooltip>
  )
}
