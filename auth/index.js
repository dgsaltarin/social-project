const jwt = require('jsonwebtoken');

function sign(userData) {
  return jwt.sign(userData, 'secreto');
}

module.exports = {
  sign,
};
