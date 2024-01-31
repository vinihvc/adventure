import { Button } from "@/components/ui/button";

import { FACTORIES, FactoryType } from "@/game-data/factories";
import autoSfx from "@/assets/sfx/auto.wav";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useAtom } from "jotai";
import { factoriesAtom } from "@/store/factories";
import { amountFormatter } from "@/utils/formatters";
import { walletAtom } from "@/store/wallet";
import { cn } from "@/utils/cn";
import { useAudio } from "@/hooks/use-sound";

export const ManagersDialog = () => {
	const { toggle } = useAudio(autoSfx);

	const [factories, setFactories] = useAtom(factoriesAtom);

	const [wallet] = useAtom(walletAtom);

	const handleAutomatic = (type: FactoryType) => {
		toggle();

		setFactories((prev) => {
			return {
				...prev,
				[type]: {
					...prev[type],
					isAuto: true,
				},
			};
		});
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
					{Object.entries(factories).map(([key, value]) => {
						const factory = { ...value, ...FACTORIES[key as FactoryType] };

						return (
							<Button
								key={key}
								className={cn(
									"aspect-square w-full h-48 flex-col bg-green-500",
									factory.isAuto && "disabled:bg-green-200",
								)}
								onClick={() => handleAutomatic(key as FactoryType)}
								disabled={factory.isAuto || factory.autoCost > wallet.money}
							>
								<span className="capitalize text-2xl text-bold">{key}</span>
								<span>
									{!value?.isAuto && (
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
