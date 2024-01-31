import { GameBackground } from "@/components/layout/game/background";
import { GameForeground } from "@/components/layout/game/foreground";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "next-themes";
interface RootLayoutProps {
	children: React.ReactNode;
}

export const RootLayout = (props: RootLayoutProps) => {
	const { children } = props;

	return (
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
	);
};
