const webpack = require("webpack"),
  path = require("path");

module.exports = {
  devServer: {
    hot: true,
    port: 9000
  },
  devtool: "inline-source-map",
  entry: "./index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};