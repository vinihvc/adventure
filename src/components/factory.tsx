import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

import { useAtom } from "jotai";
import { FACTORIES, FactoryType } from "../config/factories";
import { factoriesAtom } from "../store/factories";
import { statisticsAtom } from "../store/statistics";
import { walletAtom } from "../store/wallet";
import { cn } from "../utils/cn";
import { mscAtom } from "../store/msc";

interface FactoryProps extends React.HTMLAttributes<HTMLDivElement> {
	type: FactoryType;
}

export const Factory = (props: FactoryProps) => {
	const { type, className, ...rest } = props;

	const [factories, setFactories] = useAtom(factoriesAtom);
	const [wallet, setWallet] = useAtom(walletAtom);
	const [, setStatistics] = useAtom(statisticsAtom);
	const [msc] = useAtom(mscAtom);

	const currentFactory = {
		...FACTORIES[type],
		...factories[type],
	};

	const totalAmountGen = currentFactory.value * currentFactory.amount;

	const handleBuyAmount = () => {
		setFactories((prev) => ({
			...prev,
			[type]: {
				...prev[type],
				amount: Number(prev[type].amount) + Number(msc.amountToBuy),
			},
		}));
	};

	const handleProduce = () => {
		setWallet((prev) => ({
			...prev,
			money: prev.money + totalAmountGen,
		}));

		setStatistics((prev) => ({
			...prev,
			moneyEarned: prev.moneyEarned + totalAmountGen,
			factories: {
				...prev.factories,
				[type]: {
					...prev.factories[type],
					moneyEarned: prev.factories[type].moneyEarned + totalAmountGen,
				},
			},
		}));
	};

	const handleAcquire = () => {
		setFactories((prev) => ({
			...prev,
			[type]: {
				...prev[type],
				amount: 1,
				isUnlocked: true,
			},
		}));
	};

	return (
		<div className={cn("flex items-center gap-x-5", className)} {...rest}>
			<Button
				title={`Produce ${type}`}
				variant="outline"
				className="relative rounded-full shrink-0 border-4 focus:border-green-500 group"
				size="icon"
				disabled={currentFactory.amount === 0}
				onClick={handleProduce}
			>
				<img
					src={currentFactory.image}
					alt={type}
					className={cn(
						"size-5 object-cover",
						!currentFactory.isUnlocked && "grayscale",
					)}
					aria-hidden
				/>

				<span className="sr-only">
					{`Produce ${type} for ${totalAmountGen}`}
				</span>

				<div className="absolute -bottom-3 bg-foreground text-muted border rounded-full w-10 h-5 group-focus:border-green-500">
					<div className="flex justify-center items-center rounded-full">
						<div className="text-xs">{currentFactory.amount || 0}</div>
					</div>
				</div>
			</Button>

			<div className="w-full space-y-1">
				<div className="relative">
					<Progress value={currentFactory.time} />
					<div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
						{totalAmountGen}
					</div>
				</div>

				<div className="flex items-center space-x-1">
					<Button
						className="w-full text-xs"
						variant="secondary"
						disabled={wallet.money < currentFactory.moneyToUnlock}
						onClick={
							!currentFactory.isUnlocked ? handleAcquire : handleBuyAmount
						}
					>
						{currentFactory.isUnlocked && (
							<span className="space-x-1">
								<span>Buy</span>
								<span>{`x${msc.amountToBuy}`}</span>
							</span>
						)}

						{!currentFactory.isUnlocked &&
							wallet.money >= currentFactory.moneyToUnlock && (
								<span>Acquire</span>
							)}

						{!currentFactory.isUnlocked &&
							wallet.money < currentFactory.moneyToUnlock && (
								<span>Not money enough</span>
							)}
					</Button>

					{currentFactory.amount > 0 && (
						<Button variant="secondary" className="w-auto text-xs" disabled>
							{new Date(currentFactory.time).toISOString().substring(14, 19)}
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};
