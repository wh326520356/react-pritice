const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'inline-source-map',
	entry: {
		index: './src/main.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [{
				test: /\.js/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},{
				test: /\.css/,
				loader: 'style-loader!css-loader'
			},{
				test: /\.less/,
				loader: 'style-loader!css-loader!less-loader'
			}, {
				test: /\.(png|svg|jpg|gif)$/,	
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'img/[name].[hash:7].[ext]'
				}
			}, {
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './build',
		port: 8900,
		inline: true,
		hot: true
	},
	plugins: [
		new ExtractTextPlugin("styles.less"),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlPlugin({
			template: './src/index.html'
		})
	]
}
