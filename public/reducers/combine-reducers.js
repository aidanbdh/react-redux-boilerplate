const init = require('../actions/init.js');
const hello = require('./hello.js')

module.exports = (state = init, action) => {
  return Object.assign({}, state, hello(state, action))
}
