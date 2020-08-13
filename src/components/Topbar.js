import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

export default class TopBar extends Component {
  render() {
    return (
      <Navbar bg = 'light' expand = 'xl'>
        <Navbar.Brand>ChampView</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className = "mr-auto">
            <Nav.Link href = "#">All Champions</Nav.Link>
            <Nav.Link href = "#"> Champion of the Day</Nav.Link>
          </Nav>
          <Form inline>
            <Form.Control type = "text" placeholder = "Search Champions" className = "mr-sm-2"/>
            <Button variant = "light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
