var path = require('path');
module.exports = {
	entry: "./app/index.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exlude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			}
		]
	}
}