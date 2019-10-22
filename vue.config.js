const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  productionSourceMap: false, // 去除map文件
  lintOnSave: true, //开启eslint
  outputDir: "dist", // 打包名称
  configureWebpack: () => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          // 压缩代码
          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false // 不删除源文件
          }),
          // 去除console.log
          new TerserPlugin({
            terserOptions: {
              compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ["console.log"]
              }
            }
          })
        ]
      };
    }
  }
};
