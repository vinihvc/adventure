import { Button } from "@/components/ui/button";

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
import { Handshake } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const InvestorsDialog = () => {
	return (
		<Dialog>
			<Tooltip>
				<TooltipTrigger asChild>
					<DialogTrigger asChild>
						<Button size="icon" className="max-sm:w-full">
							<span className="sr-only">Open Investors</span>
							<Handshake />
						</Button>
					</DialogTrigger>
				</TooltipTrigger>

				<TooltipContent>Investors</TooltipContent>
			</Tooltip>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Investors</DialogTitle>
					<DialogDescription>
						Investors are a great way to earn money passively.
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<DialogClose asChild>
						<Button className="shadow-md">Close Investors</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
