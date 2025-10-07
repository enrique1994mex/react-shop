const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack');
const dotenv = require('dotenv');

// Detectar entorno y cargar el archivo correcto
const envFile = process.env.NODE_ENV === 'production' ? './.env.production' : './.env';
const env = dotenv.config({ path: envFile }).parsed;

module.exports = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			containers: path.resolve(__dirname, 'src/containers/'),
			styles: path.resolve(__dirname, 'src/styles/'),
			icons: path.resolve(__dirname, 'src/assets/icons/'),
			logos: path.resolve(__dirname, 'src/assets/logos/'),
		},
	},
	plugins: [
			new HtmlWebpackPlugin({ template: 'public/index.html' }), 
			new webpack.DefinePlugin({
    		'process.env.API_URL': JSON.stringify(env.API_URL)
  		})
		],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				options: {
					presets: [['@babel/preset-react', { runtime: 'automatic' }]],
				},
			},
			{
				test: /\.(css|s[ac]ss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10000,
						},
					},
				],
			},
			{
				test: /\.(png|jp(e*)g|gif)$/,
				type: 'asset/resource',
			},
		],
	},
	devServer: {
		open: true,
		port: 3000,
		client: {
			overlay: true,
		},
		historyApiFallback: true,
	},
}
