const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const os = require('os');
const baseConfig = require('./webpack.base.config');
const { resolvePath } = require('./utils/index');
const profile = require('../profile.config');
const config = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: resolvePath(`${profile.outputDir}`),
    publicPath: profile.publicPath,
  },
  devtool: 'eval-source-map',
  devServer: {
    ...profile.devServer,
  },
  cache: {
    type: 'memory',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        memoryLimit: 4096,
        // 将async设为false，可以阻止Webpack的emit以等待类型检查器/linter，并向Webpack的编译添加错误。
        async: false,
      },
    }),
    new ESLintPlugin({
      fix: true,
      context: resolvePath('src'),
      lintDirtyModulesOnly: true,
      extensions: ['.ts', '.tsx'],
      threads: os.cpus().length,
    }),
  ],
};

module.exports = merge(baseConfig, config);
