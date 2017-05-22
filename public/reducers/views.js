module.exports = (state, action) => {
  switch(action.type) {
    case 'home':
      return Objecy.assign({}, state, { view: action.view })
  }
}
