import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
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

    return <Modal toggle={ () => {} } isOpen={ true } show={ true }>
      <ModalHeader>Log in to PeoplesOpen.Net dashboard</ModalHeader>
      <form onSubmit={e => {
        e.preventDefault()
        props.dispatch(login(state.password))}
      }>
        <ModalBody>
          <FormGroup>
            <Label for="password">Admin password</Label>
            <Input type="password" id="password" onChange={ bindState('password') } />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">Login</Button>
        </ModalFooter>
      </form>
    </Modal>
  }
}

export default connect(mapStateToProps)(LoginScreen)

function mapStateToProps (state) {
  return {
    isLoggedIn: state.isLoggedIn
  }
}
