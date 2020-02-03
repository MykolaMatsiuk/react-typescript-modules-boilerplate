const merge = require('webpack-merge');
const base = require('./webpack.common');


const config = {
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
}

module.exports = merge(base, config);