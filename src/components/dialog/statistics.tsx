import { DialogDescription } from "@radix-ui/react-dialog";
import { FACTORIES, type FactoryType } from "@/data/factories";
import { useStatistics } from "@/store/atoms/statistics";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { amountFormatter } from "@/utils/formatters";
import { PieChart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Image } from "../ui/image";

export const StatisticsDialog = () => {
	const statistics = useStatistics();

	return (
		<Dialog>
			<Tooltip>
				<TooltipTrigger asChild>
					<DialogTrigger asChild>
						<Button size="icon" className="max-sm:w-full">
							<span className="sr-only">Open Statistics</span>
							<PieChart />
						</Button>
					</DialogTrigger>
				</TooltipTrigger>

				<TooltipContent>Statistics</TooltipContent>
			</Tooltip>

			<DialogContent>
				<div className="absolute -top-28 md:left-2 max-sm:inset-x-0 max-sm:flex max-sm:justify-center">
					<Image
						src="/images/msc/statistic.webp"
						className="size-40 rounded-full border-2 border-black drop-shadow-md aspect-square"
					/>
				</div>

				<DialogHeader className="mt-12 sm:mt-10">
					<DialogTitle>Statistics</DialogTitle>
					<DialogDescription>
						Check your statistics and see how you are doing.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-2">
					<div className="flex justify-between items-center">
						<span className="font-semibold capitalize">Total</span>

						<span>{amountFormatter(statistics.moneyEarned)}</span>
					</div>

					{Object.entries(FACTORIES).map(([key]) => (
						<div key={key} className="flex justify-between items-center">
							<span className="font-semibold capitalize">{key}</span>

							<span>
								{new Intl.NumberFormat().format(
									statistics.factories[key as FactoryType].moneyEarned,
								)}
							</span>
						</div>
					))}
				</div>

				<DialogFooter>
					<DialogClose asChild>
						<Button className="shadow-md">Close Statistics</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
