import { DialogDescription } from "@radix-ui/react-dialog";
import { useAtom } from "jotai";
import { FACTORIES, FactoryType } from "../../config/factories";
import { statisticsAtom } from "../../store/statistics";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

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
							{Intl.NumberFormat("en-US", {
								style: "currency",
								currency: "EUR",
							}).format(statistics.moneyEarned)}
						</span>
					</div>

					{Object.entries(FACTORIES).map(([key]) => (
						<div key={key} className="flex justify-between items-center">
							<span className="text-lg font-bold">{key}</span>

							<span className="text-4xl font-extrabold">
								{Intl.NumberFormat("en-US", {
									style: "currency",
									currency: "EUR",
								}).format(statistics.factories[key as FactoryType].moneyEarned)}
							</span>
						</div>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
};
