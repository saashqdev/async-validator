var path = require('path'); //Load nodejs path processing module
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //__dirname is a nodejs variable, indicating the directory where the current js file is located
        filename: 'bundle.js',
        library: {
            root: 'AsyncValidator',
            amd: 'async-validator',
            commonjs: 'async-validator',
        },
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/, //The es6 folder in the configuration file directory is used as the js source code folder
                loader: 'babel-loader' ,
            }
        ]
    }
};
