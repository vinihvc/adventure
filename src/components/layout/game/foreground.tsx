import { cn } from "../../../utils/cn";

interface GameForegroundProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GameForeground = (props: GameForegroundProps) => {
	const { className, children, ...rest } = props;

	return (
		<div
			className={cn(
				"relative max-w-5xl w-full bg-background rounded-lg overflow-hidden border-4",
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	);
};
