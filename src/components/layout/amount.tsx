import { useMsc, toggleAmountToBuy } from "@/store/atoms/msc";
import { Button } from "@/components/ui/button";

export const AmountToBuy = () => {
	const msc = useMsc();

	return (
		<Button size="icon" onClick={toggleAmountToBuy}>
			<span className="relative top-[2px] text-xs">x</span>
			<span>{msc.amountToBuy}</span>
			<div className="sr-only">
				{`You are buying ${msc.amountToBuy} of the selected item`}
			</div>
		</Button>
	);
};
