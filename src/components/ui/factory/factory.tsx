import { setStatistics } from "@/store/atoms/statistics";
import { cn } from "@/utils/cn";
import { FactoryProgress } from "./factory.progress";
import { FactoryUpgrade } from "./factory.upgrade";
import { FactoryProduce } from "./factory.produce";
import { useFactory, setAmount, upgradeUnlock } from "@/store/atoms/factories";
import { useWallet, setMoney } from "@/store/atoms/wallet";
import { FactoryType } from "@/data/factories";
import { useMsc } from "@/store/atoms/msc";
import { useCountdown } from "@/hooks/use-countdown";

import React from "react";
interface FactoryProps extends React.HTMLAttributes<HTMLDivElement> {
	type: FactoryType;
}

export const Factory = (props: FactoryProps) => {
	const { type, className, ...rest } = props;

	const msc = useMsc();
	const factory = useFactory(type);
	const wallet = useWallet();

	const { isRunning } = useCountdown(type);

	const handleProduce = () => {
		setMoney(type);
		setStatistics(type);
	};

	const handleBuyAmount = () => {
		setAmount(type);
	};

	const handleUnlock = () => {
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
				<FactoryProgress type={type} isRunning={isRunning} />

				<FactoryUpgrade
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
