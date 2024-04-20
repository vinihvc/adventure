import * as RDialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";
import { cn } from "@/utils/cn";

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

export const DialogContent = React.forwardRef<
	React.ElementRef<typeof RDialog.Content>,
	React.ComponentPropsWithoutRef<typeof RDialog.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<RDialog.Content
			ref={ref}
			className={cn(
				"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
				className,
			)}
			{...props}
		>
			{children}

			<RDialog.Close className="absolute right-4 top-4 opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:pointer-events-none">
				<X className="size-5" />
				<span className="sr-only">Close</span>
			</RDialog.Close>
		</RDialog.Content>
	</DialogPortal>
));

DialogContent.displayName = RDialog.Content.displayName;

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
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));

DialogDescription.displayName = RDialog.Description.displayName;
