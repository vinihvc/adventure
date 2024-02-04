import { DialogDescription } from "@radix-ui/react-dialog";
import { useAtom } from "jotai";
import { FACTORIES, FactoryType } from "@/data/factories";
import { statisticsAtom } from "@/store/statistics";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { amountFormatter } from "@/utils/formatters";

export const StatisticsDialog = () => {
	const [statistics] = useAtom(statisticsAtom);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full" size="sm">
					Stats
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Statistics</DialogTitle>
					<DialogDescription>
						Check your statistics and see how you are doing.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-2">
					<div className="flex justify-between items-center">
						<span className="text-lg font-bold">Total</span>

						<span className="text-4xl font-extrabold">
							{amountFormatter(statistics.moneyEarned)}
						</span>
					</div>

					{Object.entries(FACTORIES).map(([key]) => (
						<div key={key} className="flex justify-between items-center">
							<span className="text-lg font-bold capitalize">{key}</span>

							<span className="text-xl font-extrabold">
								{amountFormatter(
									statistics.factories[key as FactoryType].moneyEarned,
								)}
							</span>
						</div>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
};
