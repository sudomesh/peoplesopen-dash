import { changeSystemConfig } from '../actions/index.js'
import { connect } from 'react-redux'
import React from 'react'
import ConfigItem from './ConfigItem.js'

function SystemConfigForm ({
  save,
  configs
}) {
  return <div>
    <ConfigItem
      label="Hostname"
      toChange="hostname"
      value={ configs["hostname"] }
      save={ save }
    />
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(SystemConfigForm)

function mapStateToProps (state) {
  return {
    configs: "state.uciConfigs.system.@system[0]"
  }
}

function mapDispatchToProps (dispatch) {
  return {
    save ({ toChange, value }) {
      dispatch(changeSystemConfig(toChange, value))
    }
  }
}
