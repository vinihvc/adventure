import { Helmet } from "react-helmet";

import { Factory } from "../components/factory";
import { FACTORIES, FactoryType } from "../config/factories";
import { RootLayout } from "./layout";

export const HomePage = () => {
	return (
		<>
			<Helmet title={`$ ${new Intl.NumberFormat().format(1)}`} />

			<RootLayout>
				<div className="w-full items-center flex">
					<div className="grid grid-cols-2 gap-10 w-full p-5">
						{Object.keys(FACTORIES).map((factory) => (
							<Factory key={factory} type={factory as FactoryType} />
						))}
					</div>
				</div>
			</RootLayout>
		</>
	);
};
