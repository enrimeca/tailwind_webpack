const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const glob = require('glob');
const PurgecssPlugin = require('purgecss-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@data': path.resolve(__dirname, 'src/data/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@elements': path.resolve(__dirname, 'src/elements/'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@images': path.resolve(__dirname, 'src/assets/images')
    }
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css'
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images"
        }
      ]      
    }),
    new Dotenv(),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  }
}