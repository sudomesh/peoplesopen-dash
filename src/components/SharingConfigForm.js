import { changeTunneldiggerConfig } from '../actions/index.js'
import { connect } from 'react-redux'
import React from 'react'
import ConfigItem from './ConfigItem.js'

function SharingConfigForm ({
  save,
  configs
}) {
  return <div>
    <ConfigItem
      label="Shared Download Speed Limit"
      toChange="limit_bw_down"
      value={ configs["limit_bw_down"] }
      save={ save }
    />
    <ConfigItem
      label="Shared Upload Speed Limit"
      toChange="limit_bw_up"
      value={ configs["limit_bw_up"] }
      save={ save }
    />
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(SharingConfigForm)

function mapStateToProps (state) {
  return {
    configs: state.uciConfigs.tunneldigger.main
  }
}

function mapDispatchToProps (dispatch) {
  return {
    save ({ toChange, value }) {
      dispatch(changeTunneldiggerConfig(toChange, value))
    }
  }
}