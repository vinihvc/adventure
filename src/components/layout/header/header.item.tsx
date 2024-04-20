import * as React from "react";

import { cn } from "@/utils/cn";

interface HeaderItemProps extends React.HTMLAttributes<HTMLDivElement> {
	icon?: React.ElementType;
}

export const HeaderItem = (props: HeaderItemProps) => {
	const { icon, className, children, ...rest } = props;

	return (
		<div
			className={cn(
				"flex justify-between items-center w-36 text-sm h-11 px-4 whitespace-nowrap gap-2",
				className,
			)}
			{...rest}
		>
			<span className="shrink-0">{icon && React.createElement(icon)}</span>

			<span className="text-lg font-bold">{children}</span>
		</div>
	);
};
