var path = require('path')

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.hi$/,
      use: ['./math-loader.js']
    }]
  },
  mode: 'none'
}