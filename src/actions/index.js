import Ubus from '../libs/ubus.js'
import check from 'check-types'
import config from '../config.js'
import actionType from './types.js'

const ubus = new Ubus(config.rpcOptions)

// export function saveSharingSettings (settings) {
//   return async () => {
//     // placeholder function
//     console.log('saveSharingSettings', settings)
//     return null
//   }
// }

// export function registerNode () {
//   return async (dispatch, getState) => (
//     // placeholder function
//     null
//   )
// }

export function login (credentials) {
  return async (dispatch, getState) => {
    console.log('derpington')
    const {
      ubus_rpc_session
    }  = await ubus.call(null, 'session', 'login', credentials)

    check.assert.nonEmptyString(
      ubus_rpc_session,
      'login failed: ubus server did not return session id'
    )

    await dispatch(fetchUciConfigs())

    localStorage.setItem('sessionId', ubus_rpc_session)
    const action: Action = {
      type: actionType('logged in')
    }
    return dispatch(action)
  }
}

export function loadSession () {
  return async (dispatch, getState) => {
    try {
      await fetchUciConfigs()
    } catch (e) {
      console.error(`saved session error: ${e}. clearing session.`)
      return dispatch(logout())
    }
  }
}

export function logout (dispatch) {
  return (dispatch, getState) => {    
    localStorage.setItem('sessionId', null)
    return dispatch({
      type: actionType('logged out')
    })
  }
}

export function changePassword (credentials) {
  return callUbus('password', 'set', credentials)
}

export function fetchUciConfigs () {
  return async (dispatch, getState) => {
    const { configNames } = await dispatch(callUbus('uci', 'configs', {}))

    check.assert.array(configNames, 'fetchUciConfigs failed: configNames must be array')

    const uciConfigs = {}
    await Promise.all(configNames.map(async configName => {
      const { values } = await dispatch(callUbus('uci', 'get', { configName }))
      uciConfigs[configName] = values
    }))

    return dispatch({
      type: actionType('got uci configs'),
      payload: uciConfigs
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
    const sessionId = localStorage.getItem('sessionId') || null

    try {
      return ubus.call(sessionId, object, method, args)
    } catch (e) {
      if (e.message.match(/session_expired/)) {
        logout(dispatch)
      } else {
        throw e
      }
    }
  }
}
