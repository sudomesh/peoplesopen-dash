import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import routerImg from './images/myNet-with-sticker.png'
import { saveSharingSettings } from './actions/index.js'
import { connect } from 'react-redux'

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
      setState,
      toggleModal,
      setSharingSetting
    } = this

    return <Container>
      <Row>
        <div style={ styles.center }>
          <img src={ routerImg } alt="router"/>
        </div>
      </Row>

      <Row style={ styles.item }>This is the dashboard for your new PeoplesOpen.net router. If there are enough routers nearby, they form a "mesh network" which can provide internet access.</Row>

      <Row><h3>Status:</h3></Row>

      <Row style={ styles.item }>Right now, you're connected to three neighbor routers: { commaAndString(props.neighbors.map(neighbor => neighbor.name)) }.</Row>

      <Row style={ styles.item }>You're connected to the internet through <b>{ props.internetNeighbor }</b>.</Row>

      <Row style={ styles.item }>So far, you've transferred <b>{ props.totalTransfered }</b> of data between neighbor routers.</Row>

      { props.isSharing ?
        <Row>
          You are currently sharing your home internet connection to help other nodes on the mesh network get access to the internet.

          You have shared <b>{ props.totalShared }</b> this month.

          Bandwidth sharing is limited to <b>{ props.sharingLimit }</b>. If you connect your devices to this wifi network (<b>{ props.privateSSID }</b>), they will automatically receive priority over other traffic, and you can turn this limit off.
        </Row>
      :
        <Row style={ styles.item }>Your home internet connection is currently <b>not</b> being shared on the mesh network. If you'd like to securely donate a small portion of your own bandwidth to this project, <a tabIndex={0} onClick={ this.toggleModal }>click here to start sharing</a>.</Row>
      }

      <SharingSettingsModal
        modalIsOpen={ state.modalIsOpen }
        toggleModal={ toggleModal } 
        onSubmit={ sharingSettings => props.dispatch(saveSharingSettings(sharingSettings)) }/>

    </Container>
  }
}

class SharingSettingsModal extends Component {
  bindState = (property) => {
    return (event) => {
      this.setState({ [property]: event.target.value })
    }
  }

  render () {
    const {
      props: {
        modalIsOpen,
        toggleModal,
        onSubmit
      },
      state,
      bindState
    } = this

    return <Modal isOpen={ modalIsOpen } toggle={ toggleModal }>
      <ModalHeader toggle={ toggleModal }>Bandwidth Sharing Settings</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="ssid">Wifi network</Label>
            <Input id="ssid" onChange={ bindState('ssid') } />
          </FormGroup>
          <FormGroup>
            <Label for="wifi-password">Wifi password</Label>
            <Input type="password" id="wifi-password" onChange={ bindState('wifi-password') } />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => {
          toggleModal()
          onSubmit(state)
        }}>Save</Button>{' '}
        <Button color="secondary" onClick={ toggleModal }>Cancel</Button>
      </ModalFooter>
    </Modal>
  }
}

export default connect()(Frontpage)

export function commaAndString (items) {
  return items.map((item, i, arr) => {
    if (i === (arr.length - 2)) {
      return <span><b>{item}</b>{(arr.length < 3 ? ' and ' : ', and ')}</span>
    } else if (i === (arr.length - 1)) {
      return <b>{item}</b>
    } else {
      return <span><b>{item}</b>, </span>
    }
  })
}