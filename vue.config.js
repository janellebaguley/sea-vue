let HOST_NAME = 'localhost';

let APP_URL = 'http://' + HOST_NAME + ':8080';

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
  transpileDependencies: ['vuetify']
};
