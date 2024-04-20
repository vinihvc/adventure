import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "64rem", // 1024px
			},
		},
		extend: {
			fontFamily: {
				sans: ["Radio Canada", ...fontFamily.sans],
			},

			keyframes: {
				progressbar: {
					"0%": { width: "0%" },
					"100%": { width: "100%" },
				},
			},
			animation: {
				progressbar: "progressbar linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
