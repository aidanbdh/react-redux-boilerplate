/* globals describe it */
const { expect } = require('chai')
const combineReducers = require('../public/reducers/combine-reducers.js')
const hello = require('../public/actions/hello.js')

describe('reducers', () => {

  describe('hello.js', () => {

    it('changes the text attribute of the state', () => {
      expect(combineReducers(null, hello)).to.have.property('text')
    })

  })

  describe('combine-reducers.js', () => {

    it('combines reducers', () => {
      expect(combineReducers).to.be.a('function')
    })

  })

})
