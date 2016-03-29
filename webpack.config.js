var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: __dirname + '/',
    output: {
        path: __dirname + '/dist',
        filename: 'is-thirteen.min.js',
        sourceMapFilename: 'is-thirteen.map'
    },
    module: {
        loaders: []
    },
    resolve: {
        modulesDirectories: ['.'],
        alias: {}
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
};
