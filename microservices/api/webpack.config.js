const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

module.exports = {
    mode: 'production',
    entry: slsw.lib.entries,
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '.webpack'),
        libraryExport: 'default',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            },
        ],
    },
    resolve: {
        extensions: ['.mjs', '.json', '.ts'],
    },
    optimization: {
        usedExports: true,
        minimize: false,
    },
    externals: [nodeExternals()],
    target: 'node'
};
