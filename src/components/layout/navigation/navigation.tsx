import { AllianceDialog } from "@/components/dialog/alliances";
import { ManagersDialog } from "@/components/dialog/managers";
import { StatisticsDialog } from "@/components/dialog/statistics";
import { UpgradesDialog } from "@/components/dialog/upgrades";
import { cn } from "@/utils/cn";

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navigation = (props: NavigationProps) => {
	const { className, ...rest } = props;

	return (
		<nav className={cn("flex items-center gap-2 z-10", className)} {...rest}>
			<StatisticsDialog />
			<UpgradesDialog />
			<ManagersDialog />
			<AllianceDialog />
		</nav>
	);
};
