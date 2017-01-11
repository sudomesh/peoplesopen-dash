import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'

export default class ConfigItem extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.value }
  }
  render () {
    const {
      label,
      name,
      toChange,
      save
    } = this.props

    const slug = name + toChange

    return <Form onSubmit={event => {
      event.preventDefault()
      save({ name, toChange, value: this.state.value })
    }}>
      <FormGroup>
        <Label for={ slug }><b>{ label }</b></Label>
        <div style={{ display: 'flex' }}>
          <Input
            type="text"
            name={ slug }
            id={ slug }
            value={ this.state.value }
            onChange={ (event) => {
              this.setState({ value: event.target.value }) 
            }}
            style={{ maxWidth: 400 }}
          />
          <Button type="submit" style={{ marginLeft: 15 }}>Save</Button>
        </div>
      </FormGroup>
    </Form>
  }
}