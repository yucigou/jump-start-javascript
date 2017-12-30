var path = require("path");

module.exports = {
	// entry: "./js/app_modularized.js",
	entry: {
		'002-app_modularized': './js/002-app_modularized.js',
		'003-app_jquery': './js/003-app_jquery.js',
	},
	output: {
		path: path.resolve(__dirname, "./js/bundled"),
		filename: '[name].js'
	}
}