import { useAtom } from "jotai";
import React from "react";
import { MscAtom, mscAtom } from "../../store/msc";
import { cn } from "../../utils/cn";
import { Button } from "../ui/button";

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
			className={cn("text-xs", className)}
			size="icon"
			onClick={handleClick}
			{...rest}
		>
			{msc.amountToBuy}
		</Button>
	);
};
