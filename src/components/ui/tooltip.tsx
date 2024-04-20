import * as React from "react";
import * as RTooltip from "@radix-ui/react-tooltip";

import { cn } from "@/utils/cn";

export const Tooltip = React.forwardRef<
	React.ElementRef<typeof RTooltip.Provider>,
	React.ComponentPropsWithoutRef<typeof RTooltip.Provider>
>((props) => {
	const { children, ...rest } = props;

	return (
		<RTooltip.Provider {...rest}>
			<RTooltip.Root>{children}</RTooltip.Root>
		</RTooltip.Provider>
	);
});

export const TooltipTrigger = RTooltip.Trigger;

export const TooltipContent = React.forwardRef<
	React.ElementRef<typeof RTooltip.Content>,
	React.ComponentPropsWithoutRef<typeof RTooltip.Content>
>((props, ref) => {
	const { className, sideOffset = 4, ...rest } = props;
	return (
		<RTooltip.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn(
				"z-50 overflow-hidden",
				"px-3 py-1.5",
				"border border-neutral-200 shadow-md",
				"bg-black text-sm text-white",
				"animate-in fade-in-0 zoom-in-95",
				"data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
				"data-[side=bottom]:slide-in-from-top-2",
				"data-[side=left]:slide-in-from-right-2",
				"data-[side=right]:slide-in-from-left-2",
				"data-[side=top]:slide-in-from-bottom-2",
				className,
			)}
			{...rest}
		/>
	);
});

TooltipContent.displayName = RTooltip.Content.displayName;
