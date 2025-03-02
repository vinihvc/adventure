import { AboutDialog } from "@/components/dialog/about";
import { cn } from "@/utils/cn";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer = (props: FooterProps) => {
	const { className, ...rest } = props;

	return (
		<footer
			className={cn(
				"md:absolute md:bottom-0 text-white inset-x-0 p-5",
				className,
			)}
			{...rest}
		>
			<div className="flex justify-center md:justify-end text-sm gap-5">
				<div>
					<AboutDialog />
				</div>

				<a
					href="https://vini.one"
					target="_blank"
					rel="noopener noreferrer nofollow"
				>
					&copy; Vinicius Vicentini
				</a>
			</div>
		</footer>
	);
};
