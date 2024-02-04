import { cn } from "@/utils/cn";
import { BadgeDollarSign, LucideProps } from "lucide-react";

export const CoinIcon = (props: LucideProps) => {
	const { className, size = 28, ...rest } = props;

	return (
		<BadgeDollarSign className={cn("text-yellow-500", className)} {...rest} />
	);
};
