import { GameBackground } from "@/components/layout/game/background";
import { GameForeground } from "@/components/layout/game/foreground";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header/header";
import { ThemeProvider } from "next-themes";
import { Provider as JotaiProvider } from "jotai";
import { store } from "@/store";

interface RootLayoutProps {
	children: React.ReactNode;
}

export const RootLayout = (props: RootLayoutProps) => {
	const { children } = props;

	return (
		<JotaiProvider store={store}>
			<ThemeProvider attribute="class" defaultTheme="system">
				<GameBackground>
					<GameForeground className="flex flex-col">
						<Header />

						<div className="flex">
							<Sidebar />

							{children}
						</div>
					</GameForeground>
				</GameBackground>
			</ThemeProvider>
		</JotaiProvider>
	);
};
