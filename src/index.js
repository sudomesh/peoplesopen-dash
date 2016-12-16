import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import Frontpage from './components/Frontpage'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Frontpage {...{ 
      neighbors: [ 
        { name: 'mesh26' },
        { name: 'mesh11' },
        { name: 'sally_b' }
      ],
      internetNeighbor: 'mesh26',
      totalTransfered: '10gb',
      sharing: false
    }} />
  </Provider>,
  document.getElementById('root')
);
