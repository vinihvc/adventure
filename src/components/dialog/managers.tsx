import { Button } from "@/components/ui/button";

import { FACTORIES, type FactoryType } from "@/data/factories";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useFactory, upgradeAuto } from "@/store/atoms/factories";
import { UserRound } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

import { useSound } from "@/hooks/use-sound";
import autoSfx from "@/assets/sfx/auto.wav";
import { Image } from "../ui/image";
import { Card } from "../ui/card";

export const ManagersDialog = () => {
	const { play } = useSound(autoSfx);

	const handleAutomatic = (type: FactoryType) => {
		play();
		upgradeAuto(type);
	};

	return (
		<Dialog>
			<Tooltip>
				<TooltipTrigger asChild>
					<DialogTrigger asChild>
						<Button size="icon" className="max-sm:w-full">
							<span className="sr-only">Open Managers</span>
							<UserRound />
						</Button>
					</DialogTrigger>
				</TooltipTrigger>

				<TooltipContent>Managers</TooltipContent>
			</Tooltip>

			<DialogContent>
				<div className="absolute -top-28 md:left-2 max-sm:inset-x-0 max-sm:flex max-sm:justify-center">
					<Image
						src="/images/managers/manager.webp"
						className="size-40 rounded-full border-2 border-black drop-shadow-md aspect-square"
					/>
				</div>

				<DialogHeader className="mt-10">
					<DialogTitle>Managers</DialogTitle>
					<DialogDescription>
						Hire managers to automate your factories.
					</DialogDescription>
				</DialogHeader>

				<div className="grid grid-cols-3 gap-3">
					{Object.entries(FACTORIES).map(([key]) => {
						const factory = useFactory(key as FactoryType);

						return (
							<Card
								key={key}
								factoryType={key}
								factory={factory}
								icon={UserRound}
								image={`/images/managers/${key}.webp`}
								onUpgrade={() => handleAutomatic(key as FactoryType)}
							/>
						);
					})}
				</div>

				<DialogFooter>
					<DialogClose asChild>
						<Button className="shadow-md">Close Managers</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
