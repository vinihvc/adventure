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
	 * The time in seconds
	 */
	isRunning: boolean;
}

export const FactoryProgress = (props: FactoryProgressProps) => {
	const { type, isRunning, className, ...rest } = props;

	const factory = useFactory(type);

	const duration = factory.time / 1000 + 1;

	return (
		<div className={cn("relative", className)} {...rest}>
			<div className="w-full relative mx-auto my-0 p-px rounded-[10px] border-4 border-solid border-transparent before:content-[''] before:border before:absolute before:rounded-[10px] before:border-solid before:border-white before:-inset-1">
				<div
					className={cn(
						"absolute [background:#fff] w-0  rounded-[10px] left-0 right-full inset-y-0",
						isRunning && `animate-[progressbar_${duration}s_linear_infinite]`,
					)}
				/>
			</div>

			<div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary-foreground [text-shadow:_0_1.5px_3px_var(--tw-shadow-color)]">
				{amountFormatter(factory.amount * factory.value)}
			</div>
		</div>
	);
};
