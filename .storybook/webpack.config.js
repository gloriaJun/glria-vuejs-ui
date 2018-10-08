const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require('path')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.plugins.push(new VueLoaderPlugin());

  storybookBaseConfig.module.rules.push({
    test: /\.(js|vue|jsx)$/,
    use: 'eslint-loader',
    include: [path.join(__dirname, '..', 'src')]
  });

  storybookBaseConfig.module.rules.push({
    test: /\.s?css$/,
    use: ['vue-style-loader', "style-loader", "css-loader", "sass-loader"],
  });

  storybookBaseConfig.module.rules.push({
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    query: {
      limit: 10000,
      name: 'img/[name].[hash:7].[ext]'
    }
  });

  storybookBaseConfig.module.rules.push({
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    query: {
      limit: 10000,
      name: 'fonts/[name].[hash:7].[ext]'
    }
  });

  storybookBaseConfig.resolve = {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '..', 'src'),
    },
  };
  return storybookBaseConfig;
};

// module.exports = (baseConfig, env, defaultConfig) => {
//   defaultConfig.plugins.push(new VueLoaderPlugin());
//
//   defaultConfig.module.rules.push({
//     test: /\.s?css$/,
//     loaders: ["style-loader", "css-loader", "sass-loader"],
//     include: [resolve('')]
//   });
//
//   return defaultConfig;
// };

//
// module.exports = {
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js',
//       '@': resolve('src')
//     },
//     extensions: ['*', '.js', '.vue', '.json']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|vue|jsx)$/,
//         use: 'eslint-loader',
//         include: [resolve('src')]
//       },
//       {
//         test: /\.s?css$/,
//         loaders: ["style-loader", "css-loader", "sass-loader"],
//         include: [resolve('')]
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//         loader: 'url-loader',
//         query: {
//           limit: 10000,
//           name: 'img/[name].[hash:7].[ext]'
//         }
//       },
//       {
//         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//         loader: 'url-loader',
//         query: {
//           limit: 10000,
//           name: 'fonts/[name].[hash:7].[ext]'
//         }
//       },
//     ]
//   }
// }
