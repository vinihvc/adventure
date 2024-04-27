import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/utils/cn";
import { type VariantProps, tv } from "tailwind-variants";

export const ScrollArea = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<ScrollAreaPrimitive.Root
			ref={ref}
			className={cn("relative overflow-hidden", className)}
			{...rest}
		>
			<ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	);
});

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const scrollbarVariants = tv({
	base: ["flex touch-none select-none transition-colors"],
	variants: {
		orientation: {
			vertical: ["h-full w-2.5 border-l border-l-transparent p-[1px]"],
			horizontal: ["h-2.5 flex-col border-t border-t-transparent p-[1px]"],
		},
	},
	defaultVariants: {
		orientation: "vertical",
	},
});

interface ScrollBarProps
	extends React.ComponentPropsWithoutRef<
			typeof ScrollAreaPrimitive.ScrollAreaScrollbar
		>,
		VariantProps<typeof scrollbarVariants> {}

export const ScrollBar = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
	ScrollBarProps
>((props, ref) => {
	const { className, orientation, ...rest } = props;

	return (
		<ScrollAreaPrimitive.ScrollAreaScrollbar
			ref={ref}
			orientation={orientation}
			className={cn(scrollbarVariants({ orientation, className }))}
			{...rest}
		>
			<ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 bg-black" />
		</ScrollAreaPrimitive.ScrollAreaScrollbar>
	);
});

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
