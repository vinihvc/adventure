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
import { Switch } from "@/components/ui/switch";

import { Cog } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSettings, toggleMusic, toggleSfx } from "@/store/atoms/settings";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Image } from "../ui/image";

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

				<TooltipContent>Settings</TooltipContent>
			</Tooltip>

			<DialogContent>
				<div className="absolute -top-28 md:left-2 max-sm:inset-x-0 max-sm:flex max-sm:justify-center">
					<Image
						src="/images/msc/setting.webp"
						className="size-40 rounded-full border-2 border-black drop-shadow-md aspect-square"
					/>
				</div>

				<DialogHeader className="mt-12 sm:mt-10">
					<DialogTitle>Settings</DialogTitle>
					<DialogDescription>
						Change your settings to fit your preferences.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-5">
					<div className="flex justify-between items-center">
						<label htmlFor="toggle-music" className="font-semibold">
							Music
						</label>

						<Switch
							id="toggle-music"
							checked={settings.music}
							onCheckedChange={toggleMusic}
						/>
					</div>

					<div className="flex justify-between items-center">
						<label htmlFor="toggle-sfx" className="font-semibold">
							SFX
						</label>

						<Switch
							id="toggle-sfx"
							checked={settings.sfx}
							onCheckedChange={toggleSfx}
						/>
					</div>
				</div>

				<DialogFooter>
					<DialogClose asChild>
						<Button className="shadow-md">Close Settings</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
