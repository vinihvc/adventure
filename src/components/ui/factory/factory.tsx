import { FactoryType } from "@/data/factories";
import { setStatistics } from "@/store/atoms/statistics";
import { cn } from "@/utils/cn";
import { FactoryProgress } from "./factory.progress";
import { FactoryUpgrade } from "./factory.upgrade";
import { FactoryProduce } from "./factory.produce";
import { useFactory, setAmount, upgradeUnlock } from "@/store/atoms/factories";
import { useMsc } from "@/store/atoms/msc";
import { useWallet, setMoney } from "@/store/atoms/wallet";

interface FactoryProps extends React.HTMLAttributes<HTMLDivElement> {
	type: FactoryType;
}

export const Factory = (props: FactoryProps) => {
	const { type, className, ...rest } = props;

	const msc = useMsc();
	const factory = useFactory(type);
	const wallet = useWallet();

	const totalAmountGen = factory.value * factory.amount;

	const handleBuyAmount = () => {
		setAmount(type, factory.amount + 1);
	};

	const handleProduce = () => {
		setMoney(totalAmountGen);

		setStatistics(type, totalAmountGen);
	};

	const handleAcquire = () => {
		upgradeUnlock(type);
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
					totalMoney={wallet.money}
					amountToBuy={msc.amountToBuy}
					onAcquire={handleAcquire}
					onBuyAmount={handleBuyAmount}
				/>
			</div>
		</div>
	);
};
