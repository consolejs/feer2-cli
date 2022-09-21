const { join } = require('path');
module.exports = (config, { PATH }) => Object.assign(config, {
  entry: {
    index: [join(PATH, 'src/index.tsx')],
  },
});
