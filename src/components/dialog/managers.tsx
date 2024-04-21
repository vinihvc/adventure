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
import { amountFormatter } from "@/utils/formatters";
import { useFactory, upgradeAuto } from "@/store/atoms/factories";
import { UserRound } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const ManagersDialog = () => {
	const handleAutomatic = (type: FactoryType) => {
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

			<DialogContent className="flex flex-col">
				<DialogHeader>
					<DialogTitle>Managers</DialogTitle>
					<DialogDescription>
						Hire managers to automate your factories.
					</DialogDescription>
				</DialogHeader>

				<div className="grid grid-cols-2 gap-2 py-2">
					{Object.entries(FACTORIES).map(([key]) => {
						const factory = useFactory(key as FactoryType);

						return (
							<Button
								key={key}
								data-auto={factory.isAuto}
								className="w-full h-32 flex-col data-[auto='true']:bg-green-500"
								onClick={() => handleAutomatic(key as FactoryType)}
							>
								<span className="capitalize text-2xl text-bold">{key}</span>
								<span>
									{!factory?.isAuto && (
										<div>
											{`Price ${amountFormatter(
												FACTORIES[key as FactoryType]?.autoCost,
											)}`}
										</div>
									)}
								</span>
							</Button>
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
