module.exports = {
    entry: __dirname + '/src/client/index.js',
    output: {
        path: __dirname,
        filename: 'src/dist/bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                "presets": [
                    "es2015",
                    "stage-1",
                    "react",
                ]
            }
        }]
    }
};
