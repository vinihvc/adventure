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
				"flex justify-between items-center w-32 text-sm h-11 px-4 whitespace-nowrap",
				className,
			)}
			{...rest}
		>
			{icon && React.createElement(icon)}

			<div className="text-xl font-bold">{children}</div>
		</div>
	);
};
