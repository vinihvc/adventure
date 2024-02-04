import { Button } from "../button";

interface FactoryUpgradeProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 *
	 */
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	factory: any;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	wallet: any;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	msc: any;
	onAcquire: () => void;
	onBuyAmount: () => void;
}

export const FactoryUpgrade = (props: FactoryUpgradeProps) => {
	const { factory, wallet, msc, className, onAcquire, onBuyAmount, ...rest } =
		props;

	return (
		<div className="flex items-center space-x-1">
			<Button
				className="w-full text-sm"
				variant="primary"
				disabled={wallet.money < factory.moneyToUnlock}
				onClick={!factory.isUnlocked ? onAcquire : onBuyAmount}
				{...rest}
			>
				{factory.isUnlocked && (
					<span className="space-x-1">
						<span>Buy</span>
						<span>{`x${msc.amountToBuy}`}</span>
					</span>
				)}

				{!factory.isUnlocked && wallet.money >= factory.moneyToUnlock && (
					<span>Acquire</span>
				)}

				{!factory.isUnlocked && wallet.money < factory.moneyToUnlock && (
					<span>Money not enough</span>
				)}
			</Button>

			{factory.amount > 0 && (
				<Button variant="primary" className="w-auto text-xs" disabled>
					{new Date(factory.time).toISOString().substring(14, 19)}
				</Button>
			)}
		</div>
	);
};
