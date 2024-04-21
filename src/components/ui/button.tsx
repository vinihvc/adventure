import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "@/utils/cn";

const buttonVariants = tv({
	base: [
		"inline-flex items-center justify-center",
		"font-semibold whitespace-nowrap",
		"transition duration-200",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
		"disabled:pointer-events-none disabled:grayscale disabled:opacity-50",
	],
	variants: {
		colorScheme: {
			red: "ring-red-500",
			green: "ring-green-500",
			white: "ring-white",
			black: "ring-black",
		},
		variant: {
			solid: "hover:opacity-80",
			outline: "border bg-transparent",
			ghost: "",
			link: "underline-offset-4 hover:underline",
		},
		size: {
			sm: "h-9 px-3",
			md: "h-10 px-4 py-2",
			lg: "h-11 px-8",
			icon: "size-11",
		},
		pressable: {
			true: "shadow-[0_5px_0] active:shadow-none active:translate-y-1",
		},
	},
	compoundVariants: [
		// red
		{
			variant: "solid",
			colorScheme: "red",
			className: "bg-red-500 text-white",
		},
		{
			variant: "outline",
			colorScheme: "red",
			className: "text-red-500 border-red-500 hover:bg-red-500/10",
		},
		{
			variant: "ghost",
			colorScheme: "red",
			className: "hover:text-red-500",
		},
		{
			variant: "link",
			colorScheme: "red",
			className: "hover:text-red-500",
		},
		// green
		{
			variant: "solid",
			colorScheme: "green",
			className: "bg-green-500 text-white",
		},
		{
			variant: "outline",
			colorScheme: "green",
			className: "text-green-500 border-green-500 hover:bg-green-500/10",
		},
		{
			variant: "ghost",
			colorScheme: "green",
			className: "hover:text-green-500",
		},
		{
			variant: "link",
			colorScheme: "green",
			className: "hover:text-green-500",
		},
		// white
		{
			variant: "solid",
			colorScheme: "white",
			className: "bg-white text-black",
		},
		{
			variant: "outline",
			colorScheme: "white",
			className: "text-black border-white hover:bg-white/10",
		},
		{
			variant: "ghost",
			colorScheme: "white",
			className: "hover:text-white",
		},
		{
			variant: "link",
			colorScheme: "white",
			className: "hover:text-white",
		},
		// black
		{
			variant: "solid",
			colorScheme: "black",
			className: "bg-black text-white",
		},
		{
			variant: "outline",
			colorScheme: "black",
			className: "text-black border-black hover:bg-black/10",
		},
		{
			variant: "ghost",
			colorScheme: "black",
			className: "hover:text-black",
		},
		{
			variant: "link",
			colorScheme: "black",
			className: "hover:text-black",
		},
	],
	defaultVariants: {
		colorScheme: "black",
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
			colorScheme,
			variant,
			size,
			pressable,
			asChild = false,
			className,
			...rest
		} = props;

		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				ref={ref}
				className={cn(
					buttonVariants({ colorScheme, variant, size, pressable, className }),
				)}
				{...rest}
			/>
		);
	},
);

Button.displayName = "Button";
