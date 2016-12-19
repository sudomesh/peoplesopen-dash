import Ubus from '../libs/ubus.js'
import check from 'check-types'
import config from '../config.js'
import actionType from './types.js'

const ubus = new Ubus(config.rpcOptions)

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
      type: actionType['logged in']
    })
  }
}

export function loadSession () {
  return async (dispatch, getState) => {
    try {
      await dispatch(fetchUciConfigs())
      dispatch({
        type: actionType['logged in']
      })
    } catch (e) {
      console.error(`saved session error: ${e}. clearing session.`)
      dispatch({ type: actionType['initialized'] })
      localStorage.setItem('sessionID', null)
    }
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
      type: actionType['logged out']
    })
  }
}

export function changePassword (credentials) {
  return callUbus('password', 'set', credentials)
}

export function fetchUciConfigs () {
  return async (dispatch, getState) => {
    const configNames = [
      'wireless',
      'tunneldigger'
    ]
    const configs = {}

    await Promise.all(configNames.map(async config => {
      const { values } = await dispatch(callUbus('uci', 'get', { config }))
      configs[config] = values
    }))

    return dispatch({
      type: actionType['got uci configs'],
      payload: configs
    })
  }
}

export function changeSetting (setting) {
  return callUbus('uci', 'set', {
    config: setting.section,
    section: setting.key,
    values: {
      [setting.toChange]: setting.value
    }
  })
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
