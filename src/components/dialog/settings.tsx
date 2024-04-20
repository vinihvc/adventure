import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

import { Cog } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSettings, toggleMusic, toggleSfx } from "@/store/atoms/settings";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const SettingDialog = () => {
	const settings = useSettings();

	return (
		<Dialog>
			<Tooltip>
				<TooltipTrigger asChild>
					<DialogTrigger asChild>
						<Button size="icon">
							<span className="sr-only">Open Settings</span>
							<Cog />
						</Button>
					</DialogTrigger>
				</TooltipTrigger>

				<TooltipContent>Open Settings</TooltipContent>
			</Tooltip>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Settings</DialogTitle>
					<DialogDescription>
						Change your settings to fit your preferences.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-5">
					<div className="flex justify-between items-center">
						<div className="font-semibold">Music</div>

						<Switch checked={settings.music} onCheckedChange={toggleMusic} />
					</div>

					<div className="flex justify-between items-center">
						<div className="font-semibold">SFX</div>

						<Switch checked={settings.sfx} onCheckedChange={toggleSfx} />
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
