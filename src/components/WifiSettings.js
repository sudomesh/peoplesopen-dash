import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import WirelessConfigForm from './WirelessConfigForm.js'

const styles = {
  container: {
    paddingTop: 50
  },
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

class WifiSettings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      sharingSettings: {}
    }
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  setSharingSetting = (property) => {
    return (event) => {
      event.persist()
      this.setState(state => ({
        sharingSettings: {
          ...state.sharingSettings,
          [property]: event.target.value
        }
      }))
    }
  }

  render () {
    return <Container style={styles.container}><Row><Col>
      <div style={styles.section}>
        <h1>Wifi settings:</h1>
        <div style={ styles.item }>
          <WirelessConfigForm/>
        </div>
      </div>

    </Col></Row></Container>
  }
}

export default WifiSettings
