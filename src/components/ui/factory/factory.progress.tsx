import { cn } from "@/utils/cn";
import { Progress } from "../progress";
import { amountFormatter } from "@/utils/formatters";
import { useFactory } from "@/store/atoms/factories";
import type { FactoryType } from "@/data/factories";

interface FactoryProgressProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The factory type
	 */
	type: FactoryType;
	/**
	 *
	 */
	seconds: number;
	/**
	 * The time in seconds
	 */
	isRunning: boolean;
}

export const FactoryProgress = (props: FactoryProgressProps) => {
	const { type, seconds, isRunning, className, ...rest } = props;

	const factory = useFactory(type);

	const progress = 100 - (seconds / (factory.time / 1000)) * 100;

	return (
		<div className={cn("relative", className)} {...rest}>
			<Progress value={progress} />

			<div className="absolute inset-0 flex items-center justify-between text-sm font-semibold text-black px-5">
				<span className="w-40 text-xs">
					{new Date(factory.time).toISOString().substring(14, 19)}
				</span>

				<span>{amountFormatter(factory.amount * factory.value)}</span>
			</div>
		</div>
	);
};
