const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
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
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        // Set filename of bundle if production or development mode is used
        filename: env === 'production' ? 'js/min/[name].bundle.min.js' : 'js/[name].bundle.js'
    }
}
