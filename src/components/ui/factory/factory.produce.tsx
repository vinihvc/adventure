import { cn } from "@/utils/cn";
import { Button } from "../button";
import { Image } from "../image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import { useSound } from "@/hooks/use-sound";
import clickSfx from "@/assets/sfx/click.wav";

interface FactoryProduceProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	factoryType: string;
	/**
	 *
	 */
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	factory: any;
	/**
	 *
	 */
	onProduce: () => void;
}

export const FactoryProduce = (props: FactoryProduceProps) => {
	const { factoryType, factory, onProduce, className, ...rest } = props;

	const { play } = useSound(clickSfx);

	const handleProduce = () => {
		play();
		onProduce();
	};

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					colorScheme="white"
					className={cn(
						"group relative shrink-0 size-16 rounded-full border-2 border-black data-[auto='true']:border-green-500 p-0 focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-black",
						className,
					)}
					disabled={factory.amount === 0}
					data-auto={factory.isAuto}
					data-unlocked={factory.isUnlocked}
					onClick={handleProduce}
					{...rest}
				>
					<Image
						src={`/images/${factoryType}.webp`}
						alt={`Produce ${factoryType}`}
						className="rounded-full group-data-[unlocked='false']:grayscale"
					/>

					<span className="sr-only">{`Produce ${factory.type}`}</span>

					<div className="absolute -bottom-3">
						<div className="flex justify-center items-center text-white bg-red-500 rounded-full border-2 border-black w-14 h-6 group-data-[auto='true']:border-green-500">
							<div className="text-xs">{factory.amount || 0}</div>
						</div>
					</div>
				</Button>
			</TooltipTrigger>

			<TooltipContent>{`Produce ${factoryType}`}</TooltipContent>
		</Tooltip>
	);
};
