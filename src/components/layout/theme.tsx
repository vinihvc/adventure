import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Switch
			checked={theme === "dark"}
			onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
		/>
	);
};
