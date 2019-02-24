const path = require('path');
const webpackPlugins = require('./webpack.plugins.js');
const webpackRules = require('./webpack.rules.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const isProduction = function(mode) {
  return mode === 'production' ? true : false;
};
module.exports = env => {
  return {
    mode: env.mode,
    context: path.resolve(__dirname, './src'),
    entry: {
      polyfill: '@babel/polyfill',
      index: './index.js'
    },
    devtool: 'inline-source-map',
    module: {
      rules: webpackRules({
        mode: env.mode,
        MiniCssExtractPlugin,
        autoprefixer
      })
    },
    // 此处添加配置

    devServer: isProduction(env.mode)
      ? {}
      : {
          contentBase: './dist',
          port: 9999,
          hot: true,
          open: true,
          overlay: true
        },
    plugins: webpackPlugins({
      mode: env.mode,
      MiniCssExtractPlugin,
      OptimizeCssAssetsPlugin
    }),
    output: {
      filename: 'js/[name]-bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
};
