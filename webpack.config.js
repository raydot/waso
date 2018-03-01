const path = require('path');

//CSS
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
	    'jquery',
		path.resolve(__dirname, "app/index.js")
	],
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
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	],
	externals: {
		jquery: 'jQuery'
	},
	devServer: {
		port: 3001,
		contentBase: path.resolve(__dirname, "build"),
		inline: true,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	mode: 'development'
}