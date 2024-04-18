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

export const SettingDialog = () => {
	const settings = useSettings();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="icon">
					<Cog />
					<span className="sr-only">Open Settings</span>
				</Button>
			</DialogTrigger>

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
