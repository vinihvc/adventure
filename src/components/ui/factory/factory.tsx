import { setStatistics } from "@/store/atoms/statistics";
import { cn } from "@/utils/cn";
import { FactoryProgress } from "./factory.progress";
import { FactoryUpgrade } from "./factory.upgrade";
import { FactoryProduce } from "./factory.produce";
import { useFactory, setAmount, upgradeUnlock } from "@/store/atoms/factories";
import { useWallet, setMoney } from "@/store/atoms/wallet";
import type { FactoryType } from "@/data/factories";
import { useMsc } from "@/store/atoms/msc";
import { useCountdown } from "@/hooks/use-countdown";

interface FactoryProps extends React.HTMLAttributes<HTMLDivElement> {
	type: FactoryType;
}

export const Factory = (props: FactoryProps) => {
	const { type, className, ...rest } = props;

	const msc = useMsc();
	const factory = useFactory(type);
	const wallet = useWallet();

	const { seconds, isRunning } = useCountdown(type);

	const handleProduce = () => {
		setMoney(type);
		setStatistics(type);
	};

	const handleBuyAmount = () => {
		setAmount(type);
	};

	const handleUnlock = () => {
		upgradeUnlock(type);
		setAmount(type);
	};

	return (
		<div
			tabIndex={factory.isUnlocked ? 0 : -1}
			aria-label={`${type} section`}
			className={cn(
				"flex items-center gap-5 bg-white border shadow-xl p-4 focus-visible:ring-2 outline-none focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
				className,
			)}
			aria-disabled={!factory.isUnlocked}
			{...rest}
		>
			<FactoryProduce
				className="relative -top-1"
				factoryType={type}
				factory={factory}
				onProduce={handleProduce}
			/>

			<div className="w-full space-y-2">
				<FactoryProgress type={type} seconds={seconds} isRunning={isRunning} />

				<FactoryUpgrade
					factoryType={type}
					factory={factory}
					totalMoney={wallet.money}
					amountToBuy={msc.amountToBuy}
					onUnlock={handleUnlock}
					onBuyAmount={handleBuyAmount}
				/>
			</div>
		</div>
	);
};
