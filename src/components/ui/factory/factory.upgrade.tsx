import type { MscAtomProps } from "@/store/atoms/msc";
import { Button } from "@/components/ui/button";

import { FactoryDialog } from "@/components/dialog/factory";

interface FactoryUpgradeProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	factoryType: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	factory: any;
	totalMoney: number;
	amountToBuy: MscAtomProps["amountToBuy"];
	onUnlock: () => void;
	onBuyAmount: () => void;
}

export const FactoryUpgrade = (props: FactoryUpgradeProps) => {
	const {
		factoryType,
		factory,
		totalMoney,
		amountToBuy,
		className,
		onUnlock,
		onBuyAmount,
		...rest
	} = props;

	return (
		<div className="flex items-center space-x-2">
			<Button
				className="w-full text-xs uppercase font-bold"
				disabled={totalMoney < factory.moneyToUnlock}
				onClick={!factory.isUnlocked ? onUnlock : onBuyAmount}
				{...rest}
			>
				{factory.isUnlocked && (
					<span className="space-x-1">
						<span>Buy</span>
						<span>
							<span className="text-xs normal-case">x</span>
							<span>{amountToBuy}</span>
						</span>
					</span>
				)}

				{!factory.isUnlocked && totalMoney >= factory.moneyToUnlock && (
					<span>Acquire</span>
				)}

				{!factory.isUnlocked && totalMoney < factory.moneyToUnlock && (
					<span>Money not enough</span>
				)}
			</Button>

			<FactoryDialog factory={factory} factoryType={factoryType} />
		</div>
	);
};
