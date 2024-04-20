import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export const AboutDialog = () => {
	return (
		<Dialog>
			<DialogTrigger className="underline-offset-4 hover:underline">
				About
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>About this game</DialogTitle>
					<DialogDescription>
						Adventure game is a idle game where you can build your own town,
						generate resources and upgrade your buildings.
					</DialogDescription>
				</DialogHeader>

				<div className="text-sm space-y-2">
					<p className="font-semibold">Tecnologies</p>

					<ul className="list-disc pl-4">
						<li>
							Made with{" "}
							<a
								href="https://react.dev/"
								className="underline hover:text-red-500"
								target="_blank"
								rel="noopener noreferrer nofollow"
							>
								React
							</a>
						</li>
						<li>
							Styling with{" "}
							<a
								href="https://tailwindcss.com/"
								className="underline hover:text-red-500"
								target="_blank"
								rel="noopener noreferrer nofollow"
							>
								Tailwind
							</a>{" "}
						</li>
						<li>
							Components with{" "}
							<a
								href="https://www.radix-ui.com/"
								className="underline hover:text-red-500"
								target="_blank"
								rel="noopener noreferrer nofollow"
							>
								Radix UI
							</a>{" "}
						</li>
						<li>
							Icons by{" "}
							<a
								href="https://lucide.dev/"
								className="underline hover:text-red-500"
								target="_blank"
								rel="noopener noreferrer nofollow"
							>
								Lucide
							</a>{" "}
						</li>
						<li>
							State management with{" "}
							<a
								href="https://jotai.org/"
								className="underline hover:text-red-500"
								target="_blank"
								rel="noopener noreferrer nofollow"
							>
								Jotai
							</a>{" "}
						</li>
						<li>
							Images by{" "}
							<a
								href="https://www.adobe.com/products/firefly.html"
								className="underline hover:text-red-500"
								target="_blank"
								rel="noopener noreferrer nofollow"
							>
								Adobe Firefly
							</a>{" "}
						</li>
					</ul>
				</div>
			</DialogContent>
		</Dialog>
	);
};
