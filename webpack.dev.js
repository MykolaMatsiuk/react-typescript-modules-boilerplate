const merge = require('webpack-merge');
const base = require('./webpack.common');


const config = {
	devServer: {
		port: 3000,
		contentBase: './dist'
	}
}

module.exports = merge(base, config);