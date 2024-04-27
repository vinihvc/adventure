"use client";

import * as React from "react";

import * as RProgress from "@radix-ui/react-progress";
import { cn } from "@/utils/cn";

import classes from "./progress.module.css";
import { motion } from "framer-motion";

interface ProgressProps
	extends React.ComponentPropsWithoutRef<typeof RProgress.Root> {
	/**
	 * If `true`, add striped animation to the progress bar.
	 *
	 * @default false
	 */
	isAuto?: boolean;
	/**
	 * The duration of the animation in seconds.
	 */
	duration?: number;
}

export const Progress = React.forwardRef<
	React.ElementRef<typeof RProgress.Root>,
	ProgressProps
>((props, ref) => {
	const { isAuto = false, duration, className, value, ...rest } = props;

	return (
		<RProgress.Root
			ref={ref}
			value={value}
			data-auto={isAuto}
			className={cn(
				"group relative h-6 w-full overflow-hidden bg-white border border-black",
				className,
			)}
			{...rest}
		>
			<RProgress.Indicator asChild>
				<motion.div
					className={cn(
						"h-full w-full flex-1 bg-green-400 bg-[length:1.5rem]",
						"group-data-[auto='true']:bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]",
						classes.animation,
					)}
					initial={{ width: isAuto ? "100%" : "0%" }}
					animate={{ width: `${value}%` }}
					// transition={{
					// 	repeat: Number.POSITIVE_INFINITY,
					// 	repeatType: "loop",
					// 	ease: "linear",
					// 	duration: duration,
					// }}
				/>
			</RProgress.Indicator>
		</RProgress.Root>
	);
});

Progress.displayName = RProgress.Root.displayName;
