import { cn } from "@/utils/cn";
import { Progress } from "../progress";
import { amountFormatter } from "@/utils/formatters";
import React from "react";
import { useFactory } from "@/store/atoms/factories";
import { FactoryType } from "@/data/factories";

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
	// improve the following code

	if (type === "potato") {
		console.log(100 - progress);
	}

	return (
		<div className={cn("relative", className)} {...rest}>
			<Progress value={progress} />

			<div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary-foreground [text-shadow:_0_1.5px_3px_var(--tw-shadow-color)]">
				{amountFormatter(factory.amount * factory.value)}
			</div>
		</div>
	);
};
