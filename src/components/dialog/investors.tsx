import { Button } from "@/components/ui/button";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Handshake } from "lucide-react";

export const InvestorsDialog = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="icon">
					<div className="sr-only">Open Investors</div>
					<Handshake />
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Investors</DialogTitle>
					<DialogDescription>
						Investors are a great way to earn money passively.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
