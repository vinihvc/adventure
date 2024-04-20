import { useMsc, toggleAmountToBuy } from "@/store/atoms/msc";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";

export const AmountToBuy = () => {
	const msc = useMsc();

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button size="icon" onClick={toggleAmountToBuy}>
						<span className="relative top-[2px] text-xs">x</span>
						<span>{msc.amountToBuy}</span>
						<span className="sr-only">
							{`You are buying ${msc.amountToBuy} of the selected item`}
						</span>
					</Button>
				</TooltipTrigger>

				<TooltipContent>{`Buy ${msc.amountToBuy} at once`}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
