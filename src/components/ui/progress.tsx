import * as React from "react";
import * as RProgress from "@radix-ui/react-progress";
import { cn } from "@/utils/cn";

export const Progress = React.forwardRef<
	React.ElementRef<typeof RProgress.Root>,
	React.ComponentPropsWithoutRef<typeof RProgress.Root>
>(({ className, value, ...props }, ref) => (
	<RProgress.Root
		ref={ref}
		className={cn(
			"relative h-6 w-full overflow-hidden bg-white border border-black",
			className,
		)}
		{...props}
	>
		<RProgress.Indicator
			className="h-full w-full flex-1 bg-green-400 transition-all"
			style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
		/>
	</RProgress.Root>
));

Progress.displayName = RProgress.Root.displayName;
