const isProduction = function(mode) {
  return mode === 'production' ? true : false;
};

module.exports = function({ mode, MiniCssExtractPlugin, autoprefixer }) {
  const rules = [
    { test: /\.tsx?$/, loader: 'ts-loader' },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }]
          ]
        }
      }
    },
    {
      test: /\.css/,
      use: [
        isProduction(mode)
          ? MiniCssExtractPlugin.loader
          : { loader: 'style-loader' },
        { loader: 'css-loader' },
        {
          loader: 'postcss-loader',
          options: { plugins: [autoprefixer('last 100 versions')] }
        }
      ]
    }
  ];

  return rules;
};
