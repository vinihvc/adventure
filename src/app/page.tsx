import { Factory } from "@/components/ui/factory";
import { FACTORIES, type FactoryType } from "@/data/factories";
import { GameBackground } from "@/components/layout/background";
import { Header } from "@/components/layout/header";
import { Provider as JotaiProvider } from "jotai";
import { store } from "@/store";

export const HomePage = () => {
	return (
		<JotaiProvider store={store}>
			<GameBackground>
				<Header />

				<div className="flex">
					<div className="w-full items-center flex">
						<div className="grid grid-cols-2 gap-10 w-full p-5">
							{Object.keys(FACTORIES).map((factory) => (
								<Factory key={factory} type={factory as FactoryType} />
							))}
						</div>
					</div>
				</div>
			</GameBackground>
		</JotaiProvider>
	);
};
