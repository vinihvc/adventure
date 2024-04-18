import { useWallet } from "@/store/atoms/wallet";
import { SettingDialog } from "@/components/dialog/settings";
import { AmountToBuy } from "../amount";
import { amountFormatter } from "@/utils/formatters";
import { HeaderItem } from "./header.item";
import { StatisticsDialog } from "@/components/dialog/statistics";
import { UpgradesDialog } from "@/components/dialog/upgrades";
import { ManagersDialog } from "@/components/dialog/managers";
import { InvestorsDialog } from "@/components/dialog/investors";

export const Header = () => {
	const wallet = useWallet();

	return (
		<header className="h-20 bg-neutral-100 flex justify-between items-center px-5">
			<div className="flex items-center space-x-5">
				<div className="flex space-x-5">
					<HeaderItem className="bg-green-500 text-white">
						{amountFormatter(wallet.money)}
					</HeaderItem>
				</div>
			</div>

			<nav className="flex items-center gap-2">
				<StatisticsDialog />

				<UpgradesDialog />

				<ManagersDialog />

				<InvestorsDialog />
			</nav>

			<nav className="flex items-center gap-2">
				<AmountToBuy />

				<SettingDialog />
			</nav>
		</header>
	);
};
