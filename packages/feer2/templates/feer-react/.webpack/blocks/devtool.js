module.exports = (config, { development }) => Object.assign(config, {
  devtool: development ? 'eval-source-map' : false,
});
