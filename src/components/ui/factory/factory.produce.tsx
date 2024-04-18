import { Button } from "../button";

import { cn } from "@/utils/cn";

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
			data-auto={factory.isAuto}
			className="group relative shrink-0 size-16 rounded-full border-2 data-[auto='true']:border-green-500"
			disabled={factory.amount === 0}
			onClick={onProduce}
			{...rest}
		>
			<img
				src={factory.image}
				alt=""
				className={cn(
					"size-10 object-cover",
					!factory.isUnlocked && "grayscale",
				)}
				aria-hidden
			/>

			<span className="sr-only">{`Produce ${factory.type}`}</span>

			<div className="absolute -bottom-3">
				<div className="flex justify-center items-center bg-red-500 rounded-full border border-neutral-200 w-14 h-6 group-data-[auto='true']:border-green-500">
					<div className="text-xs">{factory.amount || 0}</div>
				</div>
			</div>
		</Button>
	);
};
