const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (config, { production }) => {
  const { ESBUILD } = process.env;

  return Object.assign(config, {
    optimization: {
      minimize: production,
      minimizer: [
        new TerserPlugin({
          minify: ESBUILD ? TerserPlugin.esbuildMinify : TerserPlugin.terserMinify,
          extractComments: false,
          // terserOptions: {
          //   // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          //   // toplevel: true,
          //   // mangle: false, // 混淆
          //   output: {
          //     comments: false, // 保留注释
          //     // beautify: true,
          //     // indent_level: 2,
          //   },
          //   compress: {
          //     // keep_fargs: false,
          //     // drop_console: true,
          //   },
          // },
        }),
        new CssMinimizerPlugin({
          minify: ESBUILD ? CssMinimizerPlugin.esbuildMinify : CssMinimizerPlugin.cssnanoMinify,
        }),
      ],
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: -20,
            reuseExistingChunk: true,
          },
          react: {
            name: 'react',
            test: /[\\/]node_modules[\\/]react-dom/,
            chunks: 'all',
            enforce: true,
            priority: -10,
            reuseExistingChunk: true,
          },
          styles: {
            name: 'index',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true,
            // minSize: 1
          },
          default: false,
        },
      },
    },
  });
};
