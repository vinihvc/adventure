// import useSound from 'use-sound'

import { Button } from "@/components/ui/button";

// import { FactoryType } from "@/config/factories";
// import autoSfx from '@/assets/sfx/auto.wav'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export const InvestorsDialog = () => {
	// const [play] = useSound(autoSfx, { soundEnabled: settings.sfx })

	// const handleAutomatic = (type: FactoryType) => {
	// 	// play()
	// 	// dispatch(automatic(type))
	// };

	// const potato = factories.find((factory) => factory.type === 'potato')
	// const land = factories.find((factory) => factory.type === 'land')
	// const ore = factories.find((factory) => factory.type === 'ore')
	// const weapon = factories.find((factory) => factory.type === 'weapon')
	// const medicine = factories.find((factory) => factory.type === 'medicine')

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full" size="sm">
					Investors
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Investors</DialogTitle>
					<DialogDescription>
						Investors are a great way to earn money passively.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
