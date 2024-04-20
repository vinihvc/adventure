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
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

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
				<Tooltip>
					<TooltipTrigger asChild>
						<DialogTrigger asChild>
							<Button className="w-12 p-0" variant="outline">
								<span className="sr-only">{`${factory.name}'s Info`}</span>
								<Info className="size-5" />
							</Button>
						</DialogTrigger>
					</TooltipTrigger>

					<TooltipContent>{`${factory.name}'s Info`}</TooltipContent>
				</Tooltip>

				<DialogContent>
					<div className="absolute -top-28 left-2">
						<Image
							src={`/images/${factoryType}.webp`}
							alt={`Factory of ${factory.name}`}
							className="size-40 rounded-full border-2 border-black drop-shadow-2xl"
						/>
					</div>

					<DialogHeader className="mt-10">
						<DialogTitle className="text-xl">{factory.name}</DialogTitle>
						<DialogDescription>{factory.description}</DialogDescription>
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
