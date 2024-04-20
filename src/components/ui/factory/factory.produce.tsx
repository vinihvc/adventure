import { Button } from "../button";

interface FactoryProduceProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 *
	 */
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	factory: any;
	/**
	 *
	 */
	onProduce: () => void;
}

export const FactoryProduce = (props: FactoryProduceProps) => {
	const { factory, onProduce, className, ...rest } = props;

	return (
		<Button
			title={`Produce ${factory.type}`}
			colorScheme="white"
			className="group relative shrink-0 size-16 rounded-full border-2 border-black data-[auto='true']:border-green-500 p-0"
			disabled={factory.amount === 0}
			data-auto={factory.isAuto}
			data-unlocked={factory.isUnlocked}
			onClick={onProduce}
			{...rest}
		>
			<img
				src={factory.image}
				alt=""
				className="w-full rounded-full object-cover group-data-[unlocked='false']:grayscale"
				aria-hidden
			/>

			<span className="sr-only">{`Produce ${factory.type}`}</span>

			<div className="absolute -bottom-3">
				<div className="flex justify-center items-center text-white bg-red-500 rounded-full border-2 border-black w-14 h-6 group-data-[auto='true']:border-green-500">
					<div className="text-xs">{factory.amount || 0}</div>
				</div>
			</div>
		</Button>
	);
};
