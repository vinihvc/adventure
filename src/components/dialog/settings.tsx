import React from "react";
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

import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/layout/theme";
import { useSettings, toggleMusic, toggleSfx } from "@/store/atoms/settings";

interface SettingDialogProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SettingDialog = (props: SettingDialogProps) => {
	const { className, ...rest } = props;

	const settings = useSettings();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className={cn("bg-sky-400 text-white rounded-lg", className)}
					size="icon"
					{...rest}
				>
					<Cog className="drop-shadow" />
					<span className="sr-only">Open Settings</span>
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Settings</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<div className="space-y-5">
					<div className="flex justify-between items-center">
						<div className="text-xl font-semibold">Music</div>

						<Switch checked={settings.music} onCheckedChange={toggleMusic} />
					</div>

					<div className="flex justify-between items-center">
						<div className="text-xl font-semibold">SFX</div>

						<Switch checked={settings.sfx} onCheckedChange={toggleSfx} />
					</div>

					<div className="flex justify-between items-center">
						<div className="text-xl font-semibold">Dark Mode</div>

						<ThemeSwitch />
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
