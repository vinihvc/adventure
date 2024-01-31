import { cn } from "@//utils/cn";

interface GameBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GameBackground = (props: GameBackgroundProps) => {
	const { className, children, ...rest } = props;

	return (
		<div
			className={cn(
				"flex flex-col min-h-screen items-center justify-center",
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	);
};
