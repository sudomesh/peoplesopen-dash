import React, { Component } from 'react';
import {
  Container,
  Row,
  Button,
  FormGroup,
  Input,
  Label,
  Col
} from 'reactstrap';
import routerImg from '../images/myNet-with-sticker.png'
import { saveSharingSettings } from '../actions/index.js'
import { connect } from 'react-redux'
import LoginScreen from './LoginScreen.js'
import SharingSettingsModal from './SharingSettingsModal.js'
import actionType from '../actions/types.js'

const propType = React.PropTypes

const styles = {
  item: {
    marginBottom: 20
  },
  center: {
    textAlign: 'center'
  }
}

class Frontpage extends Component {
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
    const {
      props,
      state,
      toggleModal,
    } = this

    if (props.isLoggedIn) {
      return <Container><Row><Col>
        <div>
          <div style={ styles.center }>
            <img src={ routerImg } alt="router"/>
          </div>
        </div>

        <p style={ styles.item }>This is the dashboard for your new PeoplesOpen.net router. If there are enough routers nearby, they form a "mesh network" which can provide internet access.</p>

        <h3>Status:</h3>

        <p style={ styles.item }>Right now, you're connected to three neighbor routers: { commaAndString(props.neighbors.map(neighbor => neighbor.name)) }.</p>

        <p style={ styles.item }>You're connected to the internet through <b>{ props.internetNeighbor }</b>.</p>

        <p style={ styles.item }>So far, you've transferred <b>{ props.totalTransfered }</b> of data between neighbor routers.</p>

        <h3>Sharing:</h3>

        { props.isSharing ?
          <div>
            You are currently sharing your home internet connection to help other nodes on the mesh network get access to the internet.

            You have shared <b>{ props.totalShared }</b> this month.

            Bandwidth sharing is limited to <b>{ props.sharingLimit }</b>. If you connect your devices to this wifi network (<b>{ props.privateSSID }</b>), they will automatically receive priority over other traffic, and you can turn this limit off.
          </div>
        :
          <div style={ styles.item }>Your home internet connection is currently <b>not</b> being shared on the mesh network. If you'd like to securely donate a small portion of your own bandwidth to this project, <a tabIndex={0} onClick={ this.toggleModal }>click here to start sharing</a>.</div>
        }

        <SharingSettingsModal
          modalIsOpen={ state.modalIsOpen }
          toggleModal={ toggleModal } 
          onSubmit={ sharingSettings => props.dispatch(saveSharingSettings(sharingSettings)) }/>

        <div><h3>Passwords:</h3></div>

        <ConfigForm/>

      </Col></Row></Container>
    } else {
      return <LoginScreen/>
    }
  }
}

class ConfigForm extends Component {
  save = (config, section, toChange) => {
    return (value) => {
      this.props.dispatch({
        type: actionType('config changed'),
        payload: {
          config,
          section,
          values: {
            [toChange]: value
          }
        }
      })
    }
  }

  render () {
    return <div>
      <ConfigItem
        label="2.4ghz private network SSID"
        slug="priv2ssid"
        save={ this.save('') }
      />
    </div>
  }
}

function ConfigItem ({
  label,
  slug,
  bindState
}) {
  return <FormGroup>
    <Label for={ slug }>{ label }</Label>
    <div style={{ display: 'flex' }}>
      <Input type="text" name={ slug } id={ slug } />
      <Button style={{ marginLeft: 20 }}>Save</Button>
    </div>
  </FormGroup>
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