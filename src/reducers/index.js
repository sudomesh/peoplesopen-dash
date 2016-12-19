import actionTypes from '../actions/types.js'


const initialState = {
  neighbors: [ 
    { name: 'mesh26' },
    { name: 'mesh11' },
    { name: 'sally_b' }
  ],
  internetNeighbor: 'mesh26',
  totalTransfered: '10gb',
  isSharing: false,
  sessionID: '00000000000000000000000000000000',
  uciConfigs: null,
  isLoggedIn: false
}

export default function rootReducer (state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case actionTypes['logged in']:
      return {
        ...state,
        isLoggedIn: true 
      }

    case actionTypes['got uci configs']:
      return {
        ...state,
        uciConfigs: cleanUciConfigs(payload)
      }

    case actionTypes['save sharing settings']:
      console.log('save sharing settings')
      return state
    default:
      return state
  }
}

function cleanUciConfigs (payload) {
  let {
    wireless,
    tunneldigger
  } = payload

  wireless = Object.keys(wireless).reduce((acc, key) => {
    const value = wireless[key]
    if (value['.type'] === 'wifi-iface') {
      acc.interfaces[value.ifname] = value
    }
    if (value['.type'] === 'wifi-device') {
      acc.devices[key] = value
    }
    return acc
  }, {
    interfaces: {},
    devices: {}
  })

  tunneldigger = tunneldigger.main

  return {
    wireless,
    tunneldigger
  }
}
