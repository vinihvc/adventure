// import useSound from 'use-sound'

import { Button } from "../ui/button";

import { FactoryType } from "../../config/factories";
import { cn } from "../../utils/cn";
// import autoSfx from '@/assets/sfx/auto.wav'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

export const ManagersDialog = () => {
	// const [play] = useSound(autoSfx, { soundEnabled: settings.sfx })

	const handleAutomatic = (type: FactoryType) => {
		// play()
		// dispatch(automatic(type))
	};

	// const potato = factories.find((factory) => factory.type === 'potato')
	// const land = factories.find((factory) => factory.type === 'land')
	// const ore = factories.find((factory) => factory.type === 'ore')
	// const weapon = factories.find((factory) => factory.type === 'weapon')
	// const medicine = factories.find((factory) => factory.type === 'medicine')

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full" size="sm">
					Managers
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Managers</DialogTitle>
					<DialogDescription>
						Hire managers to automate your factories.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-5">
					<Button
						className={
							cn("w-full")
							// potato!.auto &&
							//   'disabled:disabled:bg-green-600 hover:disabled:bg-green-600',
						}
						onClick={() => handleAutomatic("potato")}
						// disabled={potato!.auto || potato!.autoCost > balance.current}
					>
						<span> Auto Potato</span>

						{/* <span>
              {potato?.auto ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${potato?.autoCost}`
              )}
            </span> */}
					</Button>

					<Button
						className={
							cn("w-full")
							// land!.auto &&
							//   'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
						}
						onClick={() => handleAutomatic("land")}
						// disabled={land!.auto || land!.autoCost > balance.current}
					>
						<span> Auto Land</span>

						{/* <span>
              {land?.auto ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${land?.autoCost}`
              )}
            </span> */}
					</Button>

					<Button
						className={
							cn("w-full")
							// ore!.auto &&
							//   'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
						}
						onClick={() => handleAutomatic("ore")}
						// disabled={ore!.auto || ore!.autoCost > balance.current}
					>
						<span> Auto Ore</span>

						{/* <span>
              {ore?.auto ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${ore?.autoCost}`
              )}
            </span> */}
					</Button>

					<Button
						className={
							cn("w-full")
							// weapon!.auto &&
							//   'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
						}
						onClick={() => handleAutomatic("weapon")}
						// disabled={weapon!.auto || weapon!.autoCost > balance.current}
					>
						<span> Auto Weapon</span>

						{/* <span>
              {weapon?.auto ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${weapon?.autoCost}`
              )}
            </span> */}
					</Button>

					<Button
						className={
							cn("w-full")
							// medicine!.auto &&
							//   'disabled:disabled:bg-green-600 disabled:hover:bg-green-600',
						}
						onClick={() => handleAutomatic("medicine")}
						// disabled={medicine!.auto || medicine!.autoCost > balance.current}
					>
						<span> Auto Medicine</span>

						{/* <span>
              {medicine?.auto ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                `$ ${medicine?.autoCost}`
              )}
            </span> */}
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
