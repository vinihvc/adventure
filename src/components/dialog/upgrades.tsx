import { Button } from "@/components/ui/button";

import { FACTORIES, type FactoryType } from "@/data/factories";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowBigUpDash } from "lucide-react";
import { useFactory } from "@/store/atoms/factories";
import { amountFormatter } from "@/utils/formatters";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const UpgradesDialog = () => {
	const handleUpgrade = (type: FactoryType) => {
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
				<DialogHeader>
					<DialogTitle>Upgrades</DialogTitle>
					<DialogDescription>
						Upgrade your factories to increase your income.
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
								onClick={() => handleUpgrade(key as FactoryType)}
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
			</DialogContent>
		</Dialog>
	);
};
