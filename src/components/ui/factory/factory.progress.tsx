import { cn } from "@/utils/cn";
import { Progress } from "../progress";
import { amountFormatter } from "@/utils/formatters";

interface FactoryProgressProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 *
	 */
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	factory: any;
	/**
	 *
	 */
	total: number;
}

export const FactoryProgress = (props: FactoryProgressProps) => {
	const { factory, total, className, ...rest } = props;

	return (
		<div className={cn("relative", className)} {...rest}>
			<Progress
				value={factory.time}
				aria-label={`Time to generate ${factory.type}`}
			/>

			<div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary-foreground [text-shadow:_0_1.5px_3px_var(--tw-shadow-color)]">
				{amountFormatter(total)}
			</div>
		</div>
	);
};
