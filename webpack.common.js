const path = require('path');

module.exports = {
    entry: {
        main: './src/js/site.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].min.js',
        chunkFilename: '[name]-[contenthash].min.js',
        clean: true,
    },
    externals: {
        jquery: 'jQuery',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                include: path.resolve(__dirname, 'src/js'),
                use: [
                    {
                        loader: 'babel-loader',

                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: 'defaults' }],
                            ],
                            plugins: ['@babel/transform-runtime'],
                        },
                    },
                ],
            },
        ],
    },
};
