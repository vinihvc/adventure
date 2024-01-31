import { useAtom } from "jotai";
import React from "react";
import { MscAtom, mscAtom } from "@/store/msc";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";

interface AmountProps extends React.HTMLAttributes<HTMLButtonElement> {}

const changeAmount = (value: MscAtom["amountToBuy"]) => {
	if (value === 1) return 10;

	if (value === 10) return 50;

	return 1;
};

export const AmountToBuy = (props: AmountProps) => {
	const { className, ...rest } = props;

	const [msc, setMsc] = useAtom(mscAtom);

	const handleClick = () => {
		setMsc((prev) => ({
			...prev,
			amountToBuy: changeAmount(prev.amountToBuy),
		}));
	};

	return (
		<Button
			className={cn(
				"bg-rose-400 text-white rounded-lg text-lg font-bold drop-shadow h-10 w-14",
				className,
			)}
			size="icon"
			variant="solid"
			onClick={handleClick}
			{...rest}
		>
			<span className="relative top-[2px] text-xs">x</span>
			{msc.amountToBuy}
		</Button>
	);
};