import React from 'react';
import { Collapse, Navbar, NavbarToggler, Container, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
      <Navbar color="faded" light toggleable>
        <Container>
          <NavbarToggler right onClick={this.toggle} />
          {/*<NavbarBrand href="/">PeoplesOpen.net</NavbarBrand>*/}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#wifi">Wifi Settings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#connections">Connections</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}