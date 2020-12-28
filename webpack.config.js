const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}