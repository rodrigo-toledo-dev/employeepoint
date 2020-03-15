var _Environments = {
  production: {API_URL: 'https://filomobileapi.herokuapp.com'},
  // development: {API_URL: 'https://filoapi.herokuapp.com/api'},
  development: {API_URL: 'https://filomobileapi.herokuapp.com'},
};

function getEnvironment() {
  // Insert logic here to get the current platform (e.g. staging, production, etc)
  var platform = __DEV__ ? 'development' : 'production';

  // ...now return the correct environment
  return _Environments[platform];
}

const Environment = getEnvironment();
module.exports = Environment;
