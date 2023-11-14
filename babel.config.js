module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./fonte"],
					alias: {
						"@comp": "./fonte/componentes",
						"@esp": "./assets",
					},
				},
			],
		],
	};
};
