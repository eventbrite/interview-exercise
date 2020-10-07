const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
  },
  devServer: {
    contentBase: '.',
    watchContentBase: true,
    liveReload: true,
    overlay: true,
    proxy: {
      '/api': 'http://localhost:3000',
    }
  },
  module: {
    rules: [
        {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
        }
    ]
    }
};