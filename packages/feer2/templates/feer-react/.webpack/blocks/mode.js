module.exports = (config, { development }) => Object.assign(config, {
  mode: development ? 'development' : 'production',
});
