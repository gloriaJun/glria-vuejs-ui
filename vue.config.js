// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  baseUrl: '.',
  css: {
    extract: {
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[id].[contenthash:8].css'
    }
  }
  // productionSourceMap: false,
  // configureWebpack: {
  //   plugins: [
  //     new CopyWebpackPlugin([
  //       {
  //         from: 'src/components',
  //         to: 'src/components/',
  //         toType: 'dir'
  //       },
  //       {
  //         from: 'src/styles',
  //         to: 'src/styles/',
  //         toType: 'dir'
  //       }
  //     ])
  //   ]
  // }
};
