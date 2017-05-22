const { createStore } = require('redux')
const reducers = require('./reducers/combine-reducers.js')

module.exports = createStore(reducers)
