import Ubus from '../libs/ubus.js'
import config from '../config.js'
import env from '../env.js'

const ubus = new Ubus(config.ubusUrl)

import ubusRpcSession from './stubs/ubusRPCSessionID.stub.js'
import uciConfigs from './stubs/fetchUCIConfigs.stub.js'

function login(username, password) {
  return ubus.call(null, 'session', 'login', { username, password })
}

function loginStub(username, password) {
  return { ubus_rpc_session: ubusRpcSession }
}

function getConfig(config) {
  return callUbusWithAuth('uci', 'get', { config })
}

function getConfigStub(config) {
  return wrap({ values: JSON.parse(uciConfigs[config]) })
}

function logout(sessionID) {
  return callUbusWithAuth('session', 'destroy', { sessionID })
}

function logoutStub(sessionID) {
  // todo
  return wrap()
}

function setWirelessConfig(section, toChange, value) {
  return callUbusWithAuth('uci', 'set', {
    config: 'wireless',
    section: section,
    values: {
      [toChange]: value
    }
  })
}

function setWirelessConfigStub(ifname, toChange, value) {
  // no response
  return wrap()
}

function setTunneldiggerConfig(toChange, value) {
  return callUbusWithAuth('uci', 'set', {
    config: 'tunneldigger',
    section: 'main',
    values: {
      [toChange]: value
    }
  })
}

function setTunneldiggerConfigStub(toChange, value) {
  // no response
  return wrap()
}

function commitConfig(config) {
  return callUbusWithAuth('uci', 'commit', { config })
}

function commitConfigStub(config) {
  // no response
  return wrap()
}

// Hit Ubus API, authenticated with session ID. Logout if session is expired.
function callUbusWithAuth(object, method, args) {
  return async (dispatch, getState) => {
    const sessionID = localStorage.getItem('sessionID') || null

    try {
      return ubus.call(sessionID, object, method, args)
    } catch (e) {
      if (e.message.match(/session_expired/)) {
        dispatch(logout())
      } else {
        throw e
      }
    }
  }
}

// Wrap a result so that it can be `dispatch`ed. Ugh redux.
function wrap(result) {
  return async(dispatch, getState) => result
}

const useStubs = env === 'development'

export default {
  login: useStubs ? loginStub : login,
  getConfig: useStubs ? getConfigStub : getConfig,
  logout: useStubs ? logoutStub : logout,
  setWirelessConfig: useStubs ? setWirelessConfigStub : setWirelessConfig,
  setTunneldiggerConfig: useStubs ? setTunneldiggerConfigStub : setTunneldiggerConfig,
  commitConfig: useStubs ? commitConfigStub : commitConfig
}
