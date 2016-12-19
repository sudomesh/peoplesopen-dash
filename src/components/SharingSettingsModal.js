import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

export default class SharingSettingsModal extends Component {
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
      <Form onSubmit={() => {
        toggleModal()
        onSubmit(state)
      }}>
        <ModalBody>
          <FormGroup>
            <Label for="ssid">Wifi network</Label>
            <Input id="ssid" onChange={ bindState('ssid') } />
          </FormGroup>
          <FormGroup>
            <Label for="wifi-password">Wifi password</Label>
            <Input type="password" id="wifi-password" onChange={ bindState('wifi-password') } />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">Save</Button>{' '}
          <Button color="secondary" onClick={ toggleModal }>Cancel</Button>
        </ModalFooter>
      </Form>
    </Modal>
  }
}