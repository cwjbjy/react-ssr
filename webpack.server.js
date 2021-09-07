const path = require('path')    //node的path模块
const nodeExternals = require('webpack-node-externals')
 
/* 知乎有详解 */

module.exports = {
    target:'node',
    mode:'development',           //开发模式
    entry:'./src/app.js',             //入口
    output: {                     //打包出口
        filename:'server.js',     //打包后的文件名
        path:path.resolve(__dirname,'build')    //存放到根目录的build文件夹
    },
    externals: [nodeExternals()],  //保持node中require的引用方式
    module: {
        rules: [{                  //打包规则
           test:   /\.js?$/,       //对所有js文件进行打包
           loader:'babel-loader',  //使用babel-loader进行打包
           exclude: /node_modules/,//不打包node_modules中的js文件
           options: {
               presets: ["@babel/preset-env","@babel/preset-react"],
               plugins: ["@babel/plugin-transform-runtime"]
           }
       }]
    }
}