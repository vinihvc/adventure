import * as React from "react";

import { cn } from "@/utils/cn";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
	(props, ref) => {
		const { loading = "lazy", className, ...rest } = props;

		const [isLoaded, setIsLoaded] = React.useState(false);

		return (
			// biome-ignore lint/a11y/useAltText: <explanation>
			<img
				ref={ref}
				loading={loading}
				onLoad={() => setIsLoaded(true)}
				data-loaded={isLoaded}
				className={cn(
					"w-full object-cover data-[loaded='false']:bg-neutral-200 pointer-events-none",
					className,
				)}
				{...rest}
			/>
		);
	},
);
