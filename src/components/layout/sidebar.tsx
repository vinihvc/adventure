import { InvestorsDialog } from "../dialog/investors";
import { ManagersDialog } from "../dialog/managers";
import { StatisticsDialog } from "../dialog/statistics";
import { UpgradesDialog } from "../dialog/upgrades";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Sidebar = () => {
	return (
		<aside className="flex flex-col w-full max-w-52 items-center justify-center grow-0 gap-2 bg-background p-5">
			<div className="rounded-full p-1">
				<Avatar className="size-32">
					<AvatarImage
						src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=Pumpkin${new Date().getTime()}`}
						alt="Vinicius"
					/>
					<AvatarFallback>VV</AvatarFallback>
				</Avatar>
			</div>

			<StatisticsDialog />

			<UpgradesDialog />

			<ManagersDialog />

			<InvestorsDialog />
		</aside>
	);
};
