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
import { login } from '../actions/index.js'
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

    return <Modal toggle={ () => {} } isOpen={ true }>
      <ModalHeader>Log in to PeoplesOpen.Net dashboard</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="password">Admin password</Label>
            <Input type="password" id="password" onChange={ bindState('password') } />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => {
          console.log('derpo')
          props.dispatch(login(state.password))
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
