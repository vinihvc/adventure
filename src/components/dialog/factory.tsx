import { Info } from "lucide-react";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Image } from "../ui/image";

interface FactoryDialogProps {
	factoryType: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	factory: any;
}

export const FactoryDialog = (props: FactoryDialogProps) => {
	const { factoryType, factory } = props;

	return (
		<Dialog>
			<Tooltip>
				<TooltipTrigger asChild>
					<DialogTrigger asChild>
						<Button className="w-12 p-0" variant="outline">
							<span className="sr-only">{`${factory.name}'s Info`}</span>
							<Info className="size-5" />
						</Button>
					</DialogTrigger>
				</TooltipTrigger>

				<TooltipContent>{`${factory.name}'s Info`}</TooltipContent>
			</Tooltip>

			<DialogContent>
				<div className="absolute -top-28 md:left-2 max-sm:inset-x-0 max-sm:flex max-sm:justify-center">
					<Image
						src={`/images/factories/${factoryType}.webp`}
						alt={`Factory of ${factory.name}`}
						className="size-40 rounded-full border-2 border-black drop-shadow-md aspect-square"
					/>
				</div>

				<DialogHeader className="mt-10">
					<DialogTitle className="text-xl">{factory.name}</DialogTitle>
					<DialogDescription>{factory.description}</DialogDescription>
				</DialogHeader>

				<div className="space-y-2 text-sm">
					<p className="font-semibold text-lg">Statistics</p>

					<div className="flex justify-between">
						<div>Production speed</div>
						<div>{`${factory.time / 1000}x`}</div>
					</div>

					<div className="flex justify-between">
						<div>Production per click</div>
						<div>{factory.value}</div>
					</div>

					<div className="flex justify-between">
						<div>Production per hour</div>
						<div>{factory.value * 3600}</div>
					</div>
				</div>

				<DialogFooter>
					<DialogClose asChild>
						<Button className="shadow-md">Close Info</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
