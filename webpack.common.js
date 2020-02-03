const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");


const config = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss', '.css']
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'ts-loader']
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-modules-typescript-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]-[hash:base64:5]'
							},
							sourceMap: true
						}
					},
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
}

module.exports = config;