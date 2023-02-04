const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist')
	},
	rules: [
		{
			test: /\.ts?$/,
			exclude: /node_modules/,
			use: ['babel-loadererer', 'ts-loader']
		}
	]
};
