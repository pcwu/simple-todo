const path = require('path');

module.exports = {
  entry: [
    './src/client/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'static/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
