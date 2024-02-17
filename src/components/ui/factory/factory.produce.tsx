import { memo } from "react";
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
			variant="outline"
			className="relative rounded-full shrink-0 border-4 focus:border-green-500 group left-14 z-10 size-20"
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
				<div className="flex justify-center items-center bg-primary-hover text-muted border rounded-full w-16 h-8 group-focus:border-green-500">
					<div className="text-xs">{factory.amount || 0}</div>
				</div>
			</div>
		</Button>
	);
};
