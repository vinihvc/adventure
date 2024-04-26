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
	DialogTitle,
} from "../ui/dialog";
import { Image } from "../ui/image";

interface DailyGiftType {
	claimed: boolean;
	date: number;
}

export const DailyGiftDialog = (
	props: React.ComponentPropsWithoutRef<typeof Dialog>,
) => {
	const { ...rest } = props;

	const [claimedDailyGift, setClaimedDailyGift] =
		useLocalStorage<DailyGiftType>("daily-gift", {
			claimed: false,
			date: new Date().getDate(),
		});

	const [isOpen, setIsOpen] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			const isNewDay = new Date().getDate() !== claimedDailyGift.date;

			setIsOpen(claimedDailyGift.claimed === false || isNewDay);
		}, 500);
	}, [claimedDailyGift]);

	const handleOnClaim = () => {
		setClaimedDailyGift({
			claimed: true,
			date: new Date().getDate(),
		});
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen} {...rest}>
			<DialogContent
				onInteractOutside={(e) => e.preventDefault()}
				onEscapeKeyDown={(e) => e.preventDefault()}
				hasCloseButton={false}
			>
				<div className="absolute -top-28 md:left-2 max-sm:inset-x-0 max-sm:flex max-sm:justify-center">
					<Image
						src="/images/msc/gift.webp"
						alt="Daily Gift"
						className="size-40 rounded-full border-2 border-black drop-shadow-md aspect-square"
					/>
				</div>

				<DialogHeader className="mt-12 sm:mt-10">
					<DialogTitle className="text-xl">Daily Gift</DialogTitle>
					<DialogDescription>
						Claim your daily gift and get free resources!
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<DialogClose asChild>
						<Button className="shadow-md" onClick={handleOnClaim}>
							Claim Daily Gift
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
