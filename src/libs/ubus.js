import p from 'es6-promisify'
import rpc from 'node-json-rpc'

export default class Ubus {
  constructor (rpcOptions) {
    this.rpcClient = new rpc.Client(rpcOptions)
  }

  async call (sessionId, obj, method, args) {
    // The string of zeroes is a null session which can only call login
    sessionId = sessionId || '00000000000000000000000000000000'
    
    const result = await p(this.rpcClient.call)({
      method: 'call', 
      jsonrpc: '2.0',
      id: 1, 
      params: [ sessionId, obj, method, args ]
    })

    if (result[0] === 0) {
      return result[1]
    } else if (result[0] === 6) {
      throw new Error("ubus: permission denied")
    } else if (result[0] === 5) {
      throw new Error("ubus: no output")
    } else {
      throw new Error(`ubus: unknown error code: ${result[0]}`)
    }
  }
}
