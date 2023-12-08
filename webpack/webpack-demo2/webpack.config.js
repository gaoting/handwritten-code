const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path:  path.resolve(__direname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    overlay: {
      warnings: true,
      errors: true,
    },
    open: true
  }
}

