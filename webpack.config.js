const path = require('path');

module.exports = {
	entry: {
		background: './src/background.js',
		inventoryReports: './src/contentScripts/inventoryReports.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'extension')
	}
};