var dotenv = require('dotenv').config();

var env = process.env;

module.exports = {
  port: env.PORT || 8000
};
