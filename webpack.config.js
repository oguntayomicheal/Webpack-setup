const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',


  devServer: {
    static: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  module: {
    rules: [
      {
        test: /\.filename$/,
        use: ["loader-b", "loader-a"]
      }
    ]
  },

  optimization: {
    runtimeChunk: 'single',
  },
};

