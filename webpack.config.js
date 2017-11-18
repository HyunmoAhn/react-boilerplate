const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
	devServer: {
		contentBase: 'build',
		disableHostCheck: true, // do not use production mode
		historyApiFallback: true,
		hot: true,
		host: '0.0.0.0',
		port: 4000,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					'react-hot-loader',
					{
						loader: 'babel-loader',
					}
				]
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'index.html'),
			inject: 'body',
		}),
	],
	resolve: {
		alias: {
			api: path.resolve(__dirname, 'src/api'),
			assets: path.resolve(__dirname, 'src/assets'),
			constants: path.resolve(__dirname, 'src/constants'),
			components: path.resolve(__dirname, 'src/components'),
			containers: path.resolve(__dirname, 'src/containers'),
			routes: path.resolve(__dirname, 'src/routes'),
			store: path.resolve(__dirname, 'src/store'),
			utils: path.resolve(__dirname, 'src/utils'),
		},
		extensions: ['.js', '.jsx'],
	},
};