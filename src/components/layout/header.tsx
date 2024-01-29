import { useAtom } from "jotai";
import { walletAtom } from "../../store/wallet";
import { SettingDialog } from "../dialog/settings";
import { AmountToBuy } from "./amount";

export const Header = () => {
	const [wallet] = useAtom(walletAtom);

	return (
		<header className="flex items-center justify-between bg-background px-5 h-16 drop-shadow">
			<div className="flex items-center gap-5">
				<div className="text-xl font-black">
					{Intl.NumberFormat("en-US", {
						style: "currency",
						currency: "USD",
					}).format(wallet.money)}
				</div>
			</div>

			<div className="flex items-center gap-2">
				<AmountToBuy />

				<SettingDialog />
			</div>
		</header>
	);
};
