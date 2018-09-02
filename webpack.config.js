const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/thought.js",
  mode: "development",
  module: {
    rules: [{
      test: /\.js$/,
      use: { loader: "babel-loader" },
      exclude: /(node_modules)/
    }]
  },
  output: {
    filename: "thought.js",
    libraryTarget: "umd",
    globalObject: "this",
    path: path.resolve(__dirname, "dist")
  },
  target: "node",
};