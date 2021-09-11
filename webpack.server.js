const path = require("path"); //node的path模块
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const config = require("./webpack.base.js");

module.exports = merge(config, {
  target: "node",
  mode: "development", //开发模式
  entry: "./src/server/index.js", //入口
  output: {
    //打包出口
    filename: "server.js", //打包后的文件名
    path: path.resolve(__dirname, "build"), //存放到根目录的build文件夹
  },
  externals: [nodeExternals()], //保持node中require的引用方式
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
});
