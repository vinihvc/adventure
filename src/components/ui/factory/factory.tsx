import { useAtom } from "jotai";
import { FACTORIES, FactoryType } from "@/data/factories";
import { factoriesAtom } from "@/store/factories";
import { statisticsAtom } from "@/store/statistics";
import { walletAtom } from "@/store/wallet";
import { cn } from "@/utils/cn";
import { mscAtom } from "@/store/msc";
import { FactoryProgress } from "./factory.progress";
import { FactoryUpgrade } from "./factory.upgrade";
import { FactoryProduce } from "./factory.produce";

interface FactoryProps extends React.HTMLAttributes<HTMLDivElement> {
	type: FactoryType;
}

export const Factory = (props: FactoryProps) => {
	const { type, className, ...rest } = props;

	const [factories, setFactories] = useAtom(factoriesAtom);
	const [wallet, setWallet] = useAtom(walletAtom);
	const [, setStatistics] = useAtom(statisticsAtom);
	const [msc] = useAtom(mscAtom);

	const factory = {
		...FACTORIES[type],
		...factories[type],
	};

	const totalAmountGen = factory.value * factory.amount;

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
		<div
			className={cn(
				"flex items-center gap-x-4 aria-[disabled=true]:grayscale",
				className,
			)}
			aria-disabled={!factory.isUnlocked}
			{...rest}
		>
			<FactoryProduce factory={factory} onProduce={handleProduce} />

			<div className="w-full space-y-1 bg-foreground p-2 pl-14 rounded-xl">
				<FactoryProgress factory={factory} total={totalAmountGen} />

				<FactoryUpgrade
					factory={factory}
					wallet={wallet}
					msc={msc}
					onAcquire={handleAcquire}
					onBuyAmount={handleBuyAmount}
				/>
			</div>
		</div>
	);
};
