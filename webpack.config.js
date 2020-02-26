const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
    devtool: 'source-map',
    performance: {
        hints: 'warning'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    optimization: {
        // Create the runtime bundle for all chunks containing the bootstrap code for Webpack
        runtimeChunk: {
            name: 'runtime'
        },
        // Allow shared and vendor dependencies to be split into separate bundles
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/i,
                    chunks: 'all',
                    name: 'vendor'
                }
            }
        }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        // Set filename of bundle if production or development mode is used
        filename: env === 'production' ? 'js/min/[name].bundle.min.js' : 'js/[name].bundle.js'
    }
}
