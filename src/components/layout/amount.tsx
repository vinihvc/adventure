import React from "react";
import { useMsc, toggleAmountToBuy } from "@/store/atoms/msc";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";

interface AmountProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const AmountToBuy = (props: AmountProps) => {
	const { className, ...rest } = props;

	const msc = useMsc();

	return (
		<Button
			className={cn("w-14", className)}
			size="sm"
			variant="destructive"
			pressed
			onClick={toggleAmountToBuy}
			{...rest}
		>
			<span className="relative top-[2px] text-xs">x</span>
			{msc.amountToBuy}
		</Button>
	);
};
