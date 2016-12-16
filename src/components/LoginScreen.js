import React, { Component } from 'react'
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
} from 'reactstrap'
import { saveSharingSettings } from '../actions/index.js'
import { connect } from 'react-redux'

class LoginScreen extends Component {
  bindState = (property) => {
    return (event) => {
      this.setState({ [property]: event.target.value })
    }
  }

  render () {
    const {
      props,
      state,
      bindState
    } = this

    return <Modal isOpen={ true }>
      <ModalHeader>Log in to dashboard</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="admin-password">Wifi password</Label>
            <Input type="password" id="admin-password" onChange={ bindState('admin-password') } />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => {
          props.toggleModal()
          props.onSubmit(this.state)
        }}>Submit</Button>
      </ModalFooter>
    </Modal>
  }
}

export default connect(mapStateToProps)(LoginScreen)

function mapStateToProps (state) {
  return {
    isLoggedIn: state.isLoggedIn
  }
}
