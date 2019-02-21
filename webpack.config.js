const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry:  {
        main: './src/js/main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'src/js'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
};
