import p from 'es6-promisify'
import rpc from 'node-json-rpc'
import check from 'check-types'

export default class Ubus {
  constructor (rpcOptions) {
    this.rpcClient = new rpc.Client(rpcOptions)
  }

  async call (sessionID, obj, method, args) {
    // The string of zeroes is a null session which can only call login
    sessionID = sessionID || '00000000000000000000000000000000'
    
    const response = await p(this.rpcClient.call)({
      method: 'call', 
      jsonrpc: '2.0',
      id: 1, 
      params: [ sessionID, obj, method, args ]
    })

    if (response.error) {
      throw new Error(`ubus error: ${response.error.message}`)
    }

    const result = response.result

    check.assert.array(result, `ubus error: wrong result format: ${result}`)

    if (result[0] === 0) {
      return result[1]
    }

    if (result[0] === 6) {
      throw new Error('ubus error: permission denied')
    }

    if (result[0] === 5) {
      throw new Error('ubus error: no output')
    }

    throw new Error(`ubus: unknown error ${result}`)
  }
}
