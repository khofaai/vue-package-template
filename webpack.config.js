const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/[PackageName].vue',
  output:{
    filename:'[PackageName].js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
};