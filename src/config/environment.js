var Environments = {
  // production: {API_URL: 'https://filomobileapi.herokuapp.com'},
  // development: {API_URL: 'https://filomobileapi.herokuapp.com'},

  production: {API_URL: 'http://192.168.0.103'},
  development: {API_URL: 'http://192.168.0.103'},
};

function getEnvironment() {
  // Insert logic here to get the current platform (e.g. staging, production, etc)
  var platform = __DEV__ ? 'development' : 'production';

  // ...now return the correct environment
  return Environments[platform];
}
module.exports = getEnvironment();
