const path = require("path");
const nodeExternals = require('webpack-node-externals');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

module.exports = {
  context: __dirname,
  mode: "development",
  target: "node",
  entry: {
    server: "./server/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "./dist/server"),
  },
  resolve: {
    modules: [
      path.join(__dirname, "server"),
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
  externals: [
    nodeExternals()
  ],
  plugins: [
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
  ]
}
