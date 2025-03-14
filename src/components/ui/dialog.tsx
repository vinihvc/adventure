import * as RDialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";
import { cn } from "@/utils/cn";
import { Image, type ImageProps } from "./image";
import { Slot } from "@radix-ui/react-slot";

export const Dialog = RDialog.Root;

export const DialogTrigger = RDialog.Trigger;

export const DialogPortal = RDialog.Portal;

export const DialogClose = RDialog.Close;

export const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof RDialog.Overlay>,
	React.ComponentPropsWithoutRef<typeof RDialog.Overlay>
>(({ className, ...props }, ref) => (
	<RDialog.Overlay
		ref={ref}
		className={cn(
			"fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className,
		)}
		{...props}
	/>
));

DialogOverlay.displayName = RDialog.Overlay.displayName;

interface DialogContentProps
	extends React.ComponentPropsWithoutRef<typeof RDialog.Content> {
	/**
	 * If `true`, a close button will be rendered in the top-right corner.
	 *
	 * @default true
	 */
	hasCloseButton?: boolean;
}

export const DialogContent = React.forwardRef<
	React.ElementRef<typeof RDialog.Content>,
	DialogContentProps
>((props, ref) => {
	const { hasCloseButton = true, className, children, ...rest } = props;

	return (
		<DialogPortal>
			<DialogOverlay />

			<RDialog.Content
				ref={ref}
				className={cn(
					"fixed grid z-50",
					"flex flex-col",
					"max-sm:bottom-0 max-sm:translate-y-0",
					"left-[50%] sm:top-[50%] translate-x-[-50%] sm:translate-y-[-50%]",
					"w-full max-h-[60%] sm:max-w-lg sm:max-h-[70%]",
					"gap-4 p-3 md:p-6",
					"bg-white",
					"shadow-lg border border-black",
					"duration-200",
					"sm:shadow-[-8px_8px_0_0] sm:shadow-black",
					"data-[state=open]:animate-in data-[state=open]:slide-in-from-left-1/2",
					"max-sm:data-[state=open]:slide-in-from-bottom-full",
					"sm:data-[state=open]:slide-in-from-top-[48%] sm:data-[state=open]:zoom-in-95",
					"data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:fade-out-0",
					"max-sm:data-[state=closed]:slide-out-to-bottom-[48%]",
					"sm:data-[state=closed]:zoom-out-95 sm:data-[state=closed]:slide-out-to-top-[48%]",
					className,
				)}
				{...rest}
			>
				{children}

				{hasCloseButton && (
					<RDialog.Close className="absolute right-4 top-4 opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:pointer-events-none">
						<X className="size-6" />
						<span className="sr-only">Close</span>
					</RDialog.Close>
				)}
			</RDialog.Content>
		</DialogPortal>
	);
});

DialogContent.displayName = RDialog.Content.displayName;

interface DialogImageProps extends ImageProps {
	asChild?: boolean;
}

export const DialogImage = (props: DialogImageProps) => {
	const { asChild, className, ...rest } = props;

	const Comp = asChild ? Slot : Image;

	return (
		<div className="absolute -top-28 md:left-2 max-sm:inset-x-0 max-sm:flex max-sm:justify-center">
			<Comp
				className={cn(
					"size-40 rounded-full border-2 border-black drop-shadow-md aspect-square",
					className,
				)}
				{...rest}
			/>
		</div>
	);
};

export const DialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col space-y-1.5 text-center sm:text-left",
			className,
		)}
		{...props}
	/>
);

DialogHeader.displayName = "DialogHeader";

export const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
			className,
		)}
		{...props}
	/>
);

DialogFooter.displayName = "DialogFooter";

export const DialogTitle = React.forwardRef<
	React.ElementRef<typeof RDialog.Title>,
	React.ComponentPropsWithoutRef<typeof RDialog.Title>
>(({ className, ...props }, ref) => (
	<RDialog.Title
		ref={ref}
		className={cn(
			"text-lg font-semibold leading-none tracking-tight",
			className,
		)}
		{...props}
	/>
));

DialogTitle.displayName = RDialog.Title.displayName;

export const DialogDescription = React.forwardRef<
	React.ElementRef<typeof RDialog.Description>,
	React.ComponentPropsWithoutRef<typeof RDialog.Description>
>(({ className, ...props }, ref) => (
	<RDialog.Description
		ref={ref}
		className={cn("text-sm opacity-80", className)}
		{...props}
	/>
));

DialogDescription.displayName = RDialog.Description.displayName;
