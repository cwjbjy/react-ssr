const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.base.js");

module.exports = merge(config, {
    mode: "development",
    entry: path.resolve(__dirname, "./src/client/index.js"),
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "public"),
    },
    module: {
      rules: [{
        test: /\.css?$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }]
      }]
    },
  });
