import { Button } from "@/components/ui/button";

import { FACTORIES, FactoryType } from "@/data/factories";
import autoSfx from "@/assets/sfx/auto.wav";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { amountFormatter } from "@/utils/formatters";
import { cn } from "@/utils/cn";
import { useAudio } from "@/hooks/use-sound";
import { useFactory, upgradeAuto } from "@/store/atoms/factories";
import { useWallet } from "@/store/atoms/wallet";

export const ManagersDialog = () => {
	const { toggle } = useAudio(autoSfx);

	const wallet = useWallet();

	const handleAutomatic = (type: FactoryType) => {
		toggle();

		upgradeAuto(type);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full" size="sm">
					Managers
				</Button>
			</DialogTrigger>

			<DialogContent className="flex flex-col max-h-[500px]">
				<DialogHeader>
					<DialogTitle>Managers</DialogTitle>
					<DialogDescription>
						Hire managers to automate your factories.
					</DialogDescription>
				</DialogHeader>

				<div className="grid grid-cols-2 gap-5 overflow-auto py-2">
					{Object.entries(FACTORIES).map(([key, value]) => {
						const factory = useFactory(key as FactoryType);

						return (
							<Button
								key={key}
								className={cn(
									"aspect-square w-full h-48 flex-col bg-green-500",
									factory.isAuto && "disabled:bg-green-200",
								)}
								onClick={() => handleAutomatic(key as FactoryType)}
								disabled={factory.isAuto || value.autoCost > wallet.money}
							>
								<span className="capitalize text-2xl text-bold">{key}</span>
								<span>
									{!factory?.isAuto && (
										<div>
											{`cost ${amountFormatter(
												FACTORIES[key as FactoryType]?.autoCost,
											)}`}
										</div>
									)}
								</span>
							</Button>
						);
					})}
				</div>
			</DialogContent>
		</Dialog>
	);
};
