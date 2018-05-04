const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

const proxyLog = (msg) => console.log('\x1b[36m%s\x1b[0m', '[proxy]', msg);

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
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    proxy: [ // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ['/'],  // can have multiple
        target: 'http://localhost:3000', // server and port to redirect to
        secure: false,
      },
    ],
    before(app) {
      const net = require('net');
      const opts = { port: 3000 };
      const socket = net.connect(opts);
      let connected = false;

      socket.on('connect', () => {
        proxyLog('connectd');
        connected = true;
      })

      socket.on('error', (err) => proxyLog('Error: ' + err.message))

      socket.on('close', (err) => {
        proxyLog('closed');
        connected = false;

        setTimeout(() => {
          proxyLog('connecting...');
          socket.connect(opts);
        }, 1000);
      });

      app.use((req, res, next) => {
        if (connected) {
          next();
        } else {
          socket.once('connect', () => next());
        }
      });
    }
  },
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
