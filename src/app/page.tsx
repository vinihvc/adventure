import { Factory } from "@/components/factory";
import { FACTORIES, FactoryType } from "@/game-data/factories";
import { RootLayout } from "./layout";

export const HomePage = () => {
	return (
		<RootLayout>
			<div className="w-full items-center flex">
				<div className="grid grid-cols-2 gap-10 w-full p-5">
					{Object.keys(FACTORIES).map((factory) => (
						<Factory key={factory} type={factory as FactoryType} />
					))}
				</div>
			</div>
		</RootLayout>
	);
};
