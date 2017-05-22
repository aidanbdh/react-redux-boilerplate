const React = require('react')
const { connect } = require('react-redux')
const Home = require('./views/home.js')
const hello = require('../actions/hello.js')

const switchView = ({view, sayHello}) => {
  Window.onload = sayHello()
  switch(view) {
    case 'home':
      return <Home/>
    default:
      return <Home/>
  }
}

const View = props => <div>{ switchView(props) }</div>

const mapStateToProps = ({ view }) => ({ view })
const mapDispatchToProps = dispatch => ({
  sayHello: () => { dispatch(hello) }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(View)
