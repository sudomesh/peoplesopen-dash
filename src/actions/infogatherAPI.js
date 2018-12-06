import config from '../config.js'
import routerInfo from './stubs/getRouterInfo.stub.js'
import env from '../env.js'

function getRouterInfo() {
  return fetch(config.infogatherUrl).then((res) => res.text())
}

function getRouterInfoStub() {
  return routerInfo 
}

const useStubs = env === 'development'

export default {
  getRouterInfo: useStubs ? getRouterInfoStub : getRouterInfo
}
