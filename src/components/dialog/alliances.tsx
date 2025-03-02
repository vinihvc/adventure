import { Button } from "@/components/ui/button";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogImage,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Handshake } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const AllianceDialog = () => {
	return (
		<Dialog>
			<Tooltip>
				<TooltipTrigger asChild>
					<DialogTrigger asChild>
						<Button size="icon" className="max-sm:w-full">
							<span className="sr-only">Open Alliances</span>
							<Handshake />
						</Button>
					</DialogTrigger>
				</TooltipTrigger>

				<TooltipContent>Alliances</TooltipContent>
			</Tooltip>

			<DialogContent>
				<DialogImage src="/images/alliances/alliance.webp" alt="Alliances" />

				<DialogHeader className="mt-12 sm:mt-10">
					<DialogTitle>Alliances</DialogTitle>
					<DialogDescription>
						Create an alliance with other kingdoms to increase the trade
						partnership between you
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<DialogClose asChild>
						<Button>Close Alliances</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
