const {
  override,
  addLessLoader,
  addDecoratorsLegacy,
  disableEsLint,
  useBabelRc,
  addWebpackAlias
} = require("customize-cra");
const path = require("path");

module.exports = override(
  //添加修饰器 根目录下创建.babelrc
  useBabelRc(),
  //禁用默认eslint，使用自定义eslint,根目录下创建.eslintrc.js
  disableEsLint(),
  //在传统模式下添加装饰器。一定要@babel/plugin-proposal-decorators安装
  addDecoratorsLegacy(),
  //添加less-loader配置
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  }),
  //配置简化路径
  addWebpackAlias({
    "@pages": path.resolve(__dirname, "src/pages"),
    "@common": path.resolve(__dirname, "src/components"),
    "@images": path.resolve(__dirname, "src/images"),
    "@api": path.resolve(__dirname, "src/api")
  })
);
