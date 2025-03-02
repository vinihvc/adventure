import { useWallet } from "@/store/atoms/wallet";
import { SettingDialog } from "@/components/dialog/settings";
import { AmountToBuy } from "./header.amount";
import { amountFormatter } from "@/utils/formatters";
import { HeaderItem } from "./header.item";
import { CircleDollarSign } from "lucide-react";
import { Navigation } from "../navigation";

export const Header = () => {
	const wallet = useWallet();

	return (
		<header className="sticky top-0 flex justify-between items-center p-2 md:p-5 bg-white z-10">
			<div className="flex items-center space-x-5">
				<div className="flex space-x-5">
					<HeaderItem icon={CircleDollarSign} className="bg-black text-white">
						{amountFormatter(wallet.money)}
					</HeaderItem>
				</div>
			</div>

			<Navigation className="max-sm:hidden" />

			<nav className="flex gap-2">
				<AmountToBuy />

				<SettingDialog />
			</nav>
		</header>
	);
};
