const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: './dist',
    hot: true,
    port: 3434,
    compress: true,
    allowedHosts: ['danielmattox.com']
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = (env, argv) => {
//   const isProduction = argv.mode === 'production';

//   const config = {
//     entry: './src/index.js',
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: 'bundle.js',
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//             },
//           },
//         },
//         {
//             test: /\.scss$/,
//             use: [
//             isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
//             'css-loader',
//             'sass-loader',
//           ],
//         },
//       ],
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: './src/index.html',
//       }),
//       new MiniCssExtractPlugin({
//         filename: '[name].css',
//       }),
//     ],
//     devServer: {
//       static: path.join(__dirname, 'dist'),
//       compress: true,
//       port: 9000,
//       hot: true,
//     },
//   };

//   return config;
// };
