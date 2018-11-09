var config = require('../config');
const _ = require('lodash');

/**
 * @api /*
 * @nowrap
 */
exports.demoPage = demoPage;

function demoPage(req, res) {
  res.render('index.html', {
    isDebug: config.debug,
    prefix: config.staticPath || (config.prefix === '/' ? '' : config.prefix),
    env: config.env,
    privateCloud: !!config.privateCloud,
  });
}

