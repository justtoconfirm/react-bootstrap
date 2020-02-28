const path = require('path')
const env = process.env.NODE_ENV
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  devtool: 'source-map',
  performance: {
    // Display performance warning during development mode
    hints: 'warning'
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // Only apply the loader modules actually needed to improve build performance
        include: path.resolve(__dirname, 'src'),
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
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: {
        source: false
      }
    })
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    // Remove the generated path info in the output bundle to reduce pressure on garbage collection
    pathinfo: false,
    // Set filename of bundle if production or development mode is used
    filename: env === 'production' ? 'js/min/[name].bundle.min.js' : 'js/[name].bundle.js'
  }
}
