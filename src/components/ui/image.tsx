import * as React from "react";

import { cn } from "@/utils/cn";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
	(props, ref) => {
		const { loading = "lazy", className, ...rest } = props;

		const [isLoaded, setIsLoaded] = React.useState(false);

		const onLoad = React.useCallback(() => {
			setIsLoaded(true);
		}, []);

		return (
			// biome-ignore lint/a11y/useAltText: <explanation>
			<img
				ref={ref}
				loading={loading}
				onLoad={onLoad}
				data-loaded={isLoaded}
				className={cn(
					"bg-neutral-200 w-full object-cover data-[loaded='false']:bg-neutral-200 pointer-events-none",
					className,
				)}
				{...rest}
			/>
		);
	},
);