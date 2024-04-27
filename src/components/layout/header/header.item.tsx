import * as React from "react";

import { cn } from "@/utils/cn";
import { type VariantProps, tv } from "tailwind-variants";

const headerItemVariants = tv({
	base: [
		"flex justify-between items-center w-36 text-sm h-11 px-4 whitespace-nowrap gap-2",
	],
	variants: {
		colorScheme: {
			black: "bg-black text-white",
			white: "bg-white text-black",
		},
	},
	defaultVariants: {
		colorScheme: "black",
	},
});

interface HeaderItemProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof headerItemVariants> {
	/**
	 * Icon to display before the children
	 *
	 * @default undefined
	 */
	icon?: React.ElementType;
}

export const HeaderItem = (props: HeaderItemProps) => {
	const { colorScheme, icon, className, children, ...rest } = props;

	return (
		<div
			className={cn(headerItemVariants({ colorScheme, className }))}
			{...rest}
		>
			<span className="shrink-0">{icon && React.createElement(icon)}</span>

			<span className="text-lg font-bold">{children}</span>
		</div>
	);
};
