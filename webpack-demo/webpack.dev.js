const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map', // Показывает ошибки в твоих файлах, а не в бандле
});