const path = require('path');
module.exports = {
    entry: './src/index.ts',
    //devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js',],
    },
    output: {
        library: ['THEOplayer', 'cmcd',],
        libraryTarget: 'umd',
        filename: 'theoplayer-cmcd.js',
        path: path.resolve(__dirname, 'dist'),
    },
};