import types from '../actions/types.js'


const initialState = {
  neighbors: [],
  internetNeighbor: null,
  totalTransfered: '0gb',
  sharing: false
}

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}