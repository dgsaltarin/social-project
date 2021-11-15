const controller = require('./controller');
const storage = require('../../../storage/dummy');

module.exports = controller(storage);
