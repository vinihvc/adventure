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
import { ArrowBigUpDash } from "lucide-react";
import { useFactory } from "@/store/atoms/factories";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

import { useSound } from "@/hooks/use-sound";
import upgradeSfx from "@/assets/sfx/upgrade.wav";
import { Card } from "../ui/card";

export const UpgradesDialog = () => {
	const { play } = useSound(upgradeSfx);

	const handleUpgrade = (type: FactoryType) => {
		play();
		console.log(type);
	};

	return (
		<Dialog>
			<Tooltip>
				<TooltipTrigger asChild>
					<DialogTrigger asChild>
						<Button size="icon" className="max-sm:w-full">
							<span className="sr-only">Open Upgrades</span>
							<ArrowBigUpDash />
						</Button>
					</DialogTrigger>
				</TooltipTrigger>

				<TooltipContent>Upgrades</TooltipContent>
			</Tooltip>

			<DialogContent>
				<DialogImage src="/images/upgrades/upgrade.webp" alt="Upgrades" />

				<DialogHeader className="mt-12 sm:mt-10">
					<DialogTitle>Upgrades</DialogTitle>
					<DialogDescription>
						Upgrade your factories to increase your income.
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
								icon={ArrowBigUpDash}
								image={`/images/upgrades/${key}.webp`}
								onUpgrade={() => handleUpgrade(key as FactoryType)}
							/>
						);
					})}
				</div>

				<DialogFooter>
					<DialogClose asChild>
						<Button>Close Upgrades</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
