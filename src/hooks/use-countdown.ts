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

	const timeDuration = f.time / 1000;

	const isAuto = f.isAuto;

	const [seconds, setSeconds] = React.useState(timeDuration);
	const [isRunning, setIsRunning] = React.useState(isAuto);

	const handleOnComplete = () => {
		setMoney(factory);
		setStatistics(factory);
	};

	useInterval(
		() => {
			if (seconds > 0 && isRunning) {
				setSeconds(seconds - 1);
			}

			if (seconds === 0) {
				setSeconds(timeDuration);
				setIsRunning(isAuto);
				handleOnComplete();
			}
		},
		isRunning && f.isUnlocked ? 1000 : undefined,
	);

	const onRun = () => {
		setIsRunning(true);
	};

	return { seconds, isRunning, onRun };
};
