import * as React from "react";

import { cn } from "@/utils/cn";
import { Image } from "./image";
import { Check } from "lucide-react";
import { Button } from "./button";

interface CardProps extends React.ImgHTMLAttributes<HTMLDivElement> {
	factoryType: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	factory: any;
	/**
	 * Icon to display on the card
	 */
	icon: React.ElementType;
	/**
	 * Image to display on the card
	 */
	image: string;
	/**
	 * Triggered when the card is upgraded
	 */
	onUpgrade?: () => void;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
	(props, ref) => {
		const { factoryType, factory, icon, image, className, onUpgrade, ...rest } =
			props;

		return (
			<div
				ref={ref}
				data-auto={factory.isAuto}
				className={cn("relative group h-auto block border-4 border-black p-0")}
				{...rest}
			>
				<div className="border-2 border-white">
					<Image src={image} alt={factoryType} className="aspect-square" />
				</div>

				<div className="absolute top-1 right-1">
					<div className="bg-black text-white size-7 flex items-center justify-center">
						{React.createElement(icon, { className: "size-5" })}
					</div>
				</div>

				<div className="absolute top-1 left-1">
					<div className="bg-black text-white size-7 p-0.5 flex items-center justify-center">
						<Image
							src={`/images/factories/${factoryType}.webp`}
							className="size-7 object-contain aspect-square"
						/>
					</div>
				</div>

				<Button
					type="button"
					size="xs"
					colorScheme="black"
					disabled={factory.isAuto}
					className="text-xs uppercase border-2 border-t-0"
					isFullWidth
					onClick={onUpgrade}
				>
					<span className="group-data-[auto='true']:opacity-0">Research</span>

					<span className="absolute group-data-[auto='false']:hidden">
						<Check className="size-5" />
					</span>
				</Button>
			</div>
		);
	},
);
