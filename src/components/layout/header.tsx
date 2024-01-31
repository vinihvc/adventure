import { useAtom } from "jotai";
import { walletAtom } from "@/store/wallet";
import { SettingDialog } from "@/components/dialog/settings";
import { AmountToBuy } from "./amount";
import { amountFormatter } from "@/utils/formatters";
import { BadgeDollarSign } from "lucide-react";

export const Header = () => {
	const [wallet] = useAtom(walletAtom);

	return (
		<header className="h-[90px] bg-neutral-900 container flex justify-between items-center px-5">
			<div className="flex items-center space-x-5">
				<div className="flex space-x-5">
					<div className="flex justify-between items-center w-40 text-sm h-12 px-4 rounded-lg whitespace-nowrap bg-lime-300 text-lime-950">
						<BadgeDollarSign size={32} />
						<div className="text-xl font-bold">
							{amountFormatter(wallet.money)}
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<AmountToBuy />

				<SettingDialog />
			</div>
		</header>
	);
};
