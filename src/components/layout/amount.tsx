import { useMsc, toggleAmountToBuy } from "@/store/atoms/msc";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const AmountToBuy = () => {
	const msc = useMsc();

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button size="icon" onClick={toggleAmountToBuy}>
					<span>
						<span className="text-xs">x</span>
						<span>{msc.amountToBuy}</span>
					</span>

					<span className="sr-only">
						{`You are buying ${msc.amountToBuy} of the selected item`}
					</span>
				</Button>
			</TooltipTrigger>

			<TooltipContent>{`Buy ${msc.amountToBuy} at once`}</TooltipContent>
		</Tooltip>
	);
};
