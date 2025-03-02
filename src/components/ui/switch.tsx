import * as RSwitch from "@radix-ui/react-switch";
import * as React from "react";
import { cn } from "@/utils/cn";

interface SwitchProps
	extends React.ComponentPropsWithoutRef<typeof RSwitch.Root> {}

export const Switch = React.forwardRef<
	React.ElementRef<typeof RSwitch.Root>,
	SwitchProps
>((props, ref) => {
	const { className, ...rest } = props;

	return (
		<RSwitch.Root
			ref={ref}
			className={cn(
				"peer h-6 w-11",
				"inline-flex shrink-0 items-center",
				"transition-colors cursor-pointer",
				"rounded-full border-2 border-transparent",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white",
				"disabled:cursor-not-allowed disabled:opacity-50",
				"data-[state=checked]:bg-black",
				"data-[state=unchecked]:bg-neutral-300",
				className,
			)}
			{...rest}
		>
			<RSwitch.Thumb
				className={cn(
					"pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
				)}
			/>
		</RSwitch.Root>
	);
});

Switch.displayName = RSwitch.Root.displayName;
