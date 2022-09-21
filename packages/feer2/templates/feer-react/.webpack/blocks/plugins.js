const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = (config, { production, PATH }) => {
  const qbcid = process.env.QB_C_BID ? `?qb_c_bid=${process.env.QB_C_BID}` : '';
  const plugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
      // inject: false,
      template: join(PATH, 'public/index.html'),
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      lintDirtyModulesOnly: true,
      threads: true,
      // fix: true,
    }),
    new StylelintPlugin({
      lintDirtyModulesOnly: true,
      threads: true,
      // fix: true,
    }),
    new DefinePlugin({
      'process.env.DESIGN_WIDTH': JSON.stringify(process.env.DESIGN_WIDTH || 750),
    }),
  ];

  if (production) {
    plugins.push(new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash:8].css${qbcid}`,
    }));
  }

  return Object.assign(config, {
    plugins,
  });
};
