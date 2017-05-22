const React = require('react')
const { connect } = require('react-redux')
const TextComponent = require('../components/text.js')

const Home = () => <div><TextComponent/></div>

const mapStateToProps = () => ({})

module.exports = connect(mapStateToProps)(Home)
