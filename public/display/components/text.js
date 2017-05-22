const React = require('react')
const { connect } = require('react-redux')
const hello = require('../../actions/hello.js')

const Title = ({ text }) =>
  <div>
    <h1>{ text }</h1>
  </div>

const mapStateToProps = ({ text }) => ({ text })

module.exports = connect(mapStateToProps)(Title)
