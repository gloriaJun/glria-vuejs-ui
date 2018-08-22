const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  css: {
    extract: {filename: 'styles.css'}
  },
  productionSourceMap: false,
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
