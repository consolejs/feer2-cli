const { join } = require('path');
module.exports = (config, { PATH }) => Object.assign(config, {
  devServer: {
    static: {
      directory: join(PATH, 'public'),
    },
    port: process.env.PORT || 5000,
    open: true,
    server: process.env.HTTPS ? 'https' : 'http',
    // proxy https://webpack.docschina.org/configuration/dev-server/#devserverproxy
  },
});
