const { resolve } = require('path');
module.exports = (config, { PATH }) => {
  console.log(resolve(PATH, 'src'));
  return Object.assign(config, {
    resolve: {
      // ['.js', '.json', '.wasm']
      extensions: ['.ts', '.tsx', '.jsx', '...'],
      alias: {
        '@': resolve(PATH, 'src'),
      },
    },
  });
};
