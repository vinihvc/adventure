import * as React from "react";

import { useInterval } from "./use-interval";
import type { FactoryType } from "@/data/factories";
import { useFactory } from "@/store/atoms/factories";
import { setMoney } from "@/store/atoms/wallet";
import { setStatistics } from "@/store/atoms/statistics";

/**
 * Emit a countdown timer for a factory
 */
export const useCountdown = (factory: FactoryType) => {
	const f = useFactory(factory);

	const [seconds, setSeconds] = React.useState(f.time);
	const [isRunning, setIsRunning] = React.useState(f.isAuto);

	const handleOnComplete = () => {
		setMoney(factory);
		setStatistics(factory);
	};

	useInterval(
		() => {
			if (seconds > 0 && isRunning) {
				setSeconds(seconds - 1);
			}

			console.log(
				`Factory ${factory} is running: ${isRunning} and has ${seconds} seconds left`,
			);

			if (seconds < 1) {
				console.log("Time is up!");

				setSeconds(f.time);
				setIsRunning(f.isAuto);
				handleOnComplete();
			}
		},
		isRunning && f.isUnlocked ? 1000 : undefined,
	);

	return { seconds, isRunning };
};
