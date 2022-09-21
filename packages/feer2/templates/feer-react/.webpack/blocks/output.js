const { join } = require('path');

module.exports = (config, { PATH, development }) => {
  const qbcid = process.env.QB_C_BID ? `?qb_c_bid=${process.env.QB_C_BID}` : '';
  const publicPath = development ? '' : process.env.PUBLIC_PATH || '';
  return Object.assign(config, {
    output: {
      path: join(PATH, 'build'),
      filename: `js/[name].[contenthash:8].js${qbcid}`,
      publicPath,
      clean: true,
    },
  });
};
