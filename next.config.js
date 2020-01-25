const withCSS = require("@zeit/next-css");

module.exports = withCSS({
	webpack: config => {
		config.module.rules.push({
			test: /\.(js|jsx|tsx|ts)$/,
			exclude: /node_modules/,
			loader: "eslint-loader",
			options: {
				emitError: true
			}
		});

		return config;
	}
});
