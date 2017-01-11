import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import App from './components/App.js'
import { loadSession } from './actions/index.js'
import actionType from './actions/types.js'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
))

store.dispatch(loadSession())

function onHashChange () {
  store.dispatch({
    type: actionType('hashchange'),
    payload: window.location.hash.substr(1)
  })
}

onHashChange()
window.addEventListener('hashchange', onHashChange, false)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
