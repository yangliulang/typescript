const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProduction = function(mode) {
  return mode === 'production' ? true : false;
};
module.exports = function({
  mode,
  MiniCssExtractPlugin,
  OptimizeCssAssetsPlugin
}) {
  let plugins = [];
  plugins.push(
    ...[
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        chunks: ['index'],
        hash: true,
        minify: isProduction(mode)
          ? {
              collapseWhitespace: true,
              removeComments: true
            }
          : {}
      })
    ]
  );
  //如果是生产环境
  if (isProduction(mode)) {
    plugins.push(
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          safe: true,
          discardComments: { removeAll: true }
        },
        canPrint: true
      }),
      new MiniCssExtractPlugin({
        filename: 'styles/[name].css'
      })
    );
  } else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  return plugins;
};
