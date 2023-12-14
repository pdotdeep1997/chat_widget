// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/MyWidget.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-widget.bundle.js',
    library: 'MyWidget',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  // Removed the externals section
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
