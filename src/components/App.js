import React from 'react';
import { connect } from 'react-redux'
import LoginScreen from './LoginScreen.js'
import Frontpage from './Frontpage.js'
import WifiSettings from './WifiSettings.js'
import Connections from './Connections.js'
import Navigation from './Navigation.js'

function App ({ isLoggedIn, isInitialized, hash }) {
  return <div>
    <Navigation hash={hash}/>
    { isInitialized && (isLoggedIn ? <Page hash={hash}/> : <LoginScreen/>) }
  </div>
}

function Page ({ hash }) {
  switch (hash) {
    case 'home':
      return <Frontpage/>
    case 'wifi':
      return <WifiSettings/>
    case 'connections':
      return <Connections/>
    default:
      return <Frontpage/>
  }
}

export default connect(mapStateToProps)(App)

function mapStateToProps (state) {
  return {
    isLoggedIn: state.isLoggedIn,
    isInitialized: state.isInitialized,
    hash: state.hash
  }
}