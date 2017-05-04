const airbnb = require('neutrino-preset-airbnb-base');
const web = require('neutrino-preset-web');
const vue = require('neutrino-preset-vue');
const karma = require('neutrino-preset-karma');
const override = require('./internal/neutrino/override.js');

module.exports = () => {
  neutrino.use(airbnb);
  neutrino.use(web);
  neutrino.use(vue);
  neutrino.use(karma);
  neutrino.config.publicPath('/static/build');
  if (override) {
    neutrino.use(override);
  }
}
