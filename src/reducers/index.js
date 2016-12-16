import actionTypes from '../actions/types.js'


const initialState = {
  neighbors: [],
  internetNeighbor: null,
  totalTransfered: '0gb',
  sharing: false,
  sessionId: '00000000000000000000000000000000'
}

export default function rootReducer (state = initialState, action: Action) {
  // Actions without a type just update the state
  if (!action.type) {
    return {
      ...state,
      ...action
    }
  }

  switch (action.type) {
    case actionTypes['logged in']:
      return state
    case actionTypes['save sharing settings']:
      console.log('save sharing settings')
      return state
    default:
      return state
  }
}