import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "@/utils/cn";

const buttonVariants = tv({
	base: [
		[
			"inline-flex items-center justify-center",
			"rounded",
			"transition-all whitespace-nowrap",
			"text-sm font-medium",
			"ring-offset-background",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
			"focus-visible:ring-offset-2",
			"disabled:pointer-events-none disabled:bg-neutral-500",
		],
	],
	variants: {
		variant: {
			solid: "bg-primary text-primary-foreground",
			destructive: "bg-destructive text-destructive-foreground",
			outline:
				"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
			primary: "bg-primary text-primary-foreground",
			secondary: "bg-secondary text-secondary-foreground",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
		},
		size: {
			sm: "h-9 px-3",
			md: "h-10 px-4 py-2",
			lg: "h-11 px-8",
			icon: "size-10",
		},
	},
	defaultVariants: {
		variant: "solid",
		size: "md",
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const { className, variant, size, asChild = false, ...rest } = props;

		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				ref={ref}
				className={cn(buttonVariants({ variant, size, className }))}
				{...rest}
			/>
		);
	},
);
Button.displayName = "Button";
