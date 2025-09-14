Command:
1. npm -y init
2. npm i react react-dom
3. npm i webpack webpack-cli
4. npm i babel-loader @babel/preset-react
5. configure webpack in config.webpack.js
6. npm install style-loader css-loader sass-loader sass --save-dev
7. npm install mini-css-extract-plugin --save-dev

webpack.config.js
/////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////
