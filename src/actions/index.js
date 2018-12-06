import check from 'check-types'
import config from '../config.js'
import actionType from './types.js'
import ubusAPI from './ubusAPI.js'
import infogatherAPI from './infogatherAPI.js'

export function login (password) {
  return async (dispatch, getState) => {
    const { ubus_rpc_session } = await ubusAPI.login(config.username, password)

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
      await dispatch(ubusAPI.logout(sessionID))
    }
    localStorage.setItem('sessionID', null)

    return dispatch({
      type: actionType('logged out')
    })
  }
}

export function fetchUciConfigs () {
  return async (dispatch, getState) => {
    const configNames = [
      'wireless',
      'tunneldigger'
    ]
    const configs = {} 

    await Promise.all(configNames.map(async config => {
      const { values } = await dispatch(ubusAPI.getConfig(config))
      configs[config] = values
    }))

    return dispatch({
      type: actionType('got uci configs'),
      payload: configs
    })
  }
}

export function changeWirelessConfig (ifname, toChange, value) {
  return async (dispatch, getState) => {
    const { uciConfigs: { wireless: { interfaces } } } = getState()
    const section = interfaces[ifname]['.name']
    await dispatch(ubusAPI.setWirelessConfig(section, toChange, value))
    return dispatch(ubusAPI.commitConfig('wireless'))
  }
}

export function changeTunneldiggerConfig (toChange, value) {
  return async (dispatch, getState) => {
    await dispatch(ubusAPI.setTunneldiggerConfig(toChange, value))
    return dispatch(ubusAPI.commitConfig('tunneldigger'))
  }
}

export function getRouterInfo () {
  return async (dispatch, getState) => {
    const response = await infogatherAPI.getRouterInfo()
    return dispatch({
      type: actionType('got router info'),
      payload: response
    })
  }
}