import Ubus from '../libs/ubus.js'
import check from 'check-types'
import config from '../config.js'
import actionType from './types.js'
import sampleRouterInfo from '../libs/__test__/sampleRouterOutput.js'

const ubus = new Ubus(config.ubusUrl)

export function login (password) {
  return async (dispatch, getState) => {
    const {
      ubus_rpc_session
    }  = await ubus.call(null, 'session', 'login', { username: config.username, password })

    check.assert.nonEmptyString(
      ubus_rpc_session,
      'login failed: ubus server did not return session id'
    )

    localStorage.setItem('sessionID', ubus_rpc_session)

    await dispatch(fetchUciConfigs())

    return dispatch({
      type: actionType('logged in')
    })
  }
}

export function loadSession () {
  return async (dispatch, getState) => {
    if (localStorage.getItem('sessionID')) {
      try {
        await dispatch(fetchUciConfigs())
        dispatch({
          type: actionType('logged in')
        })
      } catch (e) {
        console.error(`saved session error: ${e}. clearing session.`)
        localStorage.setItem('sessionID', null)
      }
    }

    dispatch({ type: actionType('initialized') })
  }
}

export function logout (dispatch) {
  return async (dispatch, getState) => {
    const sessionID = localStorage.getItem('sessionID')
    if (sessionID) {
      await dispatch(callUbus('session', 'destroy', { sessionID }))
    }
    localStorage.setItem('sessionID', null)

    return dispatch({
      type: actionType('logged out')
    })
  }
}

export function changePassword (credentials) {
  return callUbus('password', 'set', credentials)
}

// To add a new UCI config to be fetched ...
export function fetchUciConfigs () {
  return async (dispatch, getState) => {
    const configNames = [
      'system',
      'wireless',
      'tunneldigger'
    ]
    const configs = {} 

    await Promise.all(configNames.map(async config => {
      const { values } = await dispatch(callUbus('uci', 'get', { config }))
      configs[config] = values
      // get system hostname
      if(config === 'system'){
	  Object.values(configs[config]).map((type) => {
          if(type.hasOwnProperty('hostname')){
	      console.log(type.hostname)
	  }
        })
      }
    }))

    return dispatch({
      type: actionType('got uci configs'),
      payload: configs
    })
  }
}

export function changeSystemConfig (toChange, value) {
  return async (dispatch, getState) => {
    //const { uciConfigs: { system: { interfaces } } } = getState()
    await dispatch(callUbus('uci', 'set', {
      config: 'system',
      section: 'led_lan1',//'@system[0]',
      values: {
        [toChange]: value
      }
    }))

    return dispatch(callUbus('uci', 'commit', {
      config: 'system'
    }))
  }
}

export function changeWirelessConfig (ifname, toChange, value) {
  return async (dispatch, getState) => {
    const { uciConfigs: { wireless: { interfaces } } } = getState()
    await dispatch(callUbus('uci', 'set', {
      config: 'wireless',
      section: interfaces[ifname]['.name'],
      values: {
        [toChange]: value
      }
    }))

    return dispatch(callUbus('uci', 'commit', {
      config: 'wireless'
    }))
  }
}

export function changeTunneldiggerConfig (toChange, value) {
  return async (dispatch, getState) => {
    await dispatch(callUbus('uci', 'set', {
      config: 'tunneldigger',
      section: 'main',
      values: {
        [toChange]: value
      }
    }))

    return dispatch(callUbus('uci', 'commit', {
      config: 'tunneldigger'
    }))
  }
}

export function callUbus (object, method, args) {
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

export function getRouterInfo () {
  return async (dispatch, getState) => {
    const response = await (await fetch(config.infogatherUrl)).text()

    return dispatch({
      type: actionType('got router info'),
      payload: response
    })
  }
}
