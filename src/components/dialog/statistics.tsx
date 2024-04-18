import { DialogDescription } from "@radix-ui/react-dialog";
import { FACTORIES, type FactoryType } from "@/data/factories";
import { useStatistics } from "@/store/atoms/statistics";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { amountFormatter } from "@/utils/formatters";
import { PieChart } from "lucide-react";

export const StatisticsDialog = () => {
	const statistics = useStatistics();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="icon">
					<div className="sr-only">Open Statistics</div>
					<PieChart />
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
			</DialogContent>
		</Dialog>
	);
};
