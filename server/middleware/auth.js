const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  console.log(req.headers);
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

