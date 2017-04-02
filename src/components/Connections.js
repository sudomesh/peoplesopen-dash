import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import { connect } from 'react-redux'
import NodeConfigDiagram from '../node-config-diagram/NodeConfigDiagram.js'
// import example from '../node-config-diagram/example.js'

class Connections extends Component {
  render () {
    return <div style={{ marginTop: 50, display: 'flex' }}>
      <div style={{ margin: 'auto' }}>
        <NodeConfigDiagram { ...this.props.connectionDiagram }/>
      </div>
    </div>
  }
}

export default connect(mapStateToProps)(Connections)

function mapStateToProps (state) {
  return {
    connectionDiagram: state.connectionDiagram
  }
}
