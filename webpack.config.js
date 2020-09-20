const path = require('path')

const outputpath = path.resolve(__dirname, 'dist')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputpath
    }
}