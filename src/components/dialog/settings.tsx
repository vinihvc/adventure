import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Switch } from "../ui/switch";

import { useAtom } from "jotai";
import { Cog } from "lucide-react";
import { settingsAtom } from "../../store/settings";
import { cn } from "../../utils/cn";
import { Button } from "../ui/button";
import { ThemeSwitch } from "../layout/theme";

interface SettingDialogProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SettingDialog = (props: SettingDialogProps) => {
	const { className, ...rest } = props;

	const [settings, setSettings] = useAtom(settingsAtom);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className={cn(className)} size="icon" {...rest}>
					<Cog />
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
					{Object.entries(settings).map(([key, value]) => (
						<div key={key} className="flex justify-between items-center">
							<div className="text-xl font-semibold">{key}</div>

							<Switch
								checked={value}
								onCheckedChange={() =>
									setSettings((prev) => ({ ...prev, [key]: !value }))
								}
							/>
						</div>
					))}

					<div className="flex justify-between items-center">
						<div className="text-xl font-semibold">Dark Mode</div>

						<ThemeSwitch />
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
