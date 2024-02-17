import { useWallet } from "@/store/atoms/wallet";
import { SettingDialog } from "@/components/dialog/settings";
import { AmountToBuy } from "../amount";
import { amountFormatter } from "@/utils/formatters";
import { HeaderItem } from "./header.item";
import { CoinIcon } from "@/components/icon/coin";

export const Header = () => {
	const wallet = useWallet();

	return (
		<header className="h-[90px] bg-card container flex justify-between items-center px-5">
			<div className="flex items-center space-x-5">
				<div className="flex space-x-5">
					<HeaderItem icon={CoinIcon}>
						{amountFormatter(wallet.money)}
					</HeaderItem>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<AmountToBuy />

				<SettingDialog />
			</div>
		</header>
	);
};
