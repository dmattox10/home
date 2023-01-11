const path = require('path');

 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {

   entry: './src/index.js',
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
      },
      {
      test: /\.html$/i,
      loader: "html-loader",
    },

    ]
   },
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
]
};