import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Image } from "../ui/image";

export const AboutDialog = () => {
	return (
		<Dialog>
			<DialogTrigger className="underline-offset-4 hover:underline outline-none focus-visible:underline">
				About
			</DialogTrigger>

			<DialogContent>
				<div className="absolute -top-28 md:left-2 max-sm:inset-x-0 max-sm:flex max-sm:justify-center">
					<Image
						src="/images/msc/about.webp"
						className="size-40 rounded-full border-2 border-black drop-shadow-md aspect-square"
					/>
				</div>

				<DialogHeader className="mt-12 sm:mt-10">
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

				<DialogFooter>
					<DialogClose asChild>
						<Button className="shadow-md">Close About</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
