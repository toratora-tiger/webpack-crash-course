const path = require('path')

const outputpath = path.resolve(__dirname, 'dist')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputpath
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: outputpath
    }
}