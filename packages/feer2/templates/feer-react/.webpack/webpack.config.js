const { resolve } = require('path');
const PATH = resolve(__dirname, '..');
const config = require('./blocks/config');
require('dotenv').config();
module.exports = env => config({ ...env, PATH });
