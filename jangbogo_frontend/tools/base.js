const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: {
    'vendor': ['react', 'react-dom'], 
    'app': path.resolve(__dirname, '..', 'src', 'index.tsx'), 
  }, 
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial', 
          name: 'vendor', 
          enforce: true, 
        }, 
      },
    },
  },
  output: {
    filename: '[name].[chunkhash].js', 
    chunkFilename: '[name].[chunkhash].chunk.js', 
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css'], 
    alias: {
      '@': path.resolve(__dirname, '..', 'src'), 
      'components': path.resolve(__dirname, '..', 'src', 'components'), 
      'containers': path.resolve(__dirname, '..', 'src', 'containers'), 
      'views': path.resolve(__dirname, '..', 'src', 'views'), 
    }, 
  }, 
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, 
        exclude: /node_modules/, 
        use: [
          {
            loader: 'ts-loader', 
          },
        ],
      },
      {
        test: /\.(css$)/, 
        use: [
         {
          loader: 'style-loader'
         },
         {
          loader: 'css-loader', 
          options: {
            sourceMap: true, 
          }
         }
        ], 
      }, 
      {
        test: /\.(scss|sass)$/, 
        exclude: /node_modules/,
        use: [ 
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader' 
          },
        ], 
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', 
      filename: './index.html', 
      // favicon: './public/favicon.ico', 
    }), 
    new MiniCssExtractPlugin({
      filename: '[name].css', 
      chunkFilename: "[id].css", 
    })
  ], 
}