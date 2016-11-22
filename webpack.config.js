const Path = require('path');

module.exports = {
  entry: './build/public/RootComponents/Index.js',
  output: {
    path: Path.join(__dirname, 'build/public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /Layout/,
        include: /public/,
      },
    ],
  },
};
