const ExtractTextPlugin = require('extract-text-webpack-plugin');
const scssExtract = new ExtractTextPlugin('[name]-[hash].css');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader", "url-loader"],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(gif|jpg|pngs)$/,
        loader: 'url-loader?limit=10000',
        include: path.resolve (__dirname, '../')
      },
      {
        test: /\.css$/,
        use: scssExtract.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(woff2?|ttf|svg|eot|jpg|png|gif)?(\?.+)?$/,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
      },
    ]
  },
};
