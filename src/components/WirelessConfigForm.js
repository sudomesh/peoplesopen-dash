import { changeWirelessConfig } from '../actions/index.js'
import { connect } from 'react-redux'
import React from 'react'
import ConfigItem from './ConfigItem.js'

function WirelessConfigForm ({
  save,
  configs
}) {
  return <div>
    <ConfigItem
      label="Private network SSID (name) - 2.4ghz"
      name="priv2"
      toChange="ssid"
      value={ configs["priv2"]["ssid"] }
      save={ save }
    />
    <ConfigItem
      label="Private network password - 2.4ghz"
      name="priv2"
      toChange="key"
      value={ configs["priv2"]["key"] }
      save={ save }
    />

    <ConfigItem
      label="Private network SSID (name) - 5ghz"
      name="priv5"
      toChange="ssid"
      value={ configs["priv5"]["ssid"] }
      save={ save }
    />
    <ConfigItem
      label="Private network password - 5ghz"
      name="priv5"
      toChange="key"
      value={ configs["priv5"]["key"] }
      save={ save }
    />

    <ConfigItem
      label="Public network SSID (name) - 2.4ghz"
      name="open2"
      toChange="ssid"
      value={ configs["open2"]["ssid"] }
      save={ save }
    />

    <ConfigItem
      label="Public network SSID (name) - 5ghz"
      name="open5"
      toChange="ssid"
      value={ configs["open5"]["ssid"] }
      save={ save }
    />

  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(WirelessConfigForm)

function mapStateToProps (state) {
  return {
    configs: state.uciConfigs.wireless.interfaces
  }
}

function mapDispatchToProps (dispatch) {
  return {
    save ({ name, toChange, value }) {
      dispatch(changeWirelessConfig(name, toChange, value))
    }
  }
}