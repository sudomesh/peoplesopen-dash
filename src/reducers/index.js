import actionType from '../actions/types.js'
import infoParse from '../libs/info-parse/index.js'
import buildDiagram from '../libs/build-diagram/index.js'

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
  uciConfigs: {
    wireless: null,
    tunneldigger: null
  },
  isLoggedIn: false,
  isInitialized: false
}

export default function rootReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case actionType('logged in'):
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true 
      }

    case actionType('initialized'):
      return {
        ...state,
        isInitialized: true 
      }

    case actionType('got uci configs'):
      return {
        ...state,
        uciConfigs: cleanUciConfigs(payload)
      }

    case actionType('got router info'):
      const parsed = infoParse(payload)
      const diagramSchema = buildDiagram(parsed)

      return {
        ...state,
        routerInfo: parsed,
        connectionDiagram: diagramSchema
      }

    case actionType('hashchange'):
      console.log('hash', action.payload)
      return {
        ...state,
        hash: action.payload,
      }

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

  return {
    wireless,
    tunneldigger
  }
}
