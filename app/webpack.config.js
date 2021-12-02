import path from 'path';

const webpackConfig = {
	mode: 'production',
	entry: {
		burger: './app/js/burgerMenu.js',
		index: './app/js/index.js',
		catalog: './app/js/pages/catalog.js',
		product: './app/js/pages/product-page.js',
		cart: './app/js/pages/cart.js',
	},
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve('dist'),
	},
	optimization: {
		minimize: true,
	},
	experiments: {
		topLevelAwait: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};

export default webpackConfig;
