import React from 'react';
import { connect } from 'react-redux'
import LoginScreen from './LoginScreen.js'
import Frontpage from './Frontpage.js'

function App ({ isLoggedIn, isInitialized }) {
  if (isInitialized) {
    if (isLoggedIn) {
      return <Frontpage/>
    } else {
      return <LoginScreen/>
    }
  } else {
    return <div/>
  }
}

export default connect(mapStateToProps)(App)

function mapStateToProps (state) {
  return {
    isLoggedIn: state.isLoggedIn,
    isInitialized: state.isInitialized
  }
}