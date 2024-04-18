import { cn } from "@//utils/cn";

interface GameBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GameBackground = (props: GameBackgroundProps) => {
	const { className, children, ...rest } = props;

	return (
		<div
			className={cn(
				"relative w-full max-w-6xl bg-neutral-50 border-2",
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	);
};
