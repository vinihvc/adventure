import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "@/utils/cn";

const buttonVariants = tv({
	base: [
		"inline-flex items-center justify-center",
		"font-semibold whitespace-nowrap",
		"transition",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
		"disabled:pointer-events-none disabled:grayscale",
	],
	variants: {
		variant: {
			solid: "bg-red-500 text-white focus-visible:ring-red-500",
			outline:
				"border border-red-500 bg-transparent hover:bg-red-500 hover:text-white",
			ghost: "hover:bg-red-500 hover:text-white",
			link: "text-red-500 underline-offset-4 hover:underline",
		},
		size: {
			sm: "h-9 px-3",
			md: "h-10 px-4 py-2",
			lg: "h-11 px-8",
			icon: "size-11",
		},
		pressed: {
			true: "shadow-[0_5px_0] active:shadow-none active:translate-y-1",
		},
	},
	defaultVariants: {
		variant: "solid",
		size: "md",
		pressed: false,
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			className,
			variant,
			size,
			pressed,
			asChild = false,
			...rest
		} = props;

		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				ref={ref}
				className={cn(buttonVariants({ variant, size, pressed, className }))}
				{...rest}
			/>
		);
	},
);
Button.displayName = "Button";
