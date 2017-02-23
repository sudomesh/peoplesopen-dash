import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import { connect } from 'react-redux'
import NodeConfigDiagram from '../node-config-diagram/NodeConfigDiagram.js'
import example from '../node-config-diagram/example.js'

const propType = React.PropTypes

const styles = {
  item: {
    marginBottom: 20
  },
  center: {
    textAlign: 'center'
  },
  section: {
    marginBottom: 50
  }
}

class Frontpage extends Component {
  render () {
    return <div style={{ display: 'flex' }}>
      <div style={{ margin: 'auto' }}>
        <NodeConfigDiagram { ...example }/>
      </div>
    </div>
  }
}

Frontpage.propTypes = {
  neighbors: propType.arrayOf(propType.shape({
    name: propType.string.isRequired
  })).isRequired,
  internetNeighbor: propType.string.isRequired,
  totalTransfered: propType.string.isRequired,
  isSharing: propType.bool.isRequired,
  isLoggedIn: propType.bool.isRequired,
}

export default connect(mapStateToProps)(Frontpage)

function mapStateToProps (state) {
  return {
    neighbors: state.neighbors,
    internetNeighbor: state.internetNeighbor,
    totalTransfered: state.totalTransfered,
    isSharing: state.isSharing,
    isLoggedIn: state.isLoggedIn
  }
}

export function commaAndString (items) {
  return items.map((item, i, arr) => {
    if (i === (arr.length - 2)) {
      return <span key={i}><b>{item}</b>{(arr.length < 3 ? ' and ' : ', and ')}</span>
    } else if (i === (arr.length - 1)) {
      return <b key={i}>{item}</b>
    } else {
      return <span key={i}><b>{item}</b>, </span>
    }
  })
}