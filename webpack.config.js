const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: './src/admin/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-react', { runtime: "automatic" }]]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i, // 
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'admin.css',
    }),
  ],
};
