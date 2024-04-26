import { Button } from "@/components/ui/button";

import { FACTORIES, type FactoryType } from "@/data/factories";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogImage,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useFactory, upgradeAuto } from "@/store/atoms/factories";
import { UserRound } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

import { useSound } from "@/hooks/use-sound";
import autoSfx from "@/assets/sfx/auto.wav";
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
				<DialogImage src="/images/managers/manager.webp" alt="Manager" />

				<DialogHeader className="mt-12 sm:mt-10">
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
						<Button>Close Managers</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
