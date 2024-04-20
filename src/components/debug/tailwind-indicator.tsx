export const TailwindIndicator = () => {
	if (process.env.NODE_ENV === "production") return null;

	return (
		<div className="fixed bottom-5 left-5 z-50">
			<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white px-4 py-2 font-semibold text-xs text-black">
				<div className="block sm:hidden">XS</div>
				<div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
					SM
				</div>
				<div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">MD</div>
				<div className="hidden lg:block xl:hidden 2xl:hidden">LG</div>
				<div className="hidden xl:block 2xl:hidden">XL</div>
				<div className="hidden 2xl:block">2XL</div>
			</div>
		</div>
	);
};
