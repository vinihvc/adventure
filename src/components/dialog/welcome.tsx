import * as React from "react";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogImage,
	DialogTitle,
} from "../ui/dialog";

const WELCOME_VERSION = 1;

const DISABLED = true;

export const WelcomeDialog = (
	props: React.ComponentPropsWithoutRef<typeof Dialog>,
) => {
	const { ...rest } = props;

	useLocalStorage("welcome", {
		version: WELCOME_VERSION,
	});

	const [isOpen, setIsOpen] = React.useState(true);

	if (DISABLED) return null;

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen} {...rest}>
			<DialogContent
				onInteractOutside={(e) => e.preventDefault()}
				onEscapeKeyDown={(e) => e.preventDefault()}
				hasCloseButton={false}
			>
				<DialogImage src="/images/msc/welcome.webp" alt="Welcome" />

				<DialogHeader className="mt-12 sm:mt-10">
					<DialogTitle className="text-xl">Welcome to Adventure</DialogTitle>
					<DialogDescription>
						Idle game where you can build your own town, generate resources and
						upgrade your buildings.
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<DialogClose asChild>
						<Button>Start your Adventure</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
