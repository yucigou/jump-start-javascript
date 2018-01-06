var path = require("path");

module.exports = {
	// entry: "./js/app_modularized.js",
	entry: {
		'002-app_modularized': './app/assets/js/002-app_modularized.js',
		'003-app_jquery': './app/assets/js/003-app_jquery.js',
	},
	output: {
		path: path.resolve(__dirname, "./app/assets/bundled/js"),
		filename: '[name].js'
	}
}