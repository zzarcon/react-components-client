/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'react-addons-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },
    APP: {},
    contentSecurityPolicy: {
      'img-src': "* 'self' 'unsafe-inline'",
      'connect-src': "*",
      'style-src': "* 'self' 'unsafe-inline'",
      'report-uri': "*",
      'script-src': "* 'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "* 'self' 'unsafe-inline' 'unsafe-eval'"
    }
  };

  if (environment === 'development') {
    ENV.host = "http://localhost:8080";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.host = "https://react-addons-backend.herokuapp.com";
  }

  return ENV;
};
