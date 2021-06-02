const path = require('path');
const RemoveCommentsPlugin = require('./remove-comments-plugins');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry:{
    main:'./src/app.js',
  },
  devServer:{
    contentBase:path.resolve(__dirname,'./dist'),
    compress: true,
    port: 9000,
    hot:true,
    watchContentBase: true,
  },
  mode:'development',
  output:{
    filename: '[name].[hash:8].js',
    path:path.resolve(__dirname, './dist')
  },
  devtool:'cheap-eval-source-map',
  plugins:[
    new HtmlWebpackPlugin({
      title: 'main',
      filename: 'index.html',
      chunks: ['main'],
      template: './src/index.html',
     
    }),
    new HtmlWebpackPlugin({
      title: 'about',
      filename: 'about.html',
      chunks: ['main'],
      template: './src/about.html',
     
    }),
    //new RemoveCommentsPlugin()
    new webpack.DefinePlugin({
      'process.env.version': JSON.stringify('5fa3b9')
    })
  ]
  
}