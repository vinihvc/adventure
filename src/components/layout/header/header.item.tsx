import { cn } from "@/utils/cn";
import React from "react";

interface HeaderItemProps extends React.HTMLAttributes<HTMLDivElement> {
	icon?: React.ElementType;
}

export const HeaderItem = (props: HeaderItemProps) => {
	const { icon, className, children, ...rest } = props;

	return (
		<div
			className={cn(
				"flex justify-between items-center w-40 text-sm h-12 px-4 rounded-lg whitespace-nowrap bg-primary text-primary-foreground",
				className,
			)}
			{...rest}
		>
			{icon && React.createElement(icon)}

			<div className="text-xl font-bold">{children}</div>
		</div>
	);
};
