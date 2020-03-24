var Environments = {
  production: {API_URL: 'https://filomobileapi.herokuapp.com'},
  development: {API_URL: 'https://filomobileapi.herokuapp.com'},
};

function getEnvironment() {
  // Insert logic here to get the current platform (e.g. staging, production, etc)
  var platform = __DEV__ ? 'development' : 'production';

  // ...now return the correct environment
  return Environments[platform];
}
module.exports = getEnvironment();
