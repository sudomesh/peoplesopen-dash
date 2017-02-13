import React from 'react';
import { connect } from 'react-redux'
import LoginScreen from './LoginScreen.js'
import Frontpage from './Frontpage.js'
import Navigation from './Navigation.js'

function App ({ isLoggedIn, isInitialized }) {
  return <div>
    <Navigation/>
    { isInitialized && (isLoggedIn ? <Frontpage/> : <LoginScreen/>) }
  </div>
}

export default connect(mapStateToProps)(App)

function mapStateToProps (state) {
  return {
    isLoggedIn: state.isLoggedIn,
    isInitialized: state.isInitialized
  }
}