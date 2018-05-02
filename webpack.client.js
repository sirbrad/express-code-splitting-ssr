const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  context: __dirname,
  mode: "development",
  target: "web",
  entry: {
    main: "./client/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "./dist/client"),
    publicPath: "/client/"
  },
  resolve: {
    modules: [
      path.join(__dirname, "client"),
      "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  externals: {
    crypto: "null"
  },
  plugins: [
    new ManifestPlugin({
      fileName: path.resolve(__dirname, './dist/manifest.json')
    }),
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendors",
        chunks: "all"
        }
      }
    }
  },
}
