const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env, argv) => ({
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle-[hash].js',
    publicPath: argv.mode === 'production' ? '/project-react-1-sogoagain' : '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new Dotenv({
      path: argv.mode === 'production'
        ? path.resolve(__dirname, './config/.env.production')
        : path.resolve(__dirname, './config/.env.development'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', { loader: 'css-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
});
