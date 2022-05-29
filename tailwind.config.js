module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
	},

	daisyui: {
		themes: [
			{
				projecttheme: {
					primary: "#a991f7",
					secondary: "#f6d860",
					accent: "#37cdbe",
					neutral: "#3d4451",
					"base-100": "#ffffff",
				},
			},

			"cupcake",
		],
	},
	plugins: [require("daisyui")],
};
