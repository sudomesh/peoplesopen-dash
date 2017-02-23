import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">peoplesopen.net dashboard</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink active={this.props.hash === 'home' || this.props.hash === ''} href="#home">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={this.props.hash === 'wifi'} href="#wifi">Wifi Settings</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={this.props.hash === 'connections'} href="#connections">Connections</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}