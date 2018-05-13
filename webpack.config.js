/**
 * Created by ofersarid on 09/05/2018.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');

const scssExtract = new ExtractTextPlugin('[name]-[hash].css');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const resolveCopyConfig = env => {
  const copyConfig = [{ from: '**/*.*', to: 'assets', context: './assets' }];
  if (env.micro) {
    copyConfig.push({ from: '**/*.css', to: 'css', context: './src' });
  }
  return copyConfig;
};

const resolvePlugins = (env) => {
  const plugins = [
    scssExtract,
  ];
  if (env.prod) {
    plugins.concat([
      new CopyWebpackPlugin(resolveCopyConfig(env)),
      new UglifyJsPlugin(),
    ]);
  }
  if (!env.micro) {
    plugins.push(new HtmlWebpackPlugin({ template: './src/index.html' }));
  }
  return plugins;
};

module.exports = env => {
  console.log('------------------------------------------------------------');
  console.log(`Environment: ${env.prod ? 'production' : 'localhost'}`);
  console.log(`Type: ${env.micro ? 'Micro-FrontEnd' : 'Main'}`);
  console.log('------------------------------------------------------------');
  return ({
    mode: env.prod ? 'production' : 'development',
    entry: env.micro ? './src/exports.js' : './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      // publicPath: '/assets',
      filename: env.micro ? 'index.js' : 'app.bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      compress: true,
      port: 3001,
    },
    externals: env.micro ? Object.keys(pkg.dependencies).concat(pkg.devDependencies) : [],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: scssExtract.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader', 'url-loader'],
          }),
          include: path.resolve(__dirname, './src'),
        },
        {
          test: /\.(gif|jpg|pngs)$/,
          loader: 'url-loader?limit=10000',
          include: path.resolve(__dirname, './src'),
        },
        {
          test: /\.css$/,
          use: scssExtract.extract({
            fallback: 'style-loader',
            use: ['css-loader'],
          }),
          include: path.resolve(__dirname, './src'),
        },
        {
          test: /\.(woff2?|ttf|svg|eot|jpg|png|gif)?(\?.+)?$/,
          use: [{ loader: 'file-loader' }],
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
        },
      ],
    },
    plugins: resolvePlugins(env),
  });
};

