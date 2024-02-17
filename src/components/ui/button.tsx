import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "@/utils/cn";

const buttonVariants = tv({
	base: [
		[
			"inline-flex items-center justify-center uppercase",
			"rounded-lg [text-shadow:_0_1.5px_3px_var(--tw-shadow-color)]",
			"transition-color whitespace-nowrap",
			"font-bold",
			"ring-offset-background",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
			"focus-visible:ring-offset-2",
			"disabled:pointer-events-none disabled:grayscale",
		],
	],
	variants: {
		variant: {
			primary:
				"bg-primary text-primary-foreground shadow-primary-hover disabled:text-primary-foreground",
			destructive: "bg-destructive text-destructive-foreground shadow-red-600",
			outline:
				"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
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
		variant: "primary",
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
