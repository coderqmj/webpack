const path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: "boundle.js",
    path: path.resolve(__dirname, "./build"),
    // assetModuleFilename: "img/[name].[hash:6].[ext]" 写死了 不大行
  },
  module: {
    rules: [
      // 使用正则表达式
      {
        test: /\.css/,  // 匹配资源
        // loader: "css-loader",  一般不这样使用，这是下面的简写
        use: [
          'style-loader', 
          'css-loader',
          {
            loader: "postcss-loader", // 查询浏览器
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer"), // 添加前缀插件
                  require('postcss-preset-env') // 使用这个更多，可以转换新特性
                ]
              }
            }
          } 
        ]
      },
      {
        test: /\.less/,  // 匹配less文件进行处理
        use: [
          "style-loader",  // 从下往上处理，less转css在进行解析插入
          "css-loader",
          "less-loader"
        ]
      },
      // file-loader 和 url-loader的对其他资源加载代码配置
      // {
      //   test:/\.(png|jpg|jpeg|gif|svg)$/ ,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: "[name].[hash:6].[ext]",
      //         outputPath: "img"
      //       }
      //     }
      //   ]
      // },
      {
        test:/\.(png|jpg|jpeg|gif|svg)$/ ,
        // type: "asset/resource",
        // type: "asset/inline", base64打包
        type: "asset",  // 二选一打包 
        generator: {
          filename: "img/[name].[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 *1024
          }
        }
      },
    ]
  }
}