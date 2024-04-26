import React from "react";

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

interface DailyGiftDialogStorage {
	lastClaimed: Date | null;
	version: number;
}

const DAILY_GIFT_VERSION = 1;

const DISABLED = true;

export const DailyGiftDialog = (
	props: React.ComponentPropsWithoutRef<typeof Dialog>,
) => {
	const { ...rest } = props;

	const [claimedDailyGift, setClaimedDailyGift] =
		useLocalStorage<DailyGiftDialogStorage>("daily-gift", {
			lastClaimed: null,
			version: DAILY_GIFT_VERSION,
		});

	const [isOpen, setIsOpen] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			const isNewDay = claimedDailyGift.lastClaimed
				? new Date().getDate() !==
					new Date(claimedDailyGift.lastClaimed).getDate()
				: true;

			setIsOpen(isNewDay);
		}, 500);
	}, [claimedDailyGift]);

	const handleOnClaim = () => {
		setClaimedDailyGift({
			...claimedDailyGift,
			lastClaimed: new Date(),
		});
	};

	if (DISABLED) {
		return null;
	}

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen} {...rest}>
			<DialogContent
				onInteractOutside={(e) => e.preventDefault()}
				onEscapeKeyDown={(e) => e.preventDefault()}
				hasCloseButton={false}
			>
				<DialogImage src="/images/msc/gift.webp" alt="Daily Gift" />

				<DialogHeader className="mt-12 sm:mt-10">
					<DialogTitle className="text-xl">Daily Gift</DialogTitle>
					<DialogDescription>
						Claim your daily gift and get free resources!
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<DialogClose asChild>
						<Button onClick={handleOnClaim}>Claim Daily Gift</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
