const blocks = [
  require('./devServer'),
  require('./devtool'),
  require('./entry'),
  require('./mode'),
  require('./module'),
  require('./optimization'),
  require('./output'),
  require('./plugins'),
  require('./resolve'),
  require('./target'),
];

module.exports = args => blocks.reduce((config, block) => block(config, args), {});
