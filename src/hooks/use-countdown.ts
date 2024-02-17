import React from "react";
import { useInterval } from "./use-interval";

type CountdownProps = {
	seconds?: number;
	running?: boolean;
	onComplete?: () => void;
	interval?: number;
};

const padLeft = (num: number) => {
	return num < 10 ? `0${num}` : num;
};

export const useCountdown = ({
	seconds: initialSeconds = 0,
	running: initiallyRunning = false,
	onComplete,
	interval = 1000,
}: CountdownProps) => {
	const [seconds, setSeconds] = React.useState(initialSeconds);
	const [isRunning, setIsRunning] = React.useState(initiallyRunning);

	useInterval(() => {
		if (seconds > 0 && isRunning) {
			setSeconds(seconds - 1);
		}

		if (seconds === 0) {
			setSeconds(initialSeconds);
			setIsRunning(false);
			!!onComplete && onComplete();
		}
	}, interval);

	const formatted = `${padLeft(Math.floor(seconds / 60))}:${padLeft(
		seconds % 60,
	)}`;

	const onStart = React.useCallback(() => {
		setIsRunning(true);
	}, []);

	return { seconds, formatted, onStart, isRunning };
};
