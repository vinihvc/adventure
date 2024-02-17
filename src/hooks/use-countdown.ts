import React from "react";
import { useInterval } from "./use-interval";
import { FactoryType } from "@/data/factories";
import { useFactory } from "@/store/atoms/factories";
import { setMoney } from "@/store/atoms/wallet";
import { setStatistics } from "@/store/atoms/statistics";

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

	useInterval(() => {
		if (!f.isUnlocked) return;
		if (!isRunning) return;

		if (seconds > 0 && isRunning) {
			setSeconds(seconds - 1);
		}

		if (seconds === 0) {
			setSeconds(timeDuration);
			setIsRunning(isAuto ? true : false);
			handleOnComplete();
		}
	}, 1000);

	const onRun = () => {
		setIsRunning(true);
	};

	return { seconds, isRunning, onRun };
};
