const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (config, { development }) => {
  const qbcid = process.env.QB_C_BID ? `?qb_c_bid=${process.env.QB_C_BID}` : '';
  const maxSize = Number(process.env.IMAGE_INLINE_LIMIT) || 0;

  return Object.assign(config, {
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
            },
          },
        },
        {
          test: /.s?css$/,
          use: [
            development
              ? {
                loader: require.resolve('style-loader'),
              }
              : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../',
                },
              },
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: {
                  auto: true,
                  localIdentName: '[local]--[hash:base64:5]',
                },
              },
            },
            {
              loader: require.resolve('sass-loader'),
              options: {
                sourceMap: true,
                additionalData: '@use "~@/styles/function" as *;',
              },
            },
            {
              loader: require.resolve('postcss-loader'),
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize,
            },
          },
          generator: {
            filename: `images/[name].[hash:8][ext]${qbcid}`,
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: `fonts/[name].[hash:8][ext]${qbcid}`,
          },
        },
      ],
    },
  });
};
