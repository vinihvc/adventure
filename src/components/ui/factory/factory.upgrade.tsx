import type { MscAtomProps } from "@/store/atoms/msc";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../dialog";
import { Image } from "../image";

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
		<div className="flex items-center space-x-1">
			<Button
				className="w-full text-xs uppercase font-bold"
				disabled={totalMoney < factory.moneyToUnlock}
				onClick={!factory.isUnlocked ? onUnlock : onBuyAmount}
				{...rest}
			>
				{factory.isUnlocked && (
					<span className="space-x-1">
						<span>Buy</span>
						<span>{`x${amountToBuy}`}</span>
					</span>
				)}

				{!factory.isUnlocked && totalMoney >= factory.moneyToUnlock && (
					<span>Acquire</span>
				)}

				{!factory.isUnlocked && totalMoney < factory.moneyToUnlock && (
					<span>Money not enough</span>
				)}
			</Button>

			<Dialog>
				<DialogTrigger asChild>
					<Button className="w-14">
						<Info />
					</Button>
				</DialogTrigger>

				<DialogContent>
					<DialogHeader>
						<div className="flex gap-4 items-center">
							<div className="shrink-0">
								<Image
									src={`/images/${factoryType}.jpg`}
									alt={`Factory of ${factory.name}`}
									className="w-16 h-16 rounded-full"
								/>
							</div>

							<div>
								<DialogTitle>{factory.name}</DialogTitle>
								<DialogDescription>{factory.description}</DialogDescription>
							</div>
						</div>
					</DialogHeader>

					<div className="space-y-2 text-sm">
						<p className="font-semibold text-lg">Statistics</p>

						<div className="flex justify-between">
							<div>Production speed</div>
							<div>{`${factory.time / 1000}x`}</div>
						</div>

						<div className="flex justify-between">
							<div>Production per click</div>
							<div>{factory.value}</div>
						</div>

						<div className="flex justify-between">
							<div>Production per hour</div>
							<div>{factory.value * 3600}</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};
