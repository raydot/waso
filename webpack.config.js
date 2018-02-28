const path = require('path');

module.exports = {
	//entry: ['./app/index.js'],
	entry: [path.resolve(__dirname, "app/index.js")],
	output: {
		path: path.resolve(__dirname, "build"),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: path.resolve(__dirname, "node_modules")
			}
		]
	},
	devServer: {
		port: 3001,
		contentBase: path.resolve(__dirname, "build"),
		inline: true
	},
	mode: 'development'
}