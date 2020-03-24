var _Environments = {
  // production: {API_URL: 'https://filomobileapi.herokuapp.com'},
  production: {API_URL: 'http://localhost:3000'},
  // development: {API_URL: 'https://filoapi.herokuapp.com/api'},
  // development: {API_URL: 'https://filomobileapi.herokuapp.com'},
  development: {API_URL: 'http://localhost:3000'},
};

function getEnvironment() {
  // Insert logic here to get the current platform (e.g. staging, production, etc)
  var platform = __DEV__ ? 'development' : 'production';

  // ...now return the correct environment
  return _Environments[platform];
}
module.exports = getEnvironment();
