module.exports = (state, action) => {
  switch(action.type) {
    case 'hello':
      return Object.assign({}, state, { text: action.text })
    default:
      return state
  }
}
